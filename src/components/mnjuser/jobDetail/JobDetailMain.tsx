import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DefaultJob from "../../../assets/default-company-logo.png";
import { selectCurrentRole } from "../../../features/auth/authSlice";
import { useSetUserApplyMutation } from "../../../features/user/post/setUserApplyAPiSlice";
import { TApiError } from "../../../@types/TApiError";
import { useToast } from "../../../ui/use-toast";
import { TJobDetails } from "../../../@types/publicTypes/TJobDetails";
import { Button } from "../../../ui/button";

const JobDetailMain = ({ job }: { job: TJobDetails }) => {
  const navigate = useNavigate();
  const [setApply] = useSetUserApplyMutation();
  const user = useSelector(selectCurrentRole);
  const { toast } = useToast();

  const applyForJob = async () => {
    try {
      const jobId = job?._id;
      await setApply(jobId).unwrap();
      toast({
        description: "Job Applied Successfully",
      });
      navigate("/mnjuser/appliedJobs");
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError.data.message,
      });
    }
  };

  return (
    <div className="lg:col-span-8 md:col-span-6">
      <div className="md:flex items-center p-6 shadow  rounded-md bg-white">
        <img
          src={DefaultJob}
          className="rounded-full h-28 w-28 bg-white  shadow "
          alt=""
        />
        <div className="md:ms-4 md:mt-0 mt-6">
          <h5 className="text-xl font-semibold">{job?.title}</h5>
          <div className="mt-2">
            <span className="text-slate-400 font-medium me-2 inline-block">
              <i className="uil uil-building text-[18px] text-emerald-600 me-1"></i>{" "}
              {job?.companyId?.companyName}
            </span>
            <span className="text-slate-400 font-medium me-2 inline-block">
              <i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
              {job?.companyId?.address}, {job?.companyId?.pin}
            </span>
          </div>
        </div>
      </div>

      <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
      <div dangerouslySetInnerHTML={{ __html: job?.description }} />

      <div className="mt-5">
        {user && user == "user" ? (
          <Button
            className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600"
            onClick={applyForJob}
          >
            Apply
          </Button>
        ) : (
          <Button>
            <Link to="/login" className="">
              Login to Apply
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobDetailMain;
