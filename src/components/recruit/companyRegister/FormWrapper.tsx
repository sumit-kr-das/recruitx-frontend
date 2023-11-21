import { ReactNode } from "react";

type TFormWrapperProps = {
	children: ReactNode;
	title: string;
};

const FormWrapper = ({ children, title }: TFormWrapperProps) => {
	return (
		<>
			<h1 className="text-center font-semibold pb-2 border-b-2">{title}</h1>
			{children}
		</>
	);
};

export default FormWrapper;
