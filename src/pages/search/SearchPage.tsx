import { useDispatch, useSelector } from "react-redux";
import NotFoundImg from "../../assets/not-found.png";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import {
  selectCurrentUserJobsData,
  setUserJobsData,
} from "../../features/user/userJobsSlice";
import Container from "../../layout/Container";
import Filter from "./_components/Filter";
import FilterPagination from "./_components/FilterPagination";
import FilteredJobs from "./_components/FilteredJobs";
import SearchFilter from "./_components/SearchFilter";
import FilterMobile from "./_components/FilterMobile";
import { useLazyWithFilterJobsQuery } from "../../features/user/get/filterJobsApiSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const jobsData = useSelector(selectCurrentUserJobsData);
  const [trigger, { data }] = useLazyWithFilterJobsQuery();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    trigger({
      title: searchParams.get("search") || "",
      value: "",
      location: searchParams.get("location") || "",
      workplaceType: "On-site",
      jobType: "Full-time",
      salary: 100000,
      exp: 0,
      page: 1,
    });
  }, []);

  useEffect(() => {
    dispatch(setUserJobsData(data));
  }, [data]);

  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-28 relative">
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 md:gap-x-8">
          <div className="hidden md:block">
            <Filter />
          </div>
          <div>
            <SearchFilter />
            <div className="md:hidden">
              <div className="px-2 mt-8 flex items-center justify-between">
                <p className="font-semibold">Available jobs</p>
                <FilterMobile />
              </div>
            </div>
            {jobsData?.jobs?.length !== 0 ? (
              <>
                <div className="mt-8 grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                  {jobsData?.jobs.map((job, index) => (
                    <FilteredJobs key={index} job={job} />
                  ))}
                </div>
                <FilterPagination />
              </>
            ) : (
              <div className="w-full mt-20 flex items-center justify-center flex-col">
                <img
                  className="w-40 h-40 border p-8 bg-white rounded-full"
                  src={NotFoundImg}
                  alt="not found"
                />
                <p className="text-xl mt-4 text-center">No job found</p>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchPage;
