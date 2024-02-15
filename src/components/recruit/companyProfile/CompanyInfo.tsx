import { CheckCheck, Mail, MapPin, Pencil, Phone } from "lucide-react";
import { useState } from "react";
import { useViewCompanyQuery } from "../../../features/company/get/viewCompanyApiSlice";
import { convertDate } from "../../../pages/company/MyJobs";
import ChangeProfile from "../../mnjuser/userProfile/ChangeProfile";
import EditCompanyProfile from "./EditCompanyProfile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../ui/dialog";
import Loader from "../../loader/Loader";
import UserDefault from "../../../assets/default-company-logo.png";
import { Card } from "../../../ui/card";
import { Button } from "../../../ui/button";

const CompanyInfo = () => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<boolean>(false);
  const { data, isLoading, isSuccess } = useViewCompanyQuery();
  if (isLoading) return (<Loader />);

  const companyProfile = (
    <>
      {
        isSuccess && (
          <>
            <Card className="relative sm:flex items-center justify-between  p-5 rounded-lg sm:gap-5 bg-white">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                  <div
                    onClick={() => setOpen(true)}
                    title="edit"
                    className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
                  >
                    <Pencil className="w-[15px] h-[15px]" />
                  </div>
                </DialogTrigger>
                <DialogContent className={"sm:max-w-[800px] rounded scrollbar-hide overflow-y-scroll max-h-[530px]"}>
                  <DialogHeader>
                    <DialogTitle>Edit Company Profile</DialogTitle>
                  </DialogHeader>
                  <EditCompanyProfile company={data} setOpen={setOpen} />
                </DialogContent>
              </Dialog>
              <div className="w-full sm:w-[15%] sm:flex items-center flex-col">
                <img
                  src={data?.companyProfileId?.logo || UserDefault}
                  width={180}
                  alt="user_default"
                  className="w-[120px] h-[120px] rounded-full border"
                />
                <Button variant="outline" className="mt-2" onClick={() => setProfile(true)}>
                  Change Profile
                </Button>
              </div>
              <div className="w-[80%] mt-3 sm:mt-0 sm:w-[85%]">
                <div className="border-b sm:flex sm:items-end justify-between mb-4 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold capitalize text-center">
                        {isSuccess && data?.companyName}
                      </h2>
                      <div
                        title={
                          isSuccess && data?.status === "approved" ? "Approved" : "Not approved"
                        }
                        className={`${isSuccess && data?.status === "approved" ? "bg-green-400" : "bg-red-400"
                          } flex items-center justify-center w-[20px] h-[20px] p-1  text-white rounded-full`}
                      >
                        <CheckCheck />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 capitalize">
                      {isSuccess && data?.industry} company
                    </p>
                    <h3 className="flex items-center text-sm text-slate-600 capitalize">
                      <MapPin className="w-[15px]" />
                      {isSuccess && data?.address} | Pin-
                      {isSuccess && data?.pin}
                    </h3>
                  </div>
                  <div className="sm:flex mt-2 sm:mt-0 items-center gap-4">
                    <p className="text-sm">
                      <span className="text-slate-500 ">Profile Created - </span>
                      {isSuccess && data && convertDate(data?.createdAt)}
                    </p>
                    <p className="text-sm">
                      <span className="text-slate-500 ">Profile last updated - </span>
                      {isSuccess && data && convertDate(data?.updatedAt)}
                    </p>
                  </div>
                </div>
                <div className="sm:flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md hidden sm:block" />
                    <div>
                      <h3 className="text-slate-500 text-sm">Call</h3>
                      <p className="text-sm">+91 {isSuccess && data?.phone}</p>
                    </div>
                  </div>
                  <div className="flex mt-2 sm:mt-0 items-center gap-2">
                    <Mail className="w-[50px] sm:h-[50px] bg-slate-200 p-4 rounded-md hidden sm:block" />
                    <div>
                      <h3 className="text-slate-500 text-sm">Email</h3>
                      <p className="text-sm">{isSuccess && data?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {profile && <ChangeProfile profile={profile} setProfile={setProfile} type="company" />}

          </>
        )
      }


    </>
  );

  return isLoading ? (
    <p> Loading... </p>
  ) : isSuccess ? (
    companyProfile
  ) : (
    <p>Unsuccessfull...</p>
  );
};

export default CompanyInfo;
