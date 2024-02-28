import { PublicStatsSkeletion } from "../../../components/skeleton/PublicStatsSkeletion";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import Visitors from "../../../components/visitors/Visitors";
import { useGetWebStatsQuery } from "../../../features/statics/getWebStatsApiSlice";

const PublicStats = () => {
  const { data, isLoading } = useGetWebStatsQuery();

  return (
    <UserTitleWrapper
      title="Trusted by"
      titleVariant="Jobseekers & Companies"
      des="Recruitx has a greate achivement of stats and proudly show it how we are chaning the hiring industry."
    >
      {data || !isLoading ? (
        <>{data && <Visitors data={data} />}</>
      ) : (
        <>
          {[...Array(3)].map((_, index) => (
            <PublicStatsSkeletion key={index} />
          ))}
        </>
      )}
    </UserTitleWrapper>
  );
};

export default PublicStats;
