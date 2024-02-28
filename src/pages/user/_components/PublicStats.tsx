import Loader from "../../../components/loader/Loader";
import UserTitleWrapper from "../../../components/user/UserTitleWrapper";
import Visitors from "../../../components/visitors/Visitors";
import { useGetWebStatsQuery } from "../../../features/statics/getWebStatsApiSlice";

const PublicStats = () => {
  const { data } = useGetWebStatsQuery();
  if (!data) {
    return <Loader />;
  }
  return (
    <UserTitleWrapper
      title="Trusted by"
      titleVariant="Jobseekers & Companies"
      des="Recruitx has a greate achivement of stats and proudly show it how we are chaning the hiring industry."
    >
      <Visitors data={data} />
    </UserTitleWrapper>
  );
};

export default PublicStats;
