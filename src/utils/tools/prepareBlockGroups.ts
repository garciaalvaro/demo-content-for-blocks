import { defaults, keys, pick, flatten, uniq } from "lodash";
import { v4 as uuid } from "uuid";
import { select } from "@wordpress/data";

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
	blocks_raw.reduce<Block[]>((blocks, block_raw) => {
		const block = defaults(
			pick(block_raw, keys(block_defaults)),
			block_defaults
		);

		const block_type = select("core/blocks").getBlockType(block.name);

		if (!block_type) return blocks;

		block.innerBlocks = prepareBlocks(block.innerBlocks);

		return [...blocks, block];
	}, []);

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

		group.items = group.items.reduce<Item[]>((items, item_raw) => {
			const item = defaults(
				{ id: uuid() },
				pick(item_raw, keys(item_defaults)),
				item_defaults
			);

			item.blocks = prepareBlocks(item.blocks);

			if (!item.blocks.length) return items;

			item.media_dependencies = uniq(
				flatten(
					item.blocks.map(block => [
						...getMediaDependencies(
							block.attributes,
							group.namespace
						),
						...getMediaDependencies(
							block.innerBlocks,
							group.namespace
						)
					])
				)
			);

			return [...items, item];
		}, []);

		return group;
	});
