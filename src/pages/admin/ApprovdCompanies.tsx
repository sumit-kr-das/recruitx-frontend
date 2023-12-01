import DefaultUser from "../../assets/default-company-logo.png";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useViewAllCompanyQuery } from "../../features/admin/get/viewAllCompanyApiSlice";
import Container from "../../layout/Container";

const ApprovedCompanies = () => {
  const { data } = useViewAllCompanyQuery({
    approve: true,
  });


  return (
    <Container>
      <TitleBar
        title="Approved Companies"
        path="Admin / Dashboard / Approved Companies"
      />
      <div>
        <div className="flex justify-between gap-x-5">
          {/* <div className="sm:col-span-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Job role
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Select role</option>
                <option>Software Developer (120)</option>
                <option>Software Tester (50)</option>
              </select>
            </div>
          </div> */}
          <div className="flex items-center gap-x-5">
            <button>Total: {data?.length} companies</button>
            {/* <button>Approved: 24</button>
            <button>Rejected: 57</button> */}
          </div>
        </div>
        <div>
          {data?.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
            >
              <div className="flex items-center gap-5">
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={DefaultUser}
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
