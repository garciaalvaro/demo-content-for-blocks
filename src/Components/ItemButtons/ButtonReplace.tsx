import Popover, { ArrowContainer } from "react-tiny-popover";
import { __ } from "@wordpress/i18n";

import { Div, Icon, Button } from "utils/Components";
import { useToggle } from "utils/hooks";

interface Props {
	insert: () => void;
}

export const ButtonReplace: React.ComponentType<Props> = props => {
	const { insert } = props;
	const { is_open, close, toggle } = useToggle();

	return (
		<Popover
			containerStyle={{
				minWidth: "200px",
				marginLeft: "-10px",
				zIndex: "999999"
			}}
			isOpen={is_open}
			onClickOutside={close}
			transitionDuration={0.01}
			content={({ position, targetRect, popoverRect }) => (
				<ArrowContainer
					position={position}
					targetRect={targetRect}
					popoverRect={popoverRect}
					arrowColor={"#111"}
					arrowSize={6}
				>
					<Div className="menu">
						<Button
							className={["button", "button-menu"]}
							onClick={() => {
								close();
								insert();
							}}
						>
							{__("Remove current blocks and Add")}
						</Button>
					</Div>
				</ArrowContainer>
			)}
		>
			<Button
				onClick={toggle}
				className={[
					"button",
					"button-item",
					"button-replace",
					is_open ? "is_open" : null
				]}
			>
				<Icon icon="replace" />
			</Button>
		</Popover>
	);
};
