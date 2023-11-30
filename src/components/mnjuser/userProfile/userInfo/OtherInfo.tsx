import { useState, useEffect } from "react";
import { languageData } from "../../../../constants/languageData";
import { tagsData } from "../../../../constants/tagsData";
import { useUserInfoDataQuery } from "../../../../features/user/get/getUserInfoDataApiSlice";
import SetUserInfo from "./SetUserInfo";
import ViewInfo from "./ViewInfo";

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

const OtherInfo = ({ setProfilepic }) => {
  const [userData, setUserData] = useState(INITIAL_DATA);
  const [lang, setLang] = useState([languageData[0]]);
  const [tags, setTags] = useState([tagsData[0]]);

  const { data, isSuccess, isLoading } = useUserInfoDataQuery();

  useEffect(() => {
    if (isSuccess) {
      setProfilepic(data[0]?.photo);
    }
  }, [data]);

  if (isSuccess) {
    console.log(data);
  }
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
          userData={userData}
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
