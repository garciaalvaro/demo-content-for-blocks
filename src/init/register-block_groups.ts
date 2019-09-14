import { addFilter } from "@wordpress/hooks";

import { block_group_multiple, block_group_single } from "utils/data";

addFilter<BlockGroupRaw[]>("dcfb.addGroup", "core", groups => [
	...groups,
	block_group_single,
	block_group_multiple
]);
