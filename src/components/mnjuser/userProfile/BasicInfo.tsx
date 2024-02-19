import { Mail, Phone, Pencil } from "lucide-react";
import UserDefault from "../../../assets/user-default-profile.png";
import { convertDate } from "../../../pages/company/MyJobs";
import Modal from "../../Modal";
import { useState } from "react";
import { useUpdateUserMutation } from "../../../features/user/put/updateUserProfileApiSlice";
import { toast } from "react-hot-toast";
import ChangeProfile from "./ChangeProfile";
import { TApiError } from "../../../@types/TApiError";
import { Button } from "../../../ui/button";
import { useSelector } from "react-redux";
import { selectCurrentUserData } from "../../../features/user/userSlice";
import Loader from "../../loader/Loader";

const INITIAL_DATA = {
  name: "",
  email: "",
  phoneNo: "",
  workStatus: "",
};

const BasicInfo = () => {
  const [update, setUpdate] = useState(INITIAL_DATA);
  const [open, setOpen] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  // const { data:user, isSuccess, isLoading, isError } = useViewUserProfileQuery();
  const [updateUser] = useUpdateUserMutation();

  const { user } = useSelector(selectCurrentUserData);
  console.log("====================================");
  console.log(user);
  console.log("====================================");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(update).unwrap();
      toast.success("Update successfull");
      setOpen((prev) => !prev);
    } catch (err) {
      const apiError = err as TApiError;
      toast.error(apiError.data.message);
    }
  };

  const basicInfo = (
    <>
      <div className="relative flex items-center justify-between bg-white p-5 rounded-lg gap-5">
        <div
          onClick={() => setOpen((prev) => !prev)}
          title="edit"
          className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
        >
          <Pencil className="w-[15px] h-[15px]" />
        </div>
        <div className="w-[20%] flex items-center justify-center flex-col">
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
        <div className="w-[80%]">
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
                {user && convertDate(user?.createdAt || '')}
              </p>
              <p className="text-sm">
                <span className="text-slate-500 ">Profile last updated - </span>
                {user && convertDate(user?.updatedAt || '')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
              <div>
                <h3 className="text-slate-500 text-sm">Call</h3>
                <p className="text-sm">{user?.phoneNo}</p>
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
      </div>
      {/* modal */}
      {open && (
        <Modal classes="w-[40%]">
          <div className="pb-4">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Basic information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your personal details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  value={update.name}
                  onChange={(e) =>
                    setUpdate({ ...update, name: e.target.value })
                  }
                  type="text"
                  required
                  placeholder="What is your name?"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={update.email}
                  onChange={(e) =>
                    setUpdate({ ...update, email: e.target.value })
                  }
                  type="email"
                  required
                  placeholder="Tell us your email id"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile number
              </label>
              <div className="mt-2">
                <input
                  value={update.phoneNo}
                  onChange={(e) =>
                    setUpdate({ ...update, phoneNo: e.target.value })
                  }
                  type="text"
                  required
                  placeholder="Mobile number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Work status
                </label>
              </div>
              <div className="mt-2">
                <select
                  value={update.workStatus}
                  onChange={(e) =>
                    setUpdate({ ...update, workStatus: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select industry type</option>
                  <option value="experienced">I'm experienced</option>
                  <option value="fresher">I'm a fresher</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="text-white bg-red-400 hover:bg-red-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-cyan-400 hover:bg-cyan-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                >
                  Update profile
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
      {/* setProfile */}
      {profile && <ChangeProfile profile={profile} setProfile={setProfile} type="user" />}
    </>
  );

  return user ? basicInfo : <Loader />
};

export default BasicInfo;
