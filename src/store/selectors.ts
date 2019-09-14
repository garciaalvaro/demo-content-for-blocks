import { keyBy, mapValues, reduce, isEmpty } from "lodash";

export const selectors: Selectors = {
	getBlockGroups: state =>
		state.block_groups.filter(({ is_active }) => is_active),
	// TODO: refactor
	getImagesToUpload: state => {
		const groups_with_images = state.block_groups.filter(
			({ is_active, custom_images }) => is_active && custom_images.length
		);
		const groups_by_namespace = keyBy(groups_with_images, "namespace");
		const groups_by_namespace_with_images = mapValues(
			groups_by_namespace,
			({ custom_images }) => keyBy(custom_images, "name")
		);
		const uploaded_images = state.uploaded_images || {};
		const groups_by_namespace_with_images_not_loaded = reduce(
			groups_by_namespace_with_images,
			(namespaces, images, namespace) => {
				if (!uploaded_images[namespace]) {
					return { ...namespaces, [namespace]: images };
				}

				const images_not_uploaded = reduce(
					images,
					(images_not_uploaded, image, image_name) => {
						if (uploaded_images[namespace][image_name]) {
							return images_not_uploaded;
						}

						return {
							...images_not_uploaded,
							[image_name]: image
						};
					},
					{}
				);

				if (isEmpty(images_not_uploaded)) {
					return namespaces;
				}

				return {
					...namespaces,
					[namespace]: { ...images, ...images_not_uploaded }
				};
			},
			{}
		);

		return groups_by_namespace_with_images_not_loaded;
	},
	getUploadedImages: state => state.uploaded_images,
	mediaUploaded: state => state.media_uploaded
};
