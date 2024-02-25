import { Link } from "react-router-dom";
import { TCompany } from "../../@types/publicTypes/TCompany";
import DefaultCompany from "../../assets/default-company-logo.png";
import { Button } from "../../ui/button";

type TCompanyProps = {
  data: TCompany;
};

const CompanyContainer = ({ data }: TCompanyProps) => {
  return (
    <div className="bg-white w-[320px] h-[375px] flex items-center flex-col justify-center text-center p-6 shadow border rounded-xl mt-8">
      <img
        className="relative -top-[30px] w-[140px] h-[140px] rounded-full object-cover border bg-gray-50"
        src={data?.companyProfileId?.logo || DefaultCompany}
        alt="company icon"
      />
      <div className="relative -top-[20px] mb-2">
        <h2 className="font-bold line-clamp-1">{data.companyName}</h2>
        <p className="text-sm mt-2">{data.address}</p>
        <p className="line-clamp-2 mt-2">{data.industry}</p>
        <div className="flex items-center flex-wrap gap-2 my-2">
          <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {data?.industry?.split(" ")[0]}
          </p>
          <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Verified
          </p>
          <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {data.address}
          </p>
          <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {data?.companyProfileId?.type}
          </p>
          {/* <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {data.info.workplaceType}
          </p> */}

        </div>
        <div className="mt-5 flex justify-center items-center">
          <Button className="bg-cyan-500 hover:bg-cyan-600"><Link to={`/mnjuser/company/${data._id}`}>View Details</Link> </Button>
        </div>
      </div>

    </div>
  );
};

export default CompanyContainer;
