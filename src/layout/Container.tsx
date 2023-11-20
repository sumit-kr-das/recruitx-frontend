import React from "react";
import { TReactNodeProps } from "../@types/TReactNodeProps";

const Container = ({ children }: TReactNodeProps) => {
	return (
		<div className="bg-red-200 max-w-screen-xl mx-auto pt-24 pb-20">
			{children}
		</div>
	);
};

export default Container;
