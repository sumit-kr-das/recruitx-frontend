import { MapPin, Search as SearchIcn } from "lucide-react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui/button";
import {useLazySearchJobsTitleQuery} from "../../../../features/user/get/searchJobsTitleApiSlice.ts";
import {useDebounce} from "../../../../customHooks/useDebounce.ts";

const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    skill: "",
    location: "",
  });
  const [titleData, setTitleData] = useState([]);
  const [trigger, { data: searchData }] = useLazySearchJobsTitleQuery();
  const debounceSearch = useDebounce(data.skill, 1000);

  const search = () => {
    navigate(
      `../../mnjuser/jobs?search=${data.skill}&location=${data.location}`
    );
  };

  useEffect(() => {
    setTitleData([]);
      trigger({
        title: debounceSearch,
      });
      setTitleData(searchData);
  }, [debounceSearch, searchData]);


  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative bg-white md:w-8/12 flex items-center justify-center gap-4 border-2 rounded-lg shadow px-3 py-2">
        <div className=" flex items-center justify-center gap-1 flex-1">
          <SearchIcn className="w-4 h-4 text-gray-400"/>
          <input
              type="text"
              placeholder="Business Development Manager"
              className="block w-full rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
              name="skill"
              onChange={(e) => setData({...data, skill: e.target.value})}
          />
        </div>
        {
            titleData?.length > 0 &&
            <div className="w-full mb-2 absolute z-50 top-16 left-0 bg-white rounded-lg border">
              {
                titleData?.map((item, index) => (
                    <div key={index}
                         className="text-gray-500 flex items-center gap-2 px-3 py-2 hover:bg-gray-200 cursor-pointer">
                      <SearchIcn className="w-5 h-5 text-gray-400"/>
                      <p className="text-lg ">{item?.title}</p>
                    </div>
                ))
              }
            </div>
        }

        <div className="flex items-center justify-center gap-1 flex-1">
          <MapPin className="w-4  h-4 text-gray-400"/>
          <input
              type="text"
              placeholder="London, United Kingdom"
              className="block w-full rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
              name="location"
              onChange={(e) => setData({...data, location: e.target.value})}
          />
        </div>
        <Button className="bg-cyan-500 hover:bg-cyan-600" onClick={search}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
