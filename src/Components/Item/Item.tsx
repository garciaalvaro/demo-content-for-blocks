import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
import { Fragment, useState, useEffect } from "@wordpress/element";

import "./Item.styl";
import { Div, Span } from "utils/Components";
import { store_slug } from "utils/data";
import { ItemButtons } from "../ItemButtons/ItemButtons";
import { ItemHeader } from "./ItemHeader";
import { ItemImage } from "./ItemImage";

interface WithSelectProps {
	media_uploaded: State["media_uploaded"];
	uploaded_images: State["uploaded_images"];
}

interface OwnProps extends Item {
	actions: BlockGroup["actions"];
}

export const Item: React.ComponentType<OwnProps> = withSelect<
	WithSelectProps,
	OwnProps
>(select => ({
	media_uploaded: select(store_slug).mediaUploaded(),
	uploaded_images: select(store_slug).getUploadedImages()
}))(props => {
	const {
		uploaded_images,
		media_uploaded,
		description_img_url,
		media_dependencies
	} = props;
	const [needs_images_to_be_uploaded, setNeedsImagesToBeUploaded] = useState(
		!!media_dependencies.length
	);

	useEffect(() => {
		if (!uploaded_images) {
			return;
		}

		const images_to_be_uploaded = media_dependencies.filter(image => {
			const [namespace, image_name] = image.split(".");

			if (
				!uploaded_images[namespace] ||
				!uploaded_images[namespace][image_name]
			) {
				return true;
			}

			return false;
		});

		setNeedsImagesToBeUploaded(!!images_to_be_uploaded.length);
	}, [media_uploaded, media_dependencies, uploaded_images]);

	return (
		<Div className={["item", media_uploaded ? null : "no-media_uploaded"]}>
			<ItemHeader {...props} />

			{media_uploaded || !needs_images_to_be_uploaded ? (
				<Fragment>
					{description_img_url && <ItemImage {...props} />}
					<ItemButtons {...props} />
				</Fragment>
			) : (
				<Div className="item-notice">
					<Span>{__("This item uses images that need to be uploaded.")}</Span>
				</Div>
			)}
		</Div>
	);
});
