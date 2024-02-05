import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserDefault from "../../../../assets/user-default-profile.png";
import { selectCurrentUserData } from "../../../../features/user/userSlice";
import { convertDate } from "../../../../pages/company/MyJobs";
import { Button } from "../../../../ui/button";
import Loader from "../../../loader/Loader";
import ChangeProfile from "../ChangeProfile";
import UpdateBasicInfo from "./UpdateBasicInfo";

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
  const { user } = useSelector(selectCurrentUserData);

  const basicInfo = (
    <>
      <div className="relative flex items-center justify-between bg-white p-10 rounded-lg gap-10 border shadow">
        <div className="flex items-start justify-start flex-col">
          <img
            src={UserDefault}
            // width={180}
            alt="user_default"
            className="w-[120px] h-[120px] rounded-full border"
          />
          <Button
            onClick={() => setProfile((prev) => !prev)}
            variant="outline"
            className="mt-2"
          >
            Change Profile
          </Button>
        </div>
        <div className="w-full">
          <div className="border-b flex items-end justify-between mb-4 pb-4">
            <div>
              <h2 className="text-2xl font-bold capitalize">{user?.name}</h2>
              <p className="text-lg text-slate-600 capitalize">
                {user?.workStatus}
              </p>
            </div>
            <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
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
        </div>
        {user?.name && <UpdateBasicInfo user={user} />}
      </div>
      {/* setProfile */}
      {profile && <ChangeProfile profile={profile} setProfile={setProfile} />}
    </>
  );

  return user ? basicInfo : <Loader />;
};

export default BasicInfo;
