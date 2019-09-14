import { isEmpty, isString, mapValues } from "lodash";

import { parseMediaDependency } from "utils/tools/parseMediaDependency";

export type CustomImageObjectProp = Object & {
	dcfb_resolve: Function;
};

// Given an object:
// aspect_ratio: {
//     width: "dcfb.image-name.media_details.sizes.large.width",
//     height: "dcfb.image-name.media_details.sizes.large.height",
//     dcfb_resolve: ({ width, height }) => { return ( width / height ); }
// }
// This function will parse width and height values, use them as parameters
// in the dcfb_resolve function and return this function value.
// If parsed width is 1000 and parsed height is 500 the returned value would be 2.
export const resolveCustomImageValue = (
	attribute: CustomImageObjectProp,
	namespace: BlockGroup["namespace"],
	uploaded_images: UploadedImagesWithMedia
): any => {
	const { dcfb_resolve, ...props } = attribute;
	let is_valid = true;

	if (typeof dcfb_resolve !== "function" || isEmpty(props)) {
		return attribute;
	}

	const props_prepared = mapValues(props, attribute => {
		if (!isString(attribute)) {
			is_valid = false;
			return;
		}

		return parseMediaDependency(attribute, namespace, uploaded_images);
	});

	if (!is_valid) {
		return attribute;
	}

	return dcfb_resolve(props_prepared);
};
