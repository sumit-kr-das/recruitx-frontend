import { Github, Linkedin, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { languageData } from "../../../../constants/languageData";
import { qualificationData } from "../../../../constants/qualificationData";
import { tagsData } from "../../../../constants/tagsData";
import { useUpdateUserInfoMutation } from "../../../../features/user/put/updateUserInfoDataApiSlice";
import { convertDate } from "../../../../pages/company/MyJobs";
import { useToast } from "../../../../ui/use-toast";
import Modal from "../../../Modal";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { FormValue } from "../../../../pages/mnjuser/_components/OtherInfo";
import Loader from "../../../loader/Loader";

type TSetUserInfoProps = {
  data?: FormValue[];
  userData: FormValue;
  isSuccess: boolean;
  setUserData: (value: FormValue) => void;
  lang: string[];
  setLang: (value: string[]) => void;
  tags: string[];
  setTags: (value: string[]) => void;
};

const ViewInfo = ({
  data,
  isSuccess,
  userData,
  setUserData,
  setTags,
  tags,
  lang,
  setLang,
}: TSetUserInfoProps) => {
  const [open, setOpen] = useState(false);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const { toast } = useToast();
  console.log("This is data", data);

  useEffect(() => {
    if (data?.length && isSuccess) {
      setUserData({
        github: data[0]?.github || "",
        linkedIn: data[0]?.linkedIn || "",
        dateOfBirth: data[0]?.dateOfBirth || "",
        age: data[0]?.age || "",
        address: data[0]?.address || "",
        bio: data[0]?.bio || "",
        objective: data[0]?.objective || "",
        language: data[0]?.language || "",
        gender: data[0]?.gender || "",
        skills: data[0]?.skills || "",
        maxQualification: data[0]?.maxQualification || "",
      });
    }
  }, [isSuccess, data]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(userData).unwrap();
      toast({
        description: "User information update success",
      });
      setOpen((prev) => !prev);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }
  };
  if (!data) return <Loader />;
  return (
    <>
      <div className="relative mt-4 bg-white p-10 rounded-lg border shadow">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Basic information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Increase the quality of your hire
          </p>
        </div>

        <div
          onClick={() => setOpen((prev) => !prev)}
          title="edit"
          className="absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
        >
          <Pencil className="w-[15px] h-[15px]" />
        </div>

        <div className="mx-auto mt-5">
          <div className="p-5 bg-[#FAFAFA] rounded-lg border">
            <h2 className="text-xl font-semibold mb-2">Resume headline</h2>
            <p className="text-gray-700">{data[0]?.objective}</p>
          </div>

          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Profile summary</h2>
            <p className="text-gray-700">{data[0]?.bio}</p>
          </div>

          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-1">Key skills</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 mb-2">
              This key can optimize your profile & boost your creer
            </p>
            <ul className="flex items-center gap-x-5">
              {data[0]?.skills.map((item) => (
                <li
                  className="px-4 py-1 bg-white border rounded-full capitalize"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">
              Highest qualification
            </h2>
            <p className="text-gray-700">{data[0]?.maxQualification}</p>
          </div>

          <div className=" p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Personal details</h2>
            <div className="flex items-center gap-x-20">
              <div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold mb-1">Full address</h2>
                  <p className="text-gray-700 text-sm capitalize">
                    {data[0]?.address}
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold mb-1">Sex</h2>
                  <p className="text-gray-700 text-sm capitalize">
                    {data[0]?.gender}
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h2 className="text-sm font-semibold mb-1">Age</h2>
                  <p className="text-gray-700 text-sm capitalize">
                    {data[0]?.age} years
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-semibold mb-1">Date of birth</h2>
                  <p className="text-gray-700 text-sm capitalize">
                    {convertDate(data[0]?.dateOfBirth)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <ul className="flex items-center gap-x-5">
              {data[0]?.language.map((item) => (
                <li
                  className="px-4 py-1 bg-white border rounded-full capitalize"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Social links</h2>
            <div className="flex items-center gap-5">
              <a
                href={`https://www.linkedin.com/in/${data[0]?.linkedIn}`}
                target="_blank"
                className="block bg-blue-500 p-4 rounded-full text-white hover:bg-blue-600"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://github.com/${data[0]?.github}`}
                target="_blank"
                className="block bg-orange-500 p-4 rounded-full text-white hover:bg-orange-600"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {open && (
        <Modal classes="w-[50%] h-[90%] overflow-auto">
          <form onSubmit={handleUpdate}>
            <div className="pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Basic information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Increase the quality of your hire
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Headline
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        value={userData.objective}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            objective: e.target.value,
                          })
                        }
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="title"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter a short headline"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About yourself
                  </label>
                  <div className="mt-2">
                    <textarea
                      value={userData.bio}
                      onChange={(e) =>
                        setUserData({ ...userData, bio: e.target.value })
                      }
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Enter a breaf description about yourself"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a breaf description about your career.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full address
                  </label>
                  <div className="mt-2">
                    <input
                      value={userData.address}
                      onChange={(e) =>
                        setUserData({ ...userData, address: e.target.value })
                      }
                      type="text"
                      name="location"
                      id="location"
                      autoComplete="location"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.value })
                      }
                      id="category"
                      name="category"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select category</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select language
                  </label>
                  <div className="mt-2 w-full">
                    <SelectInput
                      multiple
                      options={languageData}
                      value={lang}
                      onChange={(o) => {
                        setLang(o);
                        setUserData({ ...userData, language: lang });
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Age
                  </label>
                  <div className="mt-2">
                    <input
                      value={userData.age}
                      onChange={(e) =>
                        setUserData({ ...userData, age: e.target.value })
                      }
                      type="text"
                      name="minExprience"
                      id="minExprience"
                      autoComplete="minExprience"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of birth
                  </label>
                  <div className="mt-2">
                    <input
                      value={userData.dateOfBirth}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      type="date"
                      name="minExprience"
                      id="minExprience"
                      autoComplete="minExprience"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Github profile
                  </label>
                  <div className="mt-2">
                    <input
                      value={userData.github}
                      onChange={(e) =>
                        setUserData({ ...userData, github: e.target.value })
                      }
                      type="text"
                      name="minExprience"
                      id="minExprience"
                      autoComplete="minExprience"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Linkedin profile
                  </label>
                  <div className="mt-2">
                    <input
                      value={userData.linkedIn}
                      onChange={(e) =>
                        setUserData({ ...userData, linkedIn: e.target.value })
                      }
                      type="text"
                      name="minExprience"
                      id="minExprience"
                      autoComplete="minExprience"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Highest qualification
                  </label>
                  <div className="mt-2">
                    <select
                      value={userData.maxQualification}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          maxQualification: e.target.value,
                        })
                      }
                      id="category"
                      name="category"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Select qualification</option>
                      {qualificationData.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select Skills
                  </label>
                  <div className="mt-2 w-full">
                    <SelectInput
                      multiple
                      options={tagsData}
                      value={userData.skills}
                      onChange={(o) => {
                        setTags(o);
                        setUserData({ ...userData, skills: tags });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={() => setOpen((prev) => !prev)}
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ViewInfo;
