import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserDefault from "../../../assets/user-default-profile.png";
import { selectCurrentUserData } from "../../../features/user/userSlice";
import { convertDate } from "../../company/MyJobs";
import { Button } from "../../../ui/button";
import Loader from "../../../components/loader/Loader";
import ChangeProfile from "../../../components/mnjuser/userProfile/ChangeProfile";
import UpdateBasicInfo from "../../../components/mnjuser/userProfile/basicInfo/UpdateBasicInfo";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useGetAllUserInfoQuery } from "../../../features/user/get/getAllUserInfoApiSlice";
import ResumeDoc from "../../pdf/ResumeDoc";
export type BasicInfoFormData = {
  name: string | null;
  email: string | null;
  phoneNo: string | null;
  workStatus: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  status?: string | null;
};

const BasicInfo = () => {
  const [profile, setProfile] = useState<boolean>(false);
  const { user, info } = useSelector(selectCurrentUserData);
  const { data } = useGetAllUserInfoQuery();

  const basicInfo = (
    <>
      <div className="relative md:flex md:items-center md:justify-between bg-white p-5 md:p-10 rounded-lg gap-10 border shadow">
        <div className="md:flex items-center md:items-start md:justify-between flex-col text-center">
          <img
            src={info?.photo || UserDefault}
            // width={180}
            alt="user_default"
            className="w-[120px] h-[120px] rounded-full border mx-auto"
          />
          <Button
            onClick={() => setProfile((prev) => !prev)}
            variant="outline"
            className="mt-2 mx-auto"
          >
            Change Profile
          </Button>
        </div>
        <div className="w-full">
          <div className="border-b md:flex md:items-end md:justify-between mb-4 pb-4 mt-3 md:mt-0">
            <div>
              <h2 className="text-2xl font-bold capitalize text-center md:text-left">
                {user?.name}
              </h2>
              <p className="text-lg text-slate-600 capitalize text-center md:text-left">
                {user?.workStatus}
              </p>
            </div>
            <div className="md:flex md:items-center gap-4 text-center">
              <p className="text-sm">
                <span className="text-slate-500 ">Profile Created - </span>
                {user?.createdAt && convertDate(user?.createdAt)}
              </p>
              <p className="text-sm">
                <span className="text-slate-500 ">Profile last updated - </span>
                {user?.updatedAt && convertDate(user?.updatedAt)}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 md:flex md:gap-5">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
                <div>
                  <h3 className="text-slate-500 text-sm">Call</h3>
                  <p className="text-sm">+91 {user?.phoneNo}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
                <div>
                  <h3 className="text-slate-500 text-sm">Email</h3>
                  <p className="text-sm">{user?.email}</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-5 md:mt-0">
              <PDFDownloadLink
                document={<ResumeDoc data={data} />}
                fileName="resume.pdf"
              >
                {({ loading }) =>
                  loading ? "Loading resume.." : "Download Resume"
                }
              </PDFDownloadLink>
            </Button>
          </div>
        </div>
        {user?.name && <UpdateBasicInfo user={user} />}
      </div>
      {/* setProfile */}

      <ChangeProfile profile={profile} setProfile={setProfile} type="user" />
    </>
  );

  return user ? basicInfo : <Loader />;
};

export default BasicInfo;
