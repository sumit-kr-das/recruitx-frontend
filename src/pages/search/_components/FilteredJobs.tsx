import { IndianRupee } from "lucide-react";
import DefaultCompany from "../../../assets/default-company-logo.png";
import { Button } from "../../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../../ui/card";
import { Separator } from "../../../ui/separator";

type TJob = {
  _id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  active: boolean;
  info: {
    vacancies: number;
    jobType: string;
    workplaceType: string;
    startDate: string;
    endDate: string;
    roles: string;
    minExprience: number;
    maxExprience: number;
    minSalary: number;
    maxSalary: number;
    location: string;
    maxQualification: string;
    degree: string;
    skills: string[];
  };
  companyId: {
    _id: string;
    companyName: string;
    pin: string;
    address: string;
    companyProfileId: {
      _id: string;
      logo: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
  };
};

type JobProps = {
  job: TJob;
};

const FilteredJobs = ({ job }: JobProps) => {
  return (
    <Card className="w-full h-full flex flex-col justify-between bg-white rounded-lg border shadow">
      <CardHeader className="flex items-center flex-row gap-4">
        <img
          className="w-16 h-16 rounded-full  object-cover border"
          src={job.companyId.companyProfileId.logo || DefaultCompany}
          alt="company logo"
        />
        <div>
          <h1 className="text-xl font-semibold line-clamp-1">{job.title}</h1>
          <p>{job.companyId.companyName}</p>
        </div>
      </CardHeader>
      <CardContent className="h-full flex flex-col justify-between">
        <div className="flex items-center flex-wrap gap-2 my-2">
          <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-lg">
            {job.info.jobType}
          </p>
          <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-lg">
            {job.info.minExprience}-{job.info.maxExprience} Year
          </p>
          <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-lg">
            {job.info.location}
          </p>
          <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {job.info.workplaceType}
          </p>
        </div>
        <p className="line-clamp-2 mt-2">{job.description}</p>
      </CardContent>
      <CardFooter className="w-full flex items-center flex-col justify-between">
        <Separator className="my-4" />
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4" />
            <p>
              <span className="font-semibold">{job.info.minSalary} </span>LPA
            </p>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FilteredJobs;
