import { Button, Div, Icon, H3, P } from "utils/Components";

interface Props extends Pick<BlockGroup, "title" | "description"> {
	is_open: boolean;
	toggle: Function;
}

export const BlockGroupHeader: React.ComponentType<Props> = props => {
	const { is_open, toggle, title, description } = props;

	return (
		<Div className="group-header">
			<H3 className="group-title">{title}</H3>

			{description && (
				<P className="group-description-paragraph">{description}</P>
			)}

			<Button className={["button", "button-icon"]} onClick={toggle}>
				<Icon icon={is_open ? "collapse" : "expand"} />
			</Button>
		</Div>
	);
};
