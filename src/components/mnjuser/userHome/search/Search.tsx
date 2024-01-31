import { MapPin, Search as SearchIcn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui/button";

const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    skill: "",
    exprience: 0,
    location: "",
  });

  const search = () => {
    navigate(
      `../../mnjuser/jobs?skills=${data.skill}&exprience=${data.exprience}&location=${data.location}`
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-8/12 flex items-center justify-center gap-4 border-2 rounded-lg shadow px-3 py-2">
        <div className="flex items-center justify-center gap-1 flex-1">
          <SearchIcn className="w-4  h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Business Development Manager"
            className="block w-full rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
            name="skill"
            onChange={(e) => setData({ ...data, skill: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-center gap-1 flex-1">
          <MapPin className="w-4  h-4 text-gray-400" />
          <input
            type="text"
            placeholder="London, United Kingdom"
            className="block w-full rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
            name="location"
            onChange={(e) => setData({ ...data, location: e.target.value })}
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
