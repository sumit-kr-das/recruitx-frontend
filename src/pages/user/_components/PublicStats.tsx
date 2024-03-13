import { PublicStatsSkeletion } from "../../../components/skeleton/PublicStatsSkeletion";
import Visitors from "../../../components/visitors/Visitors";
import { useGetWebStatsQuery } from "../../../features/statics/getWebStatsApiSlice";

const PublicStats = () => {
  const { data, isLoading } = useGetWebStatsQuery();

  return (
      <div>
        <div className="mx-auto max-w-xl text-center mt-20 mb-10">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Trusted by <span className="text-cyan-500">Jobseekers & Companies</span>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">Recruitx has a greate achivement of stats and proudly show it how we are chaning the hiring industry.</p>
        </div>
        {data || !isLoading ? (
            <>{data && <Visitors data={data}/>}</>
        ) : (
            <>
              {[...Array(3)].map((_, index) => (
                  <PublicStatsSkeletion key={index}/>
              ))}
            </>
        )}
      </div>
  );
};

export default PublicStats;
