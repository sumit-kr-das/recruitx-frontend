import CountUp from "react-countup";
import { TWebStats } from "../../@types/publicTypes/TWebStats";

type TStatProp = {
  data: TWebStats;
};

const Visitors = ({ data }: TStatProp) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center flex-col">
          <div className="mb-4 bg-white flex items-center justify-center w-20 h-20 md:w-40 md:h-40 p-4 rounded-full shadow">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.users} duration={5} delay={1} />
            </h1>
          </div>
          <h2 className="font-semibold text-sm sm:text-xl">Total Users</h2>
        </div>
        <div className="flex items-center flex-col">
          <div className="mb-4 bg-white flex items-center justify-center shadow w-20 h-20 md:w-40 md:h-40 p-4 rounded-full">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.companies} duration={5} delay={1} />
            </h1>
          </div>
          <h2 className="font-semibold text-sm sm:text-xl">Total Companies</h2>
        </div>
        <div className="flex items-center flex-col">
          <div className="mb-4 bg-white flex items-center justify-center shadow w-20 h-20 md:w-40 md:h-40  p-4 rounded-full">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              <CountUp end={data?.jobs} duration={5} delay={1} />
            </h1>
          </div>
          <h2 className="font-semibold text-sm sm:text-xl">Total Jobs</h2>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
