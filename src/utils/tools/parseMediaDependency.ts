import {
	get,
	isArray,
	isObject,
	isString,
	isUndefined,
	mapValues
} from "lodash";

import {
	CustomImageObjectProp,
	resolveCustomImageValue
} from "utils/tools/resolveCustomImageValue";

export const parseMediaDependency = (
	attribute: any,
	namespace: BlockGroup["namespace"],
	uploaded_images: UploadedImagesWithMedia
): any => {
	if (isString(attribute)) {
		const path = attribute.split(".");

		if (!attribute.startsWith("dcfb.") || path.length < 3) {
			return attribute;
		}

		const [dcfb, image_name, ...attribute_path] = path;

		// Parse the value from the uploaded images object.
		const value = get(
			uploaded_images[namespace],
			[image_name, "media", ...attribute_path].join(".")
		);

		return isUndefined(value) ? attribute : value;
	}

	if (isArray(attribute)) {
		return attribute.map(attribute =>
			parseMediaDependency(attribute, namespace, uploaded_images)
		);
	}

	if (isObject(attribute)) {
		if ((attribute as any).dcfb_resolve) {
			return resolveCustomImageValue(
				attribute as CustomImageObjectProp,
				namespace,
				uploaded_images
			);
		}

		return mapValues(attribute, (attribute: any) =>
			parseMediaDependency(attribute, namespace, uploaded_images)
		);
	}

	return attribute;
};
