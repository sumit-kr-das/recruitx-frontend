import CountUp from "react-countup";
import { TWebStats } from "../../@types/publicTypes/TWebStats";

type TStatProp = {
  data: TWebStats;
};

const Visitors = ({ data }: TStatProp) => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-[800px]">
      <div className="w-full flex items-center justify-between gap-8">
        <div className="flex items-center flex-col">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.users} duration={5} delay={1} />
            </h1>
          <h2 className="font-semibold text-sm sm:text-xl text-cyan-500 mt-4">Total Users</h2>
        </div>
        <div className="flex items-center flex-col">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.companies} duration={5} delay={1} />
            </h1>
          <h2 className="font-semibold text-sm sm:text-xl text-cyan-500 mt-4">Total Companies</h2>
        </div>
        <div className="flex items-center flex-col">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.jobs} duration={5} delay={1} />
            </h1>
          <h2 className="font-semibold text-sm sm:text-xl text-cyan-500 mt-4">Total Jobs</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Visitors;
