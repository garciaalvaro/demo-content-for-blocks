import { useToggle, useColorScheme } from "utils/hooks";
import { Div } from "utils/Components";

import "./BlockGroup.styl";
import { BlockGroupHeader } from "./BlockGroupHeader";
import { BlockGroupContent } from "./BlockGroupContent";

export const BlockGroup: React.ComponentType<BlockGroup> = props => {
	const { id, background_color, title, description, actions, items } = props;
	const { is_open, toggle } = useToggle();
	const color_scheme = useColorScheme();
	const style = {
		"--background_color": background_color,
		// TODO: Use a CSS class
		"--color":
			color_scheme === "light" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)"
	};

	return (
		<Div className="group" style={style}>
			<BlockGroupHeader
				title={title}
				description={description}
				is_open={is_open}
				toggle={toggle}
			/>
			{is_open && <BlockGroupContent actions={actions} items={items} />}
		</Div>
	);
};
