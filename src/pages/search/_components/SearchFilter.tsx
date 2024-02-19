import { Search } from "lucide-react";
import { Button } from "../../../ui/button";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../customHooks/useDebounce";

const SearchFilter = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState([]);
  const [show, setShow] = useState<boolean>(false);
  const debounceSearch = useDebounce(search);

  useEffect(() => {
    const loadData = () => {
      fetch(`https://api.escuelajs.co/api/v1/products?title=${debounceSearch}`)
        .then((res) => res.json())
        .then((resData) => setData(resData))
        .then((err) => console.log(err));
    };
    // loadData();
    console.log(search, data);
  }, [debounceSearch]);

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
          onClick={() => setShow(false)}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
        >
          Search
        </Button>
        {show && (
          <div className="w-full h-fit absolute top-12 left-0 bg-white border border-t-0 rounded-bl-lg rounded-br-lg">
            <p
              onClick={() => setSearch("Clicked")}
              className="pl-8 py-1.5 cursor-pointer"
            >
              Search
            </p>
            <p
              onClick={() => setSearch("Clicked")}
              className="pl-8 py-1.5 cursor-pointer"
            >
              Search
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;