import apiFetch from "@wordpress/api-fetch";
import { useEffect } from "@wordpress/element";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { addQueryArgs } from "@wordpress/url";
import { forOwn, mapValues, uniq, sortBy } from "lodash";

import { store_slug } from "utils/data";
import { parseMediaDependency } from "utils/tools";

interface WithDispatchProps extends Pick<ActionCreators, "updateBlockGroups"> {}

interface WithSelectProps {
	uploaded_images: State["uploaded_images"];
	block_groups: State["block_groups"];
}

interface Props extends WithDispatchProps, WithSelectProps {}

export const SideEffectParseMedia = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		updateBlockGroups: dispatch(store_slug).updateBlockGroups
	})),
	withSelect<WithSelectProps>(select => ({
		uploaded_images: select(store_slug).getUploadedImages(),
		block_groups: select(store_slug).getBlockGroups()
	}))
])((props: Props) => {
	const { uploaded_images, block_groups, updateBlockGroups } = props;

	useEffect(() => {
		if (!uploaded_images || !block_groups.length) {
			return;
		}

		const fetch = async () => {
			const images_id: number[] = [];

			forOwn(uploaded_images, namespace =>
				forOwn(namespace, image => {
					images_id.push(image.id);
				})
			);

			const media = await apiFetch<MediaItem[]>({
				path: addQueryArgs("/wp/v2/media", {
					per_page: 99,
					include: sortBy(uniq(images_id)).join(",")
				})
			});

			if (!media) {
				return;
			}

			const uploaded_images_with_media: UploadedImagesWithMedia = mapValues(
				uploaded_images,
				namespace =>
					mapValues(namespace, image => ({
						...image,
						media: media.find(({ id }) => id === image.id) || {}
					}))
			);

			const block_groups_parsed = block_groups.map(group => ({
				...group,
				items: group.items.map(item => ({
					...item,
					description_img_url: parseMediaDependency(
						item.description_img_url,
						group.namespace,
						uploaded_images_with_media
					),
					blocks: item.blocks.map(block => {
						if (item.media_dependencies.length) {
							block.attributes = parseMediaDependency(
								block.attributes,
								group.namespace,
								uploaded_images_with_media
							);

							block.innerBlocks = parseMediaDependency(
								block.innerBlocks,
								group.namespace,
								uploaded_images_with_media
							);
						}

						return block;
					})
				}))
			}));

			updateBlockGroups(block_groups_parsed);
		};

		fetch();
	}, [uploaded_images, block_groups.length]);

	return null;
});
