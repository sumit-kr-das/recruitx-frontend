import { useParams } from "react-router-dom";
import DefaultJob from "../../assets/default-company-logo.png";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import { useViewCompanyDetailsQuery } from "../../features/company/get/viewCompanyDetails";
import Container from "../../layout/Container";


const CompanyDetails = () => {
  const { cimpanyId } = useParams();
  const { data: job } = useViewCompanyDetailsQuery({ id: cimpanyId });
  console.log(job);

  return (
    <div>
      <div className="bg-green-50">
        <TopHeader />
        <Container>
          <section className=" md:py-24 py-16">
            <div className="container mt-10">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-8 md:col-span-6">
                  <div className="md:flex items-center p-6 shadow  rounded-md bg-white">
                    <img
                      src={DefaultJob}
                      className="rounded-full h-28 w-28 bg-white  shadow "
                      alt=""
                    />

                    <div className="md:ms-4 md:mt-0 mt-6">
                      <h5 className="text-xl font-semibold">
                        {job?.companyName}
                      </h5>
                      <div className="mt-2">
                        <span className="text-slate-400 font-medium me-2 inline-block">
                          <i className="uil uil-building text-[18px] text-emerald-600 me-1"></i>{" "}
                          {job?.industry}
                        </span>
                        <br />
                        <span className="text-slate-400 font-medium me-2 inline-block">
                          <i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
                          Address: {job?.address}, Pin: {job?.pin}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h5 className="text-lg font-semibold mt-6">
                    Job Description:
                  </h5>

                  <p className="text-slate-600 mt-4">
                    {job?.profile[0]?.description}
                  </p>
                </div>
                {/* sidebar */}
                <div className="lg:col-span-4 md:col-span-6">
                  <div className="shadow rounded-md bg-white sticky top-20">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold">Job Information</h5>
                    </div>
                    <div className="p-6 border-t border-slate-100 ">
                      <ul className="list-none">
                        <li className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user-check h-5 w-5"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                          </svg>

                          <div className="ms-4">
                            <p className="font-medium">Founded:</p>
                            <span className="text-emerald-600 font-medium text-sm">
                              {job?.profile[0]?.founded}
                            </span>
                          </div>
                        </li>

                        <li className="flex items-center mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-map-pin h-5 w-5"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>

                          <div className="ms-4">
                            <p className="font-medium">Location:</p>
                            <span className="text-emerald-600 font-medium text-sm">
                              {job?.address}
                            </span>
                          </div>
                        </li>

                        <li className="flex items-center mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor h-5 w-5"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>

                          <div className="ms-4">
                            <p className="font-medium">Company type:</p>
                            <span className="text-emerald-600 font-medium text-sm">
                              {job?.profile[0]?.type}
                            </span>
                          </div>
                        </li>

                        <li className="flex items-center mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-briefcase h-5 w-5"
                          >
                            <rect
                              x="2"
                              y="7"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          </svg>

                          <div className="ms-4">
                            <p className="font-medium">Tags:</p>
                            <div className="text-emerald-600 font-medium text-sm flex flex-wrap gap-2">
                              {job?.profile[0]?.tags.map((item: string, index: number) => (
                                <p className="bg-gray-200 px-2 py-1 rounded-full" key={index}>
                                  {item}
                                </p>
                              ))}
                            </div>
                          </div>
                        </li>

                        <li className="flex items-center mt-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-book h-5 w-5"
                          >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                          </svg>

                          <div className="ms-4">
                            <p className="font-medium">Industry:</p>
                            <span className="text-emerald-600 font-medium text-sm">
                              {job?.industry}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyDetails;
