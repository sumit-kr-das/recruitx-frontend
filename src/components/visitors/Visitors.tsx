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
          <h1 className="text-9xl font-bold">{data?.users}</h1>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-semibold">Total Companies</h2>
          <h1 className="text-9xl font-bold">{data?.companies}</h1>
        </div>
        <div className="flex items-center flex-col">
          <h2 className="font-semibold">Total Jobs</h2>
          <h1 className="text-9xl font-bold">{data?.jobs}</h1>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
