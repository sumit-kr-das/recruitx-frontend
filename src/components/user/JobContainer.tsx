import { Button } from "../../ui/button";
import DefaultCompany from "../../assets/default-company-logo.png";

const JobContainer = ({ data }) => {
  return (
    <div className="w-[350px] h-[350px] p-6 shadow border rounded-xl">
      <div className="flex items-center gap-2">
        <img
          className="w-[60px] h-[60px] rounded-full object-cover"
          src={DefaultCompany}
          alt="company icon"
        />
        <div>
          <h2 className="font-bold line-clamp-1">
            {data.companyId.companyName}
          </h2>
          <p className="text-sm">{data.info.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-xl line-clamp-1">{data.title}</h3>
        <p className="line-clamp-2">{data.description}</p>
      </div>

      <div className="flex items-center flex-wrap gap-2 my-4">
        <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.vacancies} Positions
        </p>
        <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.jobType}
        </p>
        <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.minExprience} Years
        </p>
        <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.maxSalary}/Year
        </p>
        <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
          {data.info.workplaceType}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
        <Button variant="outline">View Details</Button>
      </div>
    </div>
  );
};

export default JobContainer;
