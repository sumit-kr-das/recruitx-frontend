import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [skill, setSkill] = useState("");
  const [exprience, setExprience] = useState(0);
  const [location, setLocation] = useState("");
  const search = () => {
    navigate(
      `../../mnjuser/jobs?skills=${skill}&exprience=${exprience}&location=${location}`
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white flex items-center justify-center border-2 rounded-full shadow-md px-6 py-4">
        <div className="flex items-center justify-center ">
          <input
            type="text"
            placeholder="Enter skills/designations/companies"
            className="block w-full rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
            name="skill"
            onChange={(e) => setSkill(e.target.value)}
          />
          <div className="text-gray-400 mx-2">|</div>
          <input
            type="text"
            placeholder="Enter experience"
            className="block w-[70%] rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
            name="exprience"
            onChange={(e) => setExprience(Number(e.target.value))}
          />
          <div className="text-gray-400 mx-2">|</div>
          <input
            type="text"
            placeholder="Enter location"
            className="block w-[50%] rounded-md border-0 py-1.5 focus:outline-none focus:ring-transparent"
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          className="bg-cyan-500 text-white text-sm px-6 py-4 rounded-full hover:bg-cyan-600"
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
