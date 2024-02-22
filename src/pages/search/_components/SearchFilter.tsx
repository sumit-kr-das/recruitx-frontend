import { Search } from "lucide-react";
import { Button } from "../../../ui/button";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../customHooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { useLazySearchJobsTitleQuery } from "../../../features/user/get/searchJobsTitleApiSlice";
import { useLazyWithFilterJobsQuery } from "../../../features/user/get/filterJobsApiSlice";
import { useDispatch } from "react-redux";
import { setUserJobsData } from "../../../features/user/userJobsSlice";

const SearchFilter = () => {
  const [searchParams] = useSearchParams();
  const paramsTitle = searchParams.get("search") || "";
  const paramsLocation = searchParams.get("location") || "";
  const paramsworkplaceType = searchParams.get("workplaceType") || "";
  const paramsJobType = searchParams.get("jobTypes") || "";
  const paramsSalary = searchParams.get("minSalary") || "";
  const paramsExp = searchParams.get("minExprience") || "";

  const [search, setSearch] = useState<string>(paramsTitle);
  const [titleData, setTitleData] = useState([]);
  const [show, setShow] = useState<boolean>(false);
  const debounceSearch = useDebounce(search);
  const dispatch = useDispatch();
  const [trigger, { data }] = useLazySearchJobsTitleQuery();
  const [filterData, results] = useLazyWithFilterJobsQuery();

  useEffect(() => {
    trigger({
      title: debounceSearch,
    });
    setTitleData(data);
  }, [debounceSearch]);

  const setInputSearch = (title: string) => {
    setSearch(title);
    setShow(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(false);
    filterData({
      title: search,
      value: paramsLocation,
      workplaceType: paramsworkplaceType,
      jobType: paramsJobType,
      salary: paramsSalary,
      exp: paramsExp,
    });
  };

  useEffect(() => {
    dispatch(setUserJobsData(results.data));
  }, [results]);

  return (
    <div className="relative p-8 rounded-lg border shadow bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white">
        Find your dream job here!
      </h1>
      <p className="text-white text-lg my-2">
        Explore the latest job openings and apply for the best job opportunities
        available today!
      </p>
      <div className="relative w-full flex items-center p-2 rounded-lg justify-between shadow bg-white">
        <Search className="block absolute text-gray-400" />
        <input
          onClick={() => setShow(!show)}
          className="block w-full rounded-md border-0 pl-8 py-1.5 focus:outline-none focus:ring-transparent"
          type="text"
          placeholder="Search Job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
        >
          Search
        </Button>
        {show && (
          <div className="w-full h-fit absolute top-12 left-0 bg-white border border-t-0 rounded-bl-lg rounded-br-lg">
            {titleData?.map((item, index) => (
              <p
                key={index}
                onClick={() => setInputSearch(item?.title)}
                className="pl-8 py-1.5 cursor-pointer"
              >
                {item?.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
