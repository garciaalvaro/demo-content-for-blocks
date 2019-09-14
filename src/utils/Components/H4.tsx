import { prepareProps } from "utils/tools/prepareProps";

export const H4: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <h4 {...prepareProps(rest)}>{children}</h4>;
};
