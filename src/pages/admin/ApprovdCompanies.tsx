import DefaultUser from "../../assets/default-company-logo.png";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useViewAllCompanyQuery } from "../../features/admin/get/viewAllCompanyApiSlice";
import Container from "../../layout/Container";
import { TApprovedCompanies } from "../../@types/admin/TApprovedCompanies";

const ApprovedCompanies = () => {
  const { data } = useViewAllCompanyQuery({
    approve: 'approved',
  });


  return (
    <Container>
      <TitleBar
        title="Approved Companies"
        path="Admin / Dashboard / Approved Companies"
      />
      <div>
        <div className="flex justify-between gap-x-5">

          <div className="flex items-center gap-x-5">
            <button>Total: {data?.length} companies</button>
          </div>
        </div>
        <div>
          {data?.map((company: TApprovedCompanies, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
            >
              <div className="flex items-center gap-5">
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={company?.companyProfileId?.logo || DefaultUser}
                  alt="user"
                />
                <div>
                  <div>
                    <h2 className="font-bold text-slate-600 text-lg">
                      {company?.companyName}
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <p className="mt-2 text-sm text-slate-600">
                      {company?.industry}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {company?.designation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                {/* <span className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer">
                  <CheckCheck className="w-[20px] text-teal-600" />
                </span> */}
                {/* <span className="bg-blue-100 px-3 py-2 rounded-lg cursor-pointer">
                  <RotateCw className="w-[20px] text-blue-600" />
                </span>
                <span className="bg-orange-100 px-3 py-2 rounded-lg cursor-pointer">
                  <ArrowDownToLine className="w-[20px] text-orange-600" />
                </span>
                <span className="bg-red-100 px-3 py-2 rounded-lg cursor-pointer">
                  <Trash2 className="w-[20px] text-red-600" />
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ApprovedCompanies;
