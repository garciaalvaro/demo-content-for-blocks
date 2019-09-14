import "./App.styl";
import { Div } from "utils/Components";
import { BlockGroups } from "../BlockGroups/BlockGroups";
import { SideEffectFetchUploadedImages } from "./SideEffectFetchUploadedImages";
import { SideEffectLoadGroups } from "./SideEffectLoadGroups";
import { SideEffectParseMedia } from "./SideEffectParseMedia";

export const App: React.ComponentType = props => {
	return (
		<Div id="container">
			<SideEffectFetchUploadedImages />
			<SideEffectLoadGroups />
			<SideEffectParseMedia />
			<BlockGroups />
		</Div>
	);
};
