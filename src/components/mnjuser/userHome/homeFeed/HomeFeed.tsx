/* Images */
import RocketIMG from "../../../../assets/icons/leftImg.png";
import QRCode from "../../../../assets/qrcode.png";
import NewSlider from "../../NewSlider";
import Company from "./Company";
import OtherJobs from "./OtherJobs";
import RecommendedJobs from "./RecommendedJobs";

const HomeFeed = () => {
  return (
    <div className="mx-4">
      {/* early access section */}
      <div className="p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-2">
        <img src={RocketIMG} width={100} alt="rocket_default" />
        <div>
          <p className="text-white font-bold text-sm">
            Early access roles, only on RecruitX app!
          </p>
          <p className="text-white text-xs mt-1">
            Early access roles, only on RecruitX app! Fresh opportunities based
            on the profiles recruiters are actively searching for even before
            they post a job on RecruitX
          </p>
        </div>
        <img
          src={QRCode}
          width={100}
          alt="qrcode_default"
          className="bg-white p-1 rounded-md"
        />
      </div>
      {/* job recomandation section */}
      <RecommendedJobs />
      {/* early access roles section */}
      <OtherJobs />
      {/* companies section */}
      <Company />

      <NewSlider />
    </div>
  );
};

export default HomeFeed;
