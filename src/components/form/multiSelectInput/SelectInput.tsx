import React, { useEffect, useRef, useState } from "react";
import { X, ChevronDown } from "lucide-react";

export type TSelectOptions = {
	label: string;
	value: string | number;
};

type TMultipleSelectProps = {
	multiple: true;
	value: TSelectOptions[];
	onChange: (value: TSelectOptions[]) => void;
};

type TSingleSelectProps = {
	multiple?: false;
	value?: TSelectOptions;
	onChange: (value: TSelectOptions | undefined) => void;
};

type TSelectProps = {
	options: TSelectOptions[];
} & (TSingleSelectProps | TMultipleSelectProps);

const SelectInput = ({ value, multiple, onChange, options }: TSelectProps) => {
	const [open, setOpen] = useState(false);
	const [highlitedIndex, setHighlitedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const clearOptions = () => {
		multiple ? onChange([]) : onChange(undefined);
	};
	const selectOption = (option: TSelectOptions) => {
		if (multiple) {
			if (value.includes(option)) {
				onChange(value.filter((o) => o !== option));
			} else {
				onChange([...value, option]);
			}
		} else {
			if (option !== value) {
				onChange(option);
			}
		}
	};
	const isOptionSelected = (option: TSelectOptions) => {
		return multiple ? value.includes(option) : option === value;
	};
	useEffect(() => {
		if (open) setHighlitedIndex(0);
	}, [open]);
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.target != containerRef.current) return;
			switch (e.code) {
				case "Enter":
				case "Space":
					setOpen((prev) => !prev);
					if (open) selectOption(options[highlitedIndex]);
					break;
				case "ArrowUp":
				case "ArrowDown": {
					if (!open) {
						setOpen(true);
						break;
					}

					const newValue = highlitedIndex + (e.code === "ArrowDown" ? 1 : -1);
					if (newValue >= 0 && newValue < options.length) {
						setHighlitedIndex(newValue);
					}
					break;
				}
				case "Escape":
					setOpen(false);
					break;
			}
		};
		containerRef.current?.addEventListener("keydown", handler);

		return () => {
			containerRef.current?.removeEventListener("keydown", handler);
		};
	}, [open, highlitedIndex, options]);

	return (
		<div
			ref={containerRef}
			onClick={() => setOpen((prev) => !prev)}
			tabIndex={0}
			className="relative flex items-center justify-between w-full bg-white rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		>
			<span className="flex-1 flex flex-wrap gap-2">
				{multiple
					? value.map((val) => (
							<div
								onClick={(e) => {
									e.stopPropagation();
									selectOption(val)
								}}
								key={val.value}
								className="flex items-center gap-1 border-2 rounded-md px-1"
							>
								{val.label}
								<X
									// onClick={(e) => {
									// 	e.stopPropagation();
									// 	clearOptions();
									// }}
									className="w-[18px] cursor-pointer"
								/>
							</div>
					  ))
					: value?.label}
			</span>

			<div className="flex items-center gap-1">
				<X
					onClick={(e) => {
						e.stopPropagation();
						clearOptions();
					}}
					className="w-[18px] cursor-pointer"
				/>
				<div className="w-[1.5px] h-5 bg-slate-500"></div>
				<ChevronDown className="w-[18px] cursor-pointer" />
			</div>

			<ul
				className={`${
					open ? "block" : "hidden"
				} absolute top-10 left-0 w-full max-h-48 overflow-y-auto bg-white rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300`}
			>
				{options.map((option, index) => (
					<li
						onClick={(e) => {
							e.stopPropagation();
							selectOption(option);
							setOpen(false);
						}}
						onMouseEnter={() => setHighlitedIndex(index)}
						key={index}
						value={option.value}
						className={`
						${isOptionSelected(option) ? "bg-blue-400 text-white" : ""} 
						${index === highlitedIndex ? "bg-blue-500 text-white" : ""}
						px-2.5 py-1.5 hover:bg-blue-500 hover:text-white`}
					>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SelectInput;
