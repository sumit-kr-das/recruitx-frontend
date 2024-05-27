import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CheckCheck } from "lucide-react";
import DefaultUser from "../../assets/default-company-logo.png";
import { useViewAllCompanyQuery } from "../../features/admin/get/viewAllCompanyApiSlice";
import { useUpdateCompanyMutation } from "../../features/company/put/updateCompanyApiSlice";
import { toast } from "react-hot-toast";
import { TApiError } from "../../@types/TApiError";
import { TApprovedCompanies } from "../../@types/admin/TApprovedCompanies";
import { useNavigate } from "react-router-dom";

const ManageCompanies = () => {
  const navigate = useNavigate();
  const { data } = useViewAllCompanyQuery({
    approve: "verified",
  });

  const [updateCompany] = useUpdateCompanyMutation();
  const handleApprove = async (id: string) => {
    try {
      await updateCompany(id).unwrap();
      toast.success("Update successfull");
      navigate("/dashboard/admin/approved_companies");
    } catch (err) {
      const apiError = err as TApiError;
      toast.error(apiError?.data?.message);
    }
  };

  return (
    <Container>
      <TitleBar
        title="All Companies"
        path="Admin / Dashboard / All Companiess"
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
              <div className="md:flex items-center gap-5">
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
                    <p className="mt-2 mr-2 text-sm text-slate-600">
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
                  onClick={() => handleApprove(company?._id)}
                  className="bg-teal-100 px-3 py-2 rounded-lg cursor-pointer"
                >
                  <CheckCheck className="w-[20px] text-teal-600" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ManageCompanies;
