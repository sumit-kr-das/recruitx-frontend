import { TReactNodeProps } from "../@types/TReactNodeProps";

type TContainerProp = TReactNodeProps & {
	className?: string;
};

const Container = ({ children, className }: TContainerProp) => {
	return (
		<div className={`max-w-screen-xl mx-auto pb-20 px-5 ${className}`}>
			{children}
		</div>
	);
};

export default Container;
