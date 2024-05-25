import { Link } from "react-router-dom";
import { TCompany } from "../../@types/publicTypes/TCompany";
import DefaultCompany from "../../assets/default-company-logo.png";
import { Button } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card.tsx";

type TCompanyProps = {
  data: TCompany;
};

const CompanyContainer = ({ data }: TCompanyProps) => {
  return (
    <Card className="bg-white w-full h-fit flex flex-col justify-between rounded-xl">
      <CardHeader className="flex items-center flex-row gap-2 ">
        <img
          className="w-[80px] h-[80px] rounded-full object-cover border bg-gray-50"
          src={data?.companyProfileId?.logo || DefaultCompany}
          alt="company icon"
        />
        <div>
          <h2 className="font-bold line-clamp-1">{data?.companyName}</h2>
          <p className="text-sm line-clamp-1 capitalize">{data?.address}</p>
          <p className="text-sm line-clamp-2">{data?.industry}</p>
        </div>
      </CardHeader>
      <CardContent className="flex items-center flex-wrap gap-2">
        <p className="bg-blue-50 text-blue-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data?.industry?.split(" ")[0]}
        </p>
        {/* <p className="bg-red-50 text-red-500 text-sm font-xs px-2 py-1 rounded-xl">
          Verified
        </p> */}
        <p className="bg-green-50 text-green-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data?.address}
        </p>
        <p className="bg-cyan-50 text-cyan-500 text-sm font-xs px-2 py-1 rounded-xl">
          {data?.companyProfileId?.type}
        </p>
      </CardContent>
      <CardFooter>
        <Link className="block w-full" to={`/mnjuser/company/${data?._id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CompanyContainer;
