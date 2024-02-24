import { PDFViewer } from "@react-pdf/renderer";
import ResumeDoc from "./ResumeDoc";
import { useGetAllUserInfoQuery } from "../../features/user/get/getAllUserInfoApiSlice";

const Resume = () => {
  const { data } = useGetAllUserInfoQuery();
  return (
    <div className="h-[100vh]">
      <PDFViewer
        showToolbar={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ResumeDoc data={data} />
      </PDFViewer>
    </div>
  );
};

export default Resume;
