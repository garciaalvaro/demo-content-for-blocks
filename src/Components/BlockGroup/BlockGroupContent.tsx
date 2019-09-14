import { Div } from "utils/Components";
import { Item } from "../Item/Item";

interface Props extends Pick<BlockGroup, "actions" | "items"> {}

export const BlockGroupContent: React.ComponentType<Props> = props => {
	const { actions, items } = props;

	return (
		<Div className="group-content">
			{items.map(item => (
				<Item key={item.id} {...item} actions={actions} />
			))}
		</Div>
	);
};
