import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserDefault from "../assets/default-company-logo.png";
import { adminDashboard } from "../constants/adminDashboard";
import { companyDashboard } from "../constants/companyDashboard";
import { useViewAdminQuery } from "../features/admin/get/viewAdminApiSlice";
import { selectCurrentRole } from "../features/auth/authSlice";
import { useViewCompanyQuery } from "../features/company/get/viewCompanyApiSlice";
import { selectCurrentStatus } from "../features/auth/authSlice";
const AdminProfile = () => {
  const { data, isSuccess } = useViewAdminQuery();
  return (
    <>
      {isSuccess && (
        <div className="flex items-center justify-center flex-col">
          <img
            src={UserDefault}
            width={120}
            alt="user_default"
            className="rounded-full object-cover border mb-2"
          />
          <h1 className="font-bold">{data && data?.name}</h1>
          <p className="text-xs font-medium">Super {data && data?.role}</p>
          <p className="text-xs text-gray-400">{data && data?.email}</p>
        </div>
      )}
    </>
  );
};

const CompanyProfile = () => {
  const { data, isSuccess } = useViewCompanyQuery();
  return (
    <>
      {isSuccess && (
        <div className="flex items-center justify-center flex-col">
          <img
            src={UserDefault}
            width={120}
            alt="user_default"
            className="rounded-full object-cover border mb-2"
          />
          <h1 className="font-bold">{data && data?.name}</h1>
          <p className="text-xs font-medium">{data && data?.designation}</p>
          <p className="text-xs font-medium my-1">
            @ {data && data?.companyName}
          </p>
          <p className="text-xs text-gray-400">{data && data?.industry}</p>
        </div>
      )}
    </>
  );
};

const SideBar = () => {
  const role = useSelector(selectCurrentRole);
  let status = useSelector(selectCurrentStatus);


  return (
    <div className="pt-[15px] py-">
      {role === "admin" ? <AdminProfile /> : <CompanyProfile />}
      <h3 className="mt-10 mb-4 px-5 font-medium text-bold text-md">
        Main Navigation
      </h3>
      {role === "admin"
        ? adminDashboard.map((item, index) => (
          <Link
            to={item.src}
            className="block px-5 text-slate-500 text-[13px] leading-[18px] px-full py-4 cursor-pointer border-l-4 border-white hover:text-cyan-600 hover:border-l-cyan-400 hover:bg-green-100"
            key={index}
          >
            {item.menu}
          </Link>
        ))
        : companyDashboard.map((item, index) => (
          <Link
            to={item.src}
            className={`block px-5 text-slate-500 text-[13px] leading-[18px] px-full py-4 cursor-pointer border-l-4 border-white hover:text-cyan-600 hover:border-l-cyan-400  ${status === "approved" ? 'hover:bg-green-100' : 'hover:bg-black-100'}`}
            key={index}
          >
            {item.menu}
          </Link>
        ))}
    </div>
  );
};

export default SideBar;
