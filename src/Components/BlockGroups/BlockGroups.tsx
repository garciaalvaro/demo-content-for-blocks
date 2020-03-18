import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

import "./BlockGroups.styl";
import { Span, Div } from "utils/Components";
import { store_slug } from "utils/data";
import { BlockGroup } from "../BlockGroup/BlockGroup";
import { UploadImages } from "../UploadImages/UploadImages";

type WithSelectProps = {
	groups: BlockGroup[];
};

export const BlockGroups: React.ComponentType = withSelect<WithSelectProps>(
	select => ({ groups: select(store_slug).getBlockGroups() })
)(props => {
	const { groups } = props;

	if (!groups.length) {
		return (
			<Div id="no-groups">
				<Span>{__("It seems there are no registered groups.")}</Span>
			</Div>
		);
	}

	return (
		<Fragment>
			<UploadImages />

			{groups.map(group => (
				<BlockGroup key={group.id} {...group} />
			))}
		</Fragment>
	);
});
