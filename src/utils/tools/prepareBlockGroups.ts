import { defaults, keys, pick, flatten, uniq } from "lodash";
import uuid from "uuid/v4";

import { getMediaDependencies } from "utils/tools/getMediaDependencies";

const item_defaults: Item = {
	title: "",
	description: "",
	description_list: [],
	description_img_url: "",
	actions: [],
	id: "",
	media_dependencies: [],
	blocks: []
};

const block_defaults: Block = {
	name: "",
	attributes: {},
	number_of_instances: 1,
	innerBlocks: []
};

const group_defaults: BlockGroup = {
	id: "",
	actions: ["add", "replace"],
	background_color: "",
	namespace: "",
	title: "",
	description: "",
	post_types: ["post"],
	items: [],
	custom_images: [],
	is_active: false
};

const prepareBlocks = (blocks_raw: BlockRaw[]) =>
	blocks_raw.map<Block>(block_raw => {
		const block = defaults(
			pick(block_raw, keys(block_defaults)),
			block_defaults
		);

		block.innerBlocks = prepareBlocks(block.innerBlocks);

		return block;
	});

export const prepareBlockGroups = (
	groups_raw: BlockGroupRaw[],
	current_post_type: string
) =>
	groups_raw.map<BlockGroup>(group_raw => {
		const group = defaults(
			{ id: uuid() },
			pick(group_raw, keys(group_defaults)),
			group_defaults
		);

		group.is_active = group.post_types.includes(current_post_type);

		group.items = group.items.map<Item>(item_raw => {
			const item = defaults(
				{ id: uuid() },
				pick(item_raw, keys(item_defaults)),
				item_defaults
			);

			item.blocks = prepareBlocks(item.blocks);

			item.media_dependencies = uniq(
				flatten(
					item.blocks.map(block =>
						getMediaDependencies(block.attributes, group.namespace)
					)
				)
			);

			return item;
		});

		return group;
	});
