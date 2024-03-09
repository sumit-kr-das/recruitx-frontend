import { Plus } from "lucide-react";
import { useGetUserExpQuery } from "../../../../features/user/get/getUserExpApiSlice";
import ListUserExp from "./ListUserExp";

const ViewUserExp = ({ setIsOpen }: { setIsOpen: Function }) => {
  const { data } = useGetUserExpQuery();

  return (
    <div className="relative mt-4 bg-white p-4 sm:p-10 rounded-lg border shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
          Exprience
        </h2>
      </div>
      <div
        onClick={() => setIsOpen(true)}
        title="edit"
        className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
      >
        <Plus className="w-[15px] h-[15px]" />
      </div>
      {data && data.length == 0 && (
        <h2 className="mt-1 text-sm leading-6 text-gray-600">
          Mention your educational details including your current and previous
          educational details.
        </h2>
      )}
      {data?.map((item, index) => <ListUserExp key={index} item={item} />)}
    </div>
  );
};

export default ViewUserExp;
