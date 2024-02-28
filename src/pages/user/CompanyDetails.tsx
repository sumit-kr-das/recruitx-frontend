import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import { useGetCompanyDetailQuery } from "../../features/user/get/getCompanyDetailApiSlice";
import UserTitleWrapper from "../../components/user/UserTitleWrapper";
import { Button } from "../../ui/button";
import { TJobs } from "../../@types/publicTypes/TJobs";
import Loader from "../../components/loader/Loader";
import CompanyReviewForm from "./_components/CompanyReviewForm";
import CompanyReviews from "./_components/CompanyReviews";

const CompanyDetails = () => {
  const { companyId } = useParams();
  const { data, isLoading, isSuccess } = useGetCompanyDetailQuery({ id: companyId });
  console.log(data);

  if (!data && isLoading) return <Loader />

  return (
    <>
      {
        isSuccess && (<>
          <div>
            <div className="bg-[#FAFAFA]">

              <TopHeader />
              <Container className="pt-32">
                <section>
                  <div className="mt-10">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                      <div className="lg:col-span-8 md:col-span-6">
                        <div className="md:flex items-center p-6 shadow  rounded-md bg-white border rounded-xl ">
                          <img
                            src={data?.companyDetail?.companyProfileId?.logo}
                            className="rounded-full h-28 w-28 bg-white  shadow "
                            alt=""
                          />

                          <div className="md:ms-4 md:mt-0 mt-6">
                            <h5 className="text-xl font-semibold">
                              {data?.companyDetail?.companyName}
                            </h5>
                            <div className="mt-2">
                              <span className="text-slate-400 font-medium me-2 inline-block">
                                <i className="uil uil-building text-[18px] text-emerald-600 me-1"></i>{" "}
                                {data?.companyDetail?.industry}
                              </span>
                              <br />
                              <span className="text-slate-400 font-medium me-2 inline-block">
                                <i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
                                Address: {data?.companyDetail?.address}, Pin: {data?.companyDetail?.pin}
                              </span>
                            </div>
                          </div>
                        </div>

                        <h5 className="text-lg font-semibold mt-6">
                          Company Description:
                        </h5>

                        <p className="text-slate-600 mt-4">
                          {data?.companyDetail?.companyProfileId?.description}
                        </p>
                        <div className="mt-5">
                          <CompanyReviewForm />
                        </div>
                        <div className="mt-5">
                          <CompanyReviews />
                        </div>
                      </div>
                      {/* sidebar */}
                      <div className="lg:col-span-4 md:col-span-6">
                        <div className="shadow rounded-md bg-white sticky top-20 border rounded-xl">
                          <div className="p-6">
                            <h5 className="text-lg font-semibold">Company Information</h5>
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
                                    {data?.companyDetail?.companyProfileId?.founded}
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
                                    {data?.companyDetail?.address}
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
                                    {data?.companyDetail?.companyProfileId?.type}
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
                                  <div className="text-emerald-600 font-medium text-sm flex flex-wrap gap-2 mt-2">
                                    {data?.companyDetail?.companyProfileId?.tags.map((item: string, index: number) => (
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
                                    {data?.companyDetail?.industry}
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <UserTitleWrapper title="Available Jobs" titleVariant="hiring now" des="This company has the available jobs for now">
                      {
                        data?.jobs?.map((item: TJobs, index: number) => (
                          <>
                            <div className="bg-white w-[350px] h-[350px] p-6 shadow border rounded-xl" key={index}>
                              <div className="flex items-center gap-2">
                                <img
                                  className="w-[60px] h-[60px] rounded-full object-cover"
                                  src={data?.companyDetail?.companyProfileId.logo}
                                  alt="company icon"
                                />
                                <div>
                                  <h2 className="font-bold line-clamp-1">
                                    {data?.companyDetail?.companyName}
                                  </h2>
                                  <p className="text-sm">{item.info.location}</p>
                                </div>
                              </div>

                              <div className="mt-4">
                                <h3 className="font-bold text-xl line-clamp-1">{item?.title}</h3>
                                <p className="line-clamp-2">{item?.description}</p>
                              </div>

                              <div className="flex items-center flex-wrap gap-2 my-4">
                                <p className="bg-blue-50 text-blue-500 text-sm font-semibold px-4 py-2 rounded-xl">
                                  {item?.info.vacancies} Positions
                                </p>
                                <p className="bg-red-50 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl">
                                  {item?.info.jobType}
                                </p>
                                <p className="bg-green-50 text-green-500 text-sm font-semibold px-4 py-2 rounded-xl">
                                  {item?.info.minExprience} Years
                                </p>
                                <p className="bg-cyan-50 text-cyan-500 text-sm font-semibold px-4 py-2 rounded-xl">
                                  {item?.info.maxSalary}/Year
                                </p>
                                <p className="bg-orange-50 text-orange-500 text-sm font-semibold px-4 py-2 rounded-xl">
                                  {item?.info.workplaceType}
                                </p>
                              </div>

                              <div className="flex items-center gap-4">
                                <Button className="bg-cyan-500 hover:bg-cyan-600">Apply Now</Button>
                                <Button variant="outline">View Details</Button>
                              </div>
                            </div>
                          </>
                        ))
                      }
                    </UserTitleWrapper>
                  </div>
                </section>
              </Container>
              <Footer />
            </div>
          </div>
        </>)
      }
    </>

  );
};

export default CompanyDetails;
