import { useState } from "react";
import SelectInput from "./SelectInput";

const MultiSelectInput = ({ options }: { options: string[] }) => {
	const [value, setValue] = useState([options[0]]);
	console.log(value);

	return (
		<SelectInput
			multiple
			options={options}
			value={value}
			onChange={(o) => setValue(o)}
		/>
	);
};

export default MultiSelectInput;
