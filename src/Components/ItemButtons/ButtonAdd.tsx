import Popover, { ArrowContainer } from "react-tiny-popover";
import { __ } from "@wordpress/i18n";

import { Div, Icon, Button } from "utils/Components";
import { useToggle } from "utils/hooks";
import { Position } from "./ItemButtons";

type Props = {
	insert: (position: Position) => void;
	index_after: number;
	index_last: number;
};

export const ButtonAdd: React.ComponentType<Props> = props => {
	const { insert, index_after, index_last } = props;
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
								insert("start");
							}}
						>
							{__("Add at the beginning")}
						</Button>
						<Button
							className={[
								"button",
								"button-menu",
								index_last === 0 ? "is_disabled" : null
							]}
							onClick={() => {
								close();
								insert("end");
							}}
						>
							{__("Add at the end")}
						</Button>
						<Button
							className={[
								"button",
								"button-menu",
								index_after === 0 ? "is_disabled" : null
							]}
							onClick={() => {
								close();
								insert("before");
							}}
						>
							{__("Add before block selection")}
						</Button>
						<Button
							className={[
								"button",
								"button-menu",
								index_after === 0 ? "is_disabled" : null
							]}
							onClick={() => {
								close();
								insert("after");
							}}
						>
							{__("Add after block selection")}
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
					"button-add",
					is_open ? "is_open" : null
				]}
			>
				<Icon icon="add" />
			</Button>
		</Popover>
	);
};
