import { isArray, isObject, isString, forOwn } from "lodash";

export const getMediaDependencies = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attribute: any,
	namespace: BlockGroup["namespace"]
) => {
	const media_dependencies: Item["media_dependencies"] = [];

	if (isString(attribute)) {
		const path_raw = attribute.split(".");

		// If it is not a custom image attribute return an empty array.
		if (path_raw[0] !== "dcfb") {
			return media_dependencies;
		}

		media_dependencies.push(`${namespace}.${path_raw.slice(1, 2)}`);

		return media_dependencies;
	}

	if (isArray(attribute)) {
		attribute.forEach(attribute => {
			media_dependencies.push(
				...getMediaDependencies(attribute, namespace)
			);
		});

		return media_dependencies;
	}

	if (isObject(attribute)) {
		forOwn(attribute, attribute => {
			media_dependencies.push(
				...getMediaDependencies(attribute, namespace)
			);
		});

		return media_dependencies;
	}

	return media_dependencies;
};
