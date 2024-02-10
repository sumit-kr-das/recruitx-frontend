import React from "react";

type TUserTitleProps = {
  children: React.ReactNode;
  title: string;
  titleVariant: string;
  des: string;
};

const UserTitleWrapper = ({
  children,
  title,
  titleVariant,
  des,
}: TUserTitleProps) => {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center mt-20 mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          {title} <span className="text-cyan-500">{titleVariant}</span>
        </h1>
        <p className="mt-4 sm:text-xl/relaxed">{des}</p>
      </div>
      <div className="flex items-center justify-center flex-wrap md:gap-x-5 gap-y-10">
        {children}
      </div>
    </div>
  );
};

export default UserTitleWrapper;
