import { useEffect } from "@wordpress/element";
import { withSelect, withDispatch, select } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { applyFilters } from "@wordpress/hooks";

import { store_slug } from "utils/data";
import { prepareBlockGroups } from "utils/tools";

type WithDispatchProps = Pick<ActionCreators, "updateBlockGroups">;

type WithSelectProps = {
	block_groups: State["block_groups"];
};

type Props = WithDispatchProps & WithSelectProps;

export const SideEffectLoadGroups = compose([
	withDispatch<WithDispatchProps>(dispatch => ({
		updateBlockGroups: dispatch(store_slug).updateBlockGroups
	})),
	withSelect<WithSelectProps>(select => ({
		block_groups: select(store_slug).getBlockGroups()
	}))
])((props: Props) => {
	const { block_groups, updateBlockGroups } = props;

	useEffect(() => {
		if (block_groups.length) {
			return;
		}

		const loadGroups = async () => {
			const current_post_type: string = await select(
				"core/editor"
			).getCurrentPostType();

			const groups_raw: BlockGroupRaw[] = applyFilters(
				"dcfb.addGroup",
				[]
			);

			const groups = prepareBlockGroups(groups_raw, current_post_type);

			updateBlockGroups(groups);
		};

		loadGroups();
	}, []);

	return null;
});
