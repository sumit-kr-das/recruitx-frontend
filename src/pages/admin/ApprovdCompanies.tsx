import DefaultUser from "../../assets/default-company-logo.png";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useViewAllCompanyQuery } from "../../features/admin/get/viewAllCompanyApiSlice";
import Container from "../../layout/Container";
import { TApprovedCompanies } from "../../@types/admin/TApprovedCompanies";
import { CircleSlash2 } from "lucide-react";
import { useRestrictCompanyMutation } from "../../features/admin/put/RestrictCompanyApiSlice";
import { useToast } from "../../ui/use-toast";
import { TApiError } from "../../@types/TApiError";
import { useNavigate } from "react-router-dom";
const ApprovedCompanies = () => {
  const navigate = useNavigate();
  const { data } = useViewAllCompanyQuery({
    approve: 'approved',
  });
  const { toast } = useToast();
  const [restrictCompany] = useRestrictCompanyMutation();

  const handelRestrictCompany = async (companyId: string) => {
    try {
      await restrictCompany(companyId).unwrap();
      toast({
        description: "Company restricted successfully"
      })
      navigate("/dashboard/admin/restricted_companies");
    } catch (error) {
      const apiError = error as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data?.message
      })
    }
  }


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
                      {company?.companyName} {
                        company?.status === "block" && (
                          <CircleSlash2 className="bg-red-500" />
                        )
                      }
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
                <span
                  onClick={() => handelRestrictCompany(company?._id)}
                  className="bg-red-500 px-3 py-2 rounded-lg cursor-pointer"
                >
                  <CircleSlash2 className="w-[20px] bg-red-500" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ApprovedCompanies;
