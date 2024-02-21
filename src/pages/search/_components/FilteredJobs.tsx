import { IndianRupee } from "lucide-react";
import DefaultCompany from "../../../assets/default-company-logo.png";
import { Separator } from "../../../ui/separator";
import { Button } from "../../../ui/button";

const FilteredJobs = ({ job }) => {
  return (
    <div className="w-full h-full bg-white p-8 rounded-lg border shadow">
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-full  "
          src={DefaultCompany}
          alt="company logo"
        />
        <div>
          <h1 className="text-xl font-semibold line-clamp-1">{job.title}</h1>
          <p>{job.companyId.companyName}</p>
        </div>
      </div>
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
      <Separator className="my-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IndianRupee className="w-4 h-4" />
          <p className="font-semibold">{job.info.minSalary} LPA</p>
        </div>
        <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
      </div>
    </div>
  );
};

export default FilteredJobs;
