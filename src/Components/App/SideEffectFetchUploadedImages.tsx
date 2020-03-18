import apiFetch from "@wordpress/api-fetch";
import { useEffect } from "@wordpress/element";
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";

import { store_slug } from "utils/data";

type WithDispatchProps = Pick<ActionCreators, "setUploadedImages">;

type WithSelectProps = {
	uploaded_images: State["uploaded_images"];
};

type Props = WithDispatchProps & WithSelectProps;

export const SideEffectFetchUploadedImages = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		setUploadedImages: dispatch(store_slug).setUploadedImages
	})),
	withSelect<WithSelectProps>(select => ({
		uploaded_images: select(store_slug).getUploadedImages()
	}))
])((props: Props) => {
	const { uploaded_images, setUploadedImages } = props;

	useEffect(() => {
		if (uploaded_images) {
			return;
		}

		const fetch = async () => {
			const uploaded_images = await apiFetch<UploadedImages>({
				path: "/demo-content-for-blocks/v1/uploaded_images"
			});

			if (!uploaded_images) {
				return;
			}

			setUploadedImages(uploaded_images);
		};

		fetch();
	}, []);

	return null;
});
