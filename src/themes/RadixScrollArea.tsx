import * as ScrollArea from "@radix-ui/react-scroll-area";
import { TReactNodeProps } from "../@types/TReactNodeProps";

type TRadixScrollProps = TReactNodeProps & {
	styles?: string;
};

const RadixScrollArea = ({ children, styles }: TRadixScrollProps) => {
	return (
		<ScrollArea.Root className={`rounded overflow-hidden ${styles}`}>
			<ScrollArea.Viewport className="w-full h-full rounded">
				{children}
			</ScrollArea.Viewport>

			<ScrollArea.Scrollbar
				className="flex select-none touch-none p-0.5 bg-cyan-100 transition-colors duration-[160ms] ease-out hover:bg-cyan-500 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
				orientation="vertical"
			>
				<ScrollArea.Thumb className="flex-1 bg-cyan-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar
				className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
				orientation="horizontal"
			>
				<ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className="bg-blackA5" />
		</ScrollArea.Root>
	);
};

export default RadixScrollArea;
