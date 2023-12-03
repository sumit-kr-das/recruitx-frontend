import { Link } from "react-router-dom";
import CompanySlider from "../../CompanySlider";
import { Loader } from "lucide-react";
import { useViewAllCompaniesQuery } from "../../../../features/company/get/viewAllCompanies";

const Company = () => {
  const { data, isLoading } = useViewAllCompaniesQuery();

  const company = (
    <div className="bg-white border rounded-lg mt-4 shadow-md">
      <div className="flex justify-between p-6">
        <div>
          <p className="font-bold">Top companies</p>
          <p className="text-xs">Hiring for Software Development</p>
        </div>
        <Link to="/mnjuser/companies" className="text-blue-600 font-semibold">
          View all
        </Link>
      </div>
      <div className="w-[750px]">
        <CompanySlider slidesPerview={3} data={data} />
      </div>
    </div>
  );

  return isLoading ? <Loader /> : company;
};

export default Company;
