import React, { useState } from "react";
import SelectInput, { TSelectOptions } from "./SelectInput";

const options = ["Frst", "Second", "Third", "Forth"];

const MultiSelectInput = () => {
	const [value, setValue] = useState([]);
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
