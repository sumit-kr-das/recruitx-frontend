import DefaultCompany from "../../assets/default-company-logo.png";

const CompanyContainer = () => {
  return (
    <div className="bg-white w-[300px] h-[300px] flex items-center flex-col justify-center text-center p-6 shadow border rounded-xl mt-8">
      <img
        className="relative -top-[30px] w-[140px] h-[140px] rounded-full object-cover"
        src={DefaultCompany}
        alt="company icon"
      />
      <div className="relative -top-[20px] mb-2">
        <h2 className="font-bold line-clamp-1">Google Pvt Ltd.</h2>
        <p className="text-sm mt-2">Kalkata</p>
        <p className="line-clamp-2 mt-2">IT company with best projects</p>
        <div className="flex items-center flex-wrap gap-2 my-2">
          <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Software
          </p>
          <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Verified
          </p>
          <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
            Kalkata
          </p>
          <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
            4 Vacancies
          </p>
          {/* <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
            {data.info.workplaceType}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyContainer;
