import { Github, Linkedin } from "lucide-react";
import { convertDate } from "../../../../pages/company/MyJobs";
import { FormValue } from "../../../../pages/mnjuser/_components/OtherInfo";
import Loader from "../../../loader/Loader";
import UpdateUserInfo from "./UpdateUserInfo";

export type TSetUserInfoProps = {
  data: FormValue[];
  setLang: (value: string[]) => void;
  setTags: (value: string[]) => void;
};

const ViewInfo = ({ data, setTags, setLang }: TSetUserInfoProps) => {
  if (!data) return <Loader />;
  return (
    <>
      <div className="relative mt-4 bg-white p-4 sm:p-10 rounded-lg border shadow">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Basic information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Increase the quality of your hire
          </p>
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
            <ul className="flex items-center gap-x-5 flex-wrap">
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
            <div className="sm:flex sm:items-center sm:gap-x-20">
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
                <div className="mb-4 mt-4 sm:mt-0">
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
        {data && (
          <UpdateUserInfo data={data} setTags={setTags} setLang={setLang} />
        )}
      </div>
    </>
  );
};

export default ViewInfo;
