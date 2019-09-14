import { times } from "lodash";
import { compose } from "@wordpress/compose";
import { createBlock } from "@wordpress/blocks";
import { withDispatch, withSelect } from "@wordpress/data";

import "./ItemButtons.styl";
import { Div } from "utils/Components";
import { ButtonAdd } from "./ButtonAdd";
import { ButtonReplace } from "./ButtonReplace";

export type Position = "after" | "before" | "start" | "end";

type BlockInstance = import("wordpress__blocks").BlockInstance;

interface WithSelectProps {
	client_ids: string[];
	index_before: number;
	index_after: number;
	index_last: number;
}

interface WithDispatchProps {
	insertBlocks: Function;
	removeBlocks: Function;
}

interface OwnProps extends Item {
	actions: BlockGroup["actions"];
}

interface Props extends WithSelectProps, WithDispatchProps, OwnProps {}

const createBlocks = (blocks_raw: Block[]): BlockInstance[] => {
	const blocks: BlockInstance[] = [];

	blocks_raw.forEach(({ name, attributes, innerBlocks, number_of_instances }) =>
		times(number_of_instances, () => {
			const inner_blocks = createBlocks(innerBlocks);

			blocks.push(createBlock(name, attributes, inner_blocks));
		})
	);

	return blocks;
};

export const ItemButtons: React.ComponentType<OwnProps> = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		insertBlocks: dispatch("core/block-editor").insertBlocks,
		removeBlocks: dispatch("core/block-editor").removeBlocks
	})),
	withSelect<WithSelectProps>(select => {
		// TODO: types.
		const {
			getClientIdsWithDescendants,
			getBlockCount,
			getBlockIndex,
			getSelectedBlockClientId,
			getFirstMultiSelectedBlockClientId,
			getLastMultiSelectedBlockClientId
		} = select("core/block-editor");

		let index_before = 0;
		let index_after = 0;

		if (getSelectedBlockClientId() !== null) {
			index_before = getBlockIndex(getSelectedBlockClientId());
			index_after = index_before + 1;
		} else if (getFirstMultiSelectedBlockClientId() !== null) {
			index_before = getBlockIndex(getFirstMultiSelectedBlockClientId());
			index_after =
				(getBlockIndex(getLastMultiSelectedBlockClientId()) as number) + 1;
		}

		return {
			client_ids: getClientIdsWithDescendants(),
			index_before,
			index_after,
			index_last: getBlockCount()
		};
	})
])((props: Props) => {
	const {
		blocks: blocks_raw,
		actions,
		insertBlocks,
		removeBlocks,
		client_ids,
		index_before,
		index_after,
		index_last
	} = props;

	const insert = (replace = false, position: Position = "after") => {
		const blocks = createBlocks(blocks_raw);

		switch (position) {
			case "after":
				insertBlocks(blocks, index_after);
				break;

			case "before":
				insertBlocks(blocks, index_before);
				break;

			case "end":
				insertBlocks(blocks, index_last);
				break;

			default:
				insertBlocks(blocks, 0);
				break;
		}

		if (replace) {
			removeBlocks(client_ids);
		}
	};

	return (
		<Div className="item-buttons">
			{actions.includes("add") && (
				<ButtonAdd
					insert={(position: Position) => insert(false, position)}
					index_after={index_after}
					index_last={index_last}
				/>
			)}
			{actions.includes("replace") && (
				<ButtonReplace insert={() => insert(true)} />
			)}
		</Div>
	);
});
