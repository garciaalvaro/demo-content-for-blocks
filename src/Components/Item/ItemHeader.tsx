import { Div, P, H4, Ul, Li } from "utils/Components";

export const ItemHeader: React.ComponentType<Item> = props => {
	const { title, description, description_list } = props;

	return (
		<Div className="item-header">
			{title && <H4 className="item-title">{title}</H4>}

			{description && (
				<P className="item-description-paragraph">{description}</P>
			)}

			{!!description_list.length && (
				<Ul className="item-description-list">
					{description_list.map((item, index) => (
						<Li key={index} className="item-description-list">
							{item}
						</Li>
					))}
				</Ul>
			)}
		</Div>
	);
};
