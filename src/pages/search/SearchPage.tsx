import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom"
import { useSearchDataMutation } from "../../features/user/getSearchDataApiSlice";
import FilterJobs from "../../components/mnjuser/recomandedJobs/FilterJobs";
import FilterModal from "../../components/mnjuser/recomandedJobs/FilterModal";
import Job from "../../components/mnjuser/recomandedJobs/Job";

const SearchPage = () => {
  const [searchData, { isLoading }] = useSearchDataMutation();
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  // const queryParams = new URLSearchParams(location.search);
  // const skill = queryParams.get("skill");
  const title = searchParams.get("skills");
  const exprience = Number(searchParams.get("exprience"));
  const location = searchParams.get("location");



  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const jobData = await searchData({ title, exprience, location }).unwrap();
        setJobs(jobData);
      } catch (err) {
        console.log("Error on company login", err);
      }
    }
    fetchSearchData();
  }, []);

  return (
    <>
      <main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
        <section className="mt-32 w-full">
          {/* heading */}
          <div className="flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold">
              {jobs.length} Jobs based on Your Desired Search
            </h1>
            <p className="mt-2">
              Exclusive opportunities based on what recruiters are searching for,{" "}
              <br /> even before they post a job on RecruitX
            </p>
          </div>
          {/* jobs */}
          <div className="mt-10 flex justify-between">
            {/* left section */}
            <div className="w-7/12">
              <Job jobs={jobs}/>
            </div>
            {/* right section */}
            <div className="w-4/12">
              <FilterJobs />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default SearchPage