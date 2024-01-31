import { useGetWebStatsQuery } from "../../features/statics/getWebStatsApiSlice";

const Visitors = () => {
  const { data } = useGetWebStatsQuery();
  return (
    <div className="max-w-screen-xl">
    <div className="">
      <div className="flex flex-col rounded-lg bg-white border shadow px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">
          Total Companies
        </dt>
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
          {data?.companies}
        </dd>
      </div>
      <div className="flex flex-col rounded-lg bg-white border shadow px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">
          Total Jobs
        </dt>
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
          {data?.jobs}
        </dd>
      </div>
      <div className="flex flex-col rounded-lg bg-white border shadow px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500">
          Total Users
        </dt>
        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
          {data?.users}
        </dd>
      </div>
    </div>
    </div>
  );
};

export default Visitors;
