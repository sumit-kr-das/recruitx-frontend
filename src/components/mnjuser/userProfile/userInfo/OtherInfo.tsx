import { useState, useEffect } from "react";
import { languageData } from "../../../../constants/languageData";
import { tagsData } from "../../../../constants/tagsData";
import { useUserInfoDataQuery } from "../../../../features/user/get/getUserInfoDataApiSlice";
import SetUserInfo from "./SetUserInfo";
import ViewInfo from "./ViewInfo";

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
  const [userData, setUserData] = useState(INITIAL_DATA);
  const [lang, setLang] = useState([languageData[0]]);
  const [tags, setTags] = useState([tagsData[0]]);

  const { data, isSuccess, isLoading } = useUserInfoDataQuery();

  const otherInfo = (
    <>
      {data?.length !== 0 ? (
        <ViewInfo
          data={data}
          isSuccess={isSuccess}
          setUserData={setUserData}
          userData={userData}
          tags={tags}
          setTags={setTags}
          lang={lang}
          setLang={setLang}
        />
      ) : (
        <SetUserInfo
          setUserData={setUserData}
          lang={lang}
          setLang={setLang}
          tags={tags}
          setTags={setTags}
        />
      )}
    </>
  );

  return isLoading ? (
    <>
      <p>Loading...</p>
    </>
  ) : isSuccess ? (
    otherInfo
  ) : (
    <>
      <p>Error</p>
    </>
  );
};

export default OtherInfo;
