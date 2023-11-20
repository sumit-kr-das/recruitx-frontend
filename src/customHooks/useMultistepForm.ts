import { ReactElement, useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	const next = () => {
		setCurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	};
	const back = () => {
		setCurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	};
	const goTo = (index: number) => {
		return setCurrentStepIndex(index);
	};
	return {
		setCurrentStepIndex,
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		goTo,
		next,
		back,
	};
};

export default useMultistepForm;