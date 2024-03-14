import { TReactNodeProps } from "../@types/TReactNodeProps";
import { cn } from "../lib/utils.ts";

type TContainerProp = TReactNodeProps & {
  className?: string;
};

const Container = ({ children, className }: TContainerProp) => {
  return (
    <div
      className={cn("max-w-screen-xl mx-auto pb-20 px-4 md:px-5", className)}
    >
      {children}
    </div>
  );
};

export default Container;
