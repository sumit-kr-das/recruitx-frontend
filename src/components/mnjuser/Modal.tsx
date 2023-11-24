import React, { useState } from "react";

export interface childProp {
	children: React.ReactNode;
	classes?: String;
}

const Modal = ({ children, classes }: childProp) => {
	return (
		<div className="w-full h-full absolute top-0 left-0 z-30 bg-black bg-opacity-25">
			<div
				className={`fixed top-1/2 left-1/2 p-10 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg ${classes}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;