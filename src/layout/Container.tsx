import { TReactNodeProps } from "../@types/TReactNodeProps";

const Container = ({ children }: TReactNodeProps) => {
	return (
		<div className="max-w-screen-xl mx-auto pt-24 pb-20 px-5">{children}</div>
	);
};

export default Container;
