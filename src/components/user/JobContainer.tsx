import { Button } from "../../ui/button";
import DefaultCompany from "../../assets/default-company-logo.png";
import { TJobs } from "../../@types/publicTypes/TJobs";
import { Link, useNavigate } from "react-router-dom";
import { useSetUserApplyMutation } from "../../features/user/post/setUserApplyAPiSlice";
import { selectCurrentRole } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useToast } from "../../ui/use-toast";
import { TApiError } from "../../@types/TApiError";
import {Card, CardContent, CardFooter, CardHeader} from "../../ui/card.tsx";

type TJobProps = {
  data: TJobs;
};

const JobContainer = ({ data }: TJobProps) => {
  const [setApply, { isLoading }] = useSetUserApplyMutation();
  const user = useSelector(selectCurrentRole);
  const navigate = useNavigate();

  const { toast } = useToast();

  const applyForJob = async (jobId: string) => {
    try {
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
    <Card className="bg-white w-[350px] h-[360px] flex flex-col justify-between rounded-xl">
      <CardHeader className="flex items-center flex-row gap-2">
        <img
          className="w-[60px] h-[60px] rounded-full object-cover border bg-gray-50"
          src={data?.companyId?.companyProfileId?.logo || DefaultCompany}
          alt="company icon"
        />
        <div>
          <h2 className="font-bold line-clamp-1">
            {data.companyId.companyName}
          </h2>
          <p className="text-sm">{data.info.location}</p>
        </div>
      </CardHeader>
      <CardContent>
      <div>
        <h3 className="font-bold text-xl line-clamp-1">{data.title}</h3>
        <p className="line-clamp-2">{data?.shortDescription}</p>
      </div>
      <div className="flex items-center flex-wrap gap-2 mt-4">
        <p className="bg-blue-50 text-blue-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data.info.vacancies} Positions
        </p>
        <p className="bg-red-50 text-red-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data.info.jobType}
        </p>
        <p className="bg-green-50 text-green-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data.info.minExprience} Years
        </p>
        <p className="bg-cyan-50 text-cyan-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data.info.maxSalary}/Year
        </p>
        <p className="bg-orange-50 text-orange-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data.info.workplaceType}
        </p>
      </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        {user ? (
          <Button
            onClick={() => applyForJob(data?._id)}
            className="bg-cyan-500 hover:bg-cyan-600"
          >
            Apply Now
          </Button>
        ) : (
          <Link to="/login">
            <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
          </Link>
        )}
        <Link to={`/jobDetails/${data._id}`}>
          <Button variant="outline" disabled={isLoading}>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobContainer;
