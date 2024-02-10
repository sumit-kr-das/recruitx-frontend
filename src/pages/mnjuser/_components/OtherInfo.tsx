import { useState } from "react";
import SetUserInfo from "../../../components/mnjuser/userProfile/userInfo/SetUserInfo";
import ViewInfo from "../../../components/mnjuser/userProfile/userInfo/ViewInfo";
import { languageData } from "../../../constants/languageData";
import { tagsData } from "../../../constants/tagsData";
import { useUserInfoDataQuery } from "../../../features/user/get/getUserInfoDataApiSlice";
import Loader from "../../../components/loader/Loader";

export type FormValue = {
  github: string;
  linkedIn: string;
  dateOfBirth: string;
  age: string;
  address: string;
  bio: string;
  objective: string;
  language: string[];
  gender: string;
  skills: string[];
  maxQualification: string;
  photo?: string;
  userID?: string;
  _id?: string;
  __v?: string;
};

export const INITIAL_DATA = {
  github: "",
  linkedIn: "",
  dateOfBirth: "",
  age: "",
  address: "",
  bio: "",
  objective: "",
  language: [""],
  gender: "",
  skills: [""],
  maxQualification: "",
};

const OtherInfo = () => {
  const [lang, setLang] = useState([languageData[0]]);
  const [tags, setTags] = useState([tagsData[0]]);

  const { data } = useUserInfoDataQuery();

  if (!data) return <Loader />;

  return (
    <>
      {data?.length !== 0 ? (
        <ViewInfo data={data} setTags={setTags} setLang={setLang} />
      ) : (
        <SetUserInfo
          lang={lang}
          setLang={setLang}
          tags={tags}
          setTags={setTags}
        />
      )}
    </>
  );
};

export default OtherInfo;
