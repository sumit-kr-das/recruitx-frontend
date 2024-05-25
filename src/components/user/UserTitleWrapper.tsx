import React from "react";
import { cn } from "../../lib/utils.ts.ts";

type TUserTitleProps = {
  children: React.ReactNode;
  title: string;
  titleVariant: string;
  des: string;
  className?: string;
};

const UserTitleWrapper = ({
  children,
  title,
  titleVariant,
  des,
  className,
}: TUserTitleProps) => {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center mt-20 mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          {title} <span className="text-cyan-500">{titleVariant}</span>
        </h1>
        <p className="mt-4 sm:text-xl/relaxed">{des}</p>
      </div>
      <div
        className={cn(
          "w-full grid justify-items-center gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default UserTitleWrapper;
