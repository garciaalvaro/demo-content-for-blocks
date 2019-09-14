import { Div, Img } from "utils/Components";

export const ItemImage: React.ComponentType<Item> = props => {
	const { title, description_img_url } = props;

	return (
		<Div className="item-image-container">
			<Img className="item-image" src={description_img_url} alt={title} />
		</Div>
	);
};
