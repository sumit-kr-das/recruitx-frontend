import React, { useState } from "react";
import SelectInput, { TSelectOptions } from "./SelectInput";

const options = [
	{ label: "First", value: 1 },
	{ label: "Second", value: 2 },
	{ label: "Third", value: 3 },
	{ label: "Fourth", value: 4 },
	{ label: "Fifth", value: 5 },
];

const MultiSelectInput = () => {
	const [value, setValue] = useState<TSelectOptions[]>([options[0]]);
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
