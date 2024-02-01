import React from "react";
import { Button } from "../../ui/button";

type TUserTitleProps = {
  children: React.ReactNode;
  title: string;
  titleVariant: string;
  des: string;
  handleLoadJobs?: () => void;
};

const UserTitleWrapper = ({
  children,
  title,
  titleVariant,
  handleLoadJobs,
  des,
}: TUserTitleProps) => {
  return (
    <div>
      <div className="mx-auto max-w-xl text-center mt-20 mb-10">
        <h1 className="text-4xl font-extrabold">
          {title} <span className="text-cyan-500">{titleVariant}</span>
        </h1>
        <p className="mt-4 sm:text-xl/relaxed">{des}</p>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-y-10">
        {children}
      </div>
      {handleLoadJobs && (
        <div className="mt-8 flex items-center justify-center">
          <Button onClick={handleLoadJobs}>Load more</Button>
        </div>
      )}
    </div>
  );
};

export default UserTitleWrapper;
