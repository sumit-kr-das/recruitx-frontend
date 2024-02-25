import RocketIMG from "../../../../assets/icons/leftImg.png";
import QRCode from "../../../../assets/qrcode.png";
import NewSlider from "../../../../pages/mnjuser/_components/SliderContainer";
import Company from "./Company";
import OtherJobs from "./OtherJobs";
import RecommendedJobs from "./RecommendedJobs";

const HomeFeed = () => {
  // const { data, isLoading } = useViewAllCompaniesQuery({ limit: 10 });
  return (
    <div className="mx-4">
      {/* job recomandation section */}
      <RecommendedJobs />
      {/* early access roles section */}
      <OtherJobs />
      {/* companies section */}
      <Company />
    </div>
  );
};

export default HomeFeed;
