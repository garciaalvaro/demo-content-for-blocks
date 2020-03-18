import { isArray } from "lodash";
import apiFetch from "@wordpress/api-fetch";
import { useState } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withDispatch, withSelect } from "@wordpress/data";

import { store_slug } from "utils/data";

type WithDispatchProps = Pick<
	ActionCreators,
	"setUploadedImages" | "setMediaUploaded"
>;

type WithSelectProps = {
	images_to_upload: UploadedImages;
};

export type WithUploadImagesProps = {
	uploadImages: Function;
	error_code: number | null;
	is_uploading: boolean;
};

type Props = WithDispatchProps & WithSelectProps & WithUploadImagesProps;

export const withUploadImages = compose(
	withDispatch(dispatch => ({
		setUploadedImages: dispatch(store_slug).setUploadedImages,
		setMediaUploaded: dispatch(store_slug).setMediaUploaded
	})),
	withSelect(select => ({
		images_to_upload: select(store_slug).getImagesToUpload()
	})),
	(Component: React.ComponentType<WithUploadImagesProps>) => (
		props: Props
	) => {
		const {
			images_to_upload,
			setUploadedImages,
			setMediaUploaded,
			...rest
		} = props;
		const [error_code, setErrorCode] = useState<null | number>(null);
		const [is_uploading, setIsUploading] = useState(false);

		const uploadImages = async () => {
			setIsUploading(true);

			// We trigger the image upload and updated the value
			// of uploaded_images with the returned one
			let uploaded_images = await apiFetch<UploadedImages>({
				method: "POST",
				path: "/demo-content-for-blocks/v1/upload_images",
				data: {
					images: images_to_upload
				}
			}).catch(error => {
				setIsUploading(false);
				setErrorCode(error.data.status);
			});

			if (!uploaded_images) {
				return;
			}

			uploaded_images = isArray(uploaded_images) ? {} : uploaded_images;

			setUploadedImages(uploaded_images);
			setMediaUploaded(true);
			setIsUploading(false);
		};

		return (
			<Component
				{...rest}
				uploadImages={uploadImages}
				error_code={error_code}
				is_uploading={is_uploading}
			/>
		);
	}
);
