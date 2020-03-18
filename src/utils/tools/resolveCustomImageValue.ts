import { isEmpty, isString, mapValues } from "lodash";

import { parseMediaDependency } from "utils/tools/parseMediaDependency";

// Given an object:
// aspect_ratio: {
//     width: "dcfb.image-name.media_details.sizes.large.width",
//     height: "dcfb.image-name.media_details.sizes.large.height",
//     dcfb_resolve: ({ width, height }) => { return ( width / height ); }
// }
// This function will parse width and height values, use them as parameters
// in the dcfb_resolve function and return this function value.
// For example: width = 1000 and height = 500 return 2
export const resolveCustomImageValue = (
	attribute: CustomImageToResolve,
	namespace: BlockGroup["namespace"],
	uploaded_images: UploadedImagesWithMedia
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
