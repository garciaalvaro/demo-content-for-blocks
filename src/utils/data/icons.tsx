import { addPrefix } from "utils/tools/addPrefix";

export type Icons = Record<
	"add" | "replace" | "collapse" | "expand" | "logo",
	JSX.Element
>;

export const icons: Icons = {
	add: (
		/* https://material.io/tools/icons/?icon=control_point */
		<svg width="20" height="20" viewBox="0 0 24 24">
			<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	),
	replace: (
		/* https://material.io/tools/icons/?icon=control_point_duplicate */
		<svg width="23" height="23" viewBox="0 0 24 24">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
		</svg>
	),
	collapse: (
		/* https://material.io/tools/icons/?icon=expand_less */
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	),
	expand: (
		/* https://material.io/tools/icons/?icon=expand_more */
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	),
	logo: (
		<svg
			className={addPrefix("logo")}
			width="20"
			height="20"
			viewBox="0 0 20 20"
		>
			<polygon points="1,5 10,0 10,10" className={addPrefix("rect-back-1")} />
			<polygon points="10,0 19,5 10,10" className={addPrefix("rect-back-2")} />
			<circle cx="10" cy="9" r="5" className={addPrefix("circle")} />
			<polygon
				points="1,5 10,10 10,20 1,15"
				className={addPrefix("rect-front-1")}
			/>
			<polygon
				points="10,10 19,5 19,15 10,20"
				className={addPrefix("rect-front-2")}
			/>
		</svg>
	)
};
