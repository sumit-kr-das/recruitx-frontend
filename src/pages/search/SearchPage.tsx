import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import SelectInput from "../../components/form/multiSelectInput/SelectInput";
import Job from "../../components/mnjuser/recomandedJobs/Job";
import TopHeader from "../../components/navigation/TopHeader";
import { tagsData } from "../../constants/tagsData";
import { useSearchDataMutation } from "../../features/user/get/getSearchDataApiSlice";

const INITIAL_SEARCH_DATA = {
  role: [],
  salary: 0,
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("skills");
  const exprience = Number(searchParams.get("exprience"));
  const location = searchParams.get("location");
  const [searchData, { isError }] = useSearchDataMutation();
  const [jobs, setJobs] = useState([]);

  const [data, setData] = useState(INITIAL_SEARCH_DATA);
  const [tags, setTags] = useState([]);
  const [searchFilter, setSearchFilter] = useState(INITIAL_SEARCH_DATA);

  const handelFilterSubmit = (e) => {
    e.preventDefault();
    setSearchFilter(data);
  };

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const jobData = await searchData({
          title,
          exprience,
          location,
        }).unwrap();
        if (!isError) {
          console.log(jobData);
          console.log(searchFilter.role.length, "length");
          if (searchFilter.role.length > 0 || searchFilter.salary > 0) {
            const filteredJobs = jobData.filter((job) => {
              console.log("working");
              const rolesMatch = searchFilter.role.every((role) =>
                job.info.skills.includes(role)
              );
              const salaryInRange =
                job.info.minSalary <= searchFilter.salary &&
                job.info.maxSalary >= searchFilter.salary;
              return rolesMatch || salaryInRange;
            });
            setJobs(filteredJobs);
          } else {
            setJobs(jobData);
          }
        } else {
          console.log("no success");
        }
      } catch (err) {
        console.log("Error on company login", err);
      }
    };
    fetchSearchData();
  }, [searchFilter]);

  return (
    <>
      <TopHeader />
      <main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
        <section className="mt-32 w-full">
          <div className="flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold">
              {jobs.length > 0 ? (
                <>{jobs?.length} Jobs based on Your Desired Search</>
              ) : (
                <>No Jobs Found</>
              )}
            </h1>
            <p className="mt-2">
              Exclusive opportunities based on what recruiters are searching
              for,
              <br /> even before they post a job on RecruitX
            </p>
          </div>
          <form
            className="mt-10 flex justify-between"
            onSubmit={handelFilterSubmit}
          >
            {/* left section */}
            <div className="w-7/12">
              <Job jobs={jobs} />
            </div>
            {/* right section */}
            <div className="w-4/12">
              <div className="bg-white p-8 border rounded-lg">
                <h1 className="text-xl font-bold">
                  Manage your job preferences
                </h1>
                <div className="mt-4">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select Skills
                    </label>
                    <div className="mt-2 w-full">
                      <SelectInput
                        multiple
                        options={tagsData}
                        value={tags}
                        onChange={(o) => {
                          setTags(o);
                          setData({ ...data, role: tags });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Headline
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          value={data.salary}
                          onChange={(e) =>
                            setData({ ...data, salary: e.target.value })
                          }
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="title"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Enter a short headline"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-10">
                  <button
                    className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600"
                    type="submit"
                  >
                    Filter Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
