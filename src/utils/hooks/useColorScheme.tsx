import tinycolor from "tinycolor2";
import { useState, useEffect } from "@wordpress/element";

export const useColorScheme = (color = "") => {
	const [scheme, setScheme] = useState("dark");

	useEffect(() => {
		if (
			color &&
			tinycolor.isReadable("#fff", color, {
				level: "AA",
				size: "large"
			})
		) {
			setScheme("light");
		} else {
			setScheme("dark");
		}
	}, [color]);

	return scheme;
};
