import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom"
import { useSearchDataMutation } from "../../features/user/getSearchDataApiSlice";
import Job from "../../components/mnjuser/recomandedJobs/Job";
import TopHeader from "../../components/navigation/TopHeader";
import Footer from "../../components/footer/Footer";
import { MdClose } from "react-icons/md";
const INITIAL_SEARCH_DATA = {
  role:[""],
  location:[""],
  salary:0,
}

const SearchPage = () => {
  const [searchData, { isLoading }] = useSearchDataMutation();
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [searchFilter, setSearchFilter] = useState();

  const [role, setRole] = useState([]);
  const [salary, setSalary] = useState();
  const [locations, setLocation] = useState([]);



  // const queryParams = new URLSearchParams(location.search);
  // const skill = queryParams.get("skill");
  const title = searchParams.get("skills");
  const exprience = Number(searchParams.get("exprience"));
  const location = searchParams.get("location");

  const handelRoles = (e) => {
    if (e.key === "Enter") {
      setRole([...role, e.target.value]);
      console.log(role);
    }
  };

  const handelLocation = (e) => {
    if (e.key === "Enter") {
      setLocation([...locations, e.target.value]);
      console.log(location);
    }
  };

  const handelFilterSubmit = () => {
    // const filters = {
    //   role: role,
    //   salary,
    //   locations
    // };
    setSearchFilter({
      role: role,
      salary,
      locations
    });
    console.log(searchFilter, "searchFilter");
  };




  useEffect(() => {
    // const filters = JSON.parse(localStorage.getItem("filter") || 'null');
    // setSearchFilter(filters);
    const fetchSearchData = async () => {
      try {
        const jobData = await searchData({ title, exprience, location }).unwrap();
        const filteredJobs = jobData.filter(job => {
          if (searchFilter) {
            // Check if the job roles match the filter roles
            const rolesMatch = searchFilter.role.every(role => job.info.skills.includes(role));

            // Check if the job salary is within the filter salary range
            const salaryInRange = job.info.minSalary <= searchFilter.salary && job.info.maxSalary >= searchFilter.salary;

            // Check if the job location is in the filter locations
            const locationMatch = searchFilter.locations.includes(job.info.location);

            // Return true if all conditions are met, meaning the job passes the filter
            return rolesMatch || salaryInRange || locationMatch;
          } else {
            return jobData;
          }

        });
        setJobs(filteredJobs);
      } catch (err) {
        console.log("Error on company login", err);
      }
    }
    fetchSearchData();
  }, []);

  return (
    <>
      <TopHeader />
      <main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
        <section className="mt-32 w-full">
          <div className="flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold">
              {jobs.length} Jobs based on Your Desired Search
            </h1>
            <p className="mt-2">
              Exclusive opportunities based on what recruiters are searching for,
              <br /> even before they post a job on RecruitX
            </p>
          </div>
          <div className="mt-10 flex justify-between">
            {/* left section */}
            <div className="w-7/12">
              <Job jobs={jobs} />
            </div>
            {/* right section */}
            <div className="w-4/12">
              <div className="bg-white p-8 border rounded-lg">
                <h1 className="text-xl font-bold">Manage your job preferences</h1>
                <div className="mt-4">
                  <p className="font-semibold">Preferred Job Role (Max 3)</p>
                  <input
                    className="border rounded-lg px-2 py-2 w-full my-2"
                    type="text"
                    placeholder="Enter your preferred job role"
                    onKeyDown={handelRoles}

                  />
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {role.map((item, index) => (
                      <>
                        <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                          <p className="text-sm font-semibold ">{item}</p>
                          <MdClose
                            className="text-xs cursor-pointer"
                            onClick={() => setRole(role.filter((_, i) => i !== index))}
                          />
                        </div>
                      </>
                    ))}
                    {/* <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                      <p className="text-sm font-semibold ">Software Programmer</p>
                      <MdClose className="text-xs cursor-pointer" />
                    </div>
                    <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                      <p className="text-sm font-semibold ">Developer</p>
                      <MdClose className="text-xs cursor-pointer" />
                    </div> */}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Preferred Salary</p>
                  <input
                    className="border rounded-lg px-2 py-2 w-full my-2"
                    type="text"
                    placeholder="Enter your preferred salary"
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <div className="mt-4">
                    <p className="font-semibold">Preferred Work Locations (Max 10)</p>
                    <input
                      className="border rounded-lg px-2 py-2 w-full my-2"
                      type="text"
                      placeholder="Enter your preferred location"
                      onKeyDown={handelLocation}
                    />
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {locations.map((item, index) => (
                        <>
                          <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                            <p className="text-sm font-semibold ">{item}</p>
                            <MdClose
                              className="text-xs cursor-pointer"
                              onClick={() =>
                                setLocation(locations.filter((_, i) => i !== index))
                              }
                            />
                          </div>
                        </>
                      ))}
                      <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                        <p className="text-sm font-semibold ">New Delhi</p>
                        <MdClose className="text-xs cursor-pointer" />
                      </div>
                      <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                        <p className="text-sm font-semibold ">Kalkata</p>
                        <MdClose className="text-xs cursor-pointer" />
                      </div>
                      <div className="flex items-center bg-slate-200 py-1 px-2 rounded-xl gap-1">
                        <p className="text-sm font-semibold ">Guskara</p>
                        <MdClose className="text-xs cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-10">
                  <button
                    className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600"
                    onClick={handelFilterSubmit}
                  >
                    Filter Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}

export default SearchPage