import { jobRoles } from "../../constants/jobRoles";
import { skillData } from "../../constants/skillData";

const Categories = () => {
  return (
    <div className="w-full relative mt-10">
      {/* marquee */}
      <div className="flex w-full select-none overflow-hidden mask-gradient">
        {/* marqueeGroup */}
        <div className="w-full flex items-center gap-4 shrink-0 whitespace-nowrap marquee">
          {skillData.map((item, index) => (
            <div
              className="grid place-items-center border border-gray-600 px-4 py-1 rounded-full"
              key={index}
            >
              <p className="text-sm font-semibold capitalize">{item}</p>
            </div>
          ))}
        </div>
      </div>
      {/* marquee */}
      <div className="mt-4 flex w-full select-none overflow-hidden mask-gradient">
        {/* marqueeGroup */}
        <div className="w-full flex items-center gap-4 shrink-0 whitespace-nowrap marquee marquee-reverse">
          {jobRoles.map((item, index) => (
            <div
              className="grid place-items-center border border-black px-4 py-1 rounded-full"
              key={index}
            >
              <p className="text-sm font-semibold capitalize">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
