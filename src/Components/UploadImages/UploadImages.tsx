import { keys, reduce } from "lodash";
import { __, _n } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";

import "./UploadImages.styl";
import { Div, Span, P, Button } from "utils/Components";
import { store_slug } from "utils/data";
import { withUploadImages, WithUploadImagesProps } from "./withUploadImages";

interface WithSelectProps {
	images_to_upload_length: number;
	uploaded_images: State["uploaded_images"];
}

interface Props extends WithSelectProps, WithUploadImagesProps {}

export const UploadImages: React.ComponentType = compose([
	withSelect<WithSelectProps>(select => {
		const images_to_upload: UploadedImages = select(
			store_slug
		).getImagesToUpload();

		const images_to_upload_length = reduce(
			images_to_upload,
			(images_to_upload_length, namespace) =>
				images_to_upload_length + keys(namespace).length,
			0
		);

		return {
			images_to_upload_length,
			uploaded_images: select(store_slug).getUploadedImages()
		};
	}),
	withUploadImages
])((props: Props) => {
	const {
		uploaded_images,
		images_to_upload_length,
		uploadImages,
		is_uploading,
		error_code
	} = props;

	if (!images_to_upload_length || !uploaded_images) {
		return null;
	}

	return (
		<Div id="images_to_upload">
			<P>
				{error_code === 403
					? __(
							`The images could not be uploaded. It seems like you do not have the appropriate permissions (${error_code}).`
					  )
					: error_code
					? __(
							`The images could not be uploaded. There was an error (${error_code}).`
					  )
					: _n(
							`Some of the items need image (${images_to_upload_length}) to be uploaded to the Media Library.`,
							`Some of the items need images (${images_to_upload_length}) to be uploaded to the Media Library.`,
							images_to_upload_length
					  )}
			</P>

			{is_uploading ? (
				<Span>{__("Uploading...")}</Span>
			) : !error_code ? (
				<Button onClick={uploadImages} className={["button", "button-text"]}>
					{__("Upload")}
				</Button>
			) : null}
		</Div>
	);
});
