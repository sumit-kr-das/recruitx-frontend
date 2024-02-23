import { TWebStats } from "../../@types/publicTypes/TWebStats";

type TStatProp = {
  data: TWebStats;
};

const Visitors = ({ data }: TStatProp) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center flex-col">
          <h2 className="font-semibold">Total Users</h2>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            {data?.users}
          </h1>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-semibold">Total Companies</h2>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            {data?.companies}
          </h1>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-semibold">Total Jobs</h2>
          <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            {data?.jobs}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
