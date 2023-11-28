import { Pen } from "lucide-react";

const ViewEducation = ({setOpen}) => {
  return (
    <>
      <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Education</h2>
          <h2
            onClick={() => setOpen((prev) => !prev)}
            className="font-bold text-blue-500 cursor-pointer"
          >
            Add Education
          </h2>
        </div>
        {/* <h2>
        Mention your educational details including your current and previous
        educational details.
      </h2> */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg">BCA Computers</h2>
            <Pen className="w-[12px]" />
          </div>
          <h3 className="font-semibold">
            Burdwan Institute of Management & Computer Science
          </h3>
          <h3>2022 | Full Time</h3>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg">BCA Computers</h2>
            <Pen className="w-[12px]" />
          </div>
          <h3 className="font-semibold">
            Burdwan Institute of Management & Computer Science
          </h3>
          <h3>2022 | Full Time</h3>
        </div>
      </div>
    </>
  );
};

export default ViewEducation;
