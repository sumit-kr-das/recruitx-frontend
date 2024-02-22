import { FilterIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { citiesArray } from "../../../constants/citiesArray";
import { jobTypes } from "../../../constants/jobTypes";
import { useLazyWithFilterJobsQuery } from "../../../features/user/get/filterJobsApiSlice";
import { setUserJobsData } from "../../../features/user/userJobsSlice";
import { Button } from "../../../ui/button";
import { ComboboxBox } from "../../../ui/combo-box";
import { Label } from "../../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../../ui/radio-group";
import { Slider } from "../../../ui/slider";

const Filter = () => {
  const [searchParams] = useSearchParams();
  const paramsLocation = searchParams.get("location") || "";
  const paramsTitle = searchParams.get("search") || "";

  const [value, setValue] = useState(paramsLocation);
  const [salary, setSalary] = useState<number[]>([100000]);
  const [exp, setExp] = useState<number[]>([0]);
  const [jobType, setJobType] = useState<string>("Full-time");
  const [workplaceType, setWorkplaceType] = useState<string>("On-site");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [trigger, { data }] = useLazyWithFilterJobsQuery();

  const handleSalary = (event: number[]) => {
    setSalary(event);
  };

  const handleExp = (event: number[]) => {
    setExp(event);
  };

  const handleSubmit = () => {
    trigger({
      title: paramsTitle,
      value,
      workplaceType,
      jobType,
      salary,
      exp,
      page: 1,
    });

    navigate(
      `?search=${paramsTitle}&location=${value}&jobTypes=${jobType}&workplaceType=${workplaceType}&minSalary=${salary}&minExprience=${exp}`
    );
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    dispatch(setUserJobsData(data));
  }, [data]);

  return (
    <aside className="w-[300px] h-fit bg-white p-8 rounded-lg border shadow">
      <h1 className="text-lg font-semibold">Filter</h1>
      <div className="mt-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <p className="font-semibold mb-2">Search Location</p>
          <ComboboxBox
            label="Select Location"
            value={value}
            setValue={setValue}
            data={citiesArray}
          />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Salary</p>
        <Slider
          defaultValue={salary}
          min={100000}
          max={5000000}
          step={100000}
          onValueChange={handleSalary}
          className="my-4"
        />
        <div className="flex align-center justify-between">
          <p>₹{salary}</p>
          <p>₹5000000</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Experience</p>
        <Slider
          defaultValue={exp}
          max={15}
          step={1}
          onValueChange={handleExp}
          className="my-4"
        />
        <div className="flex align-center justify-between">
          <p>{exp} years</p>
          <p>15 years</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold mb-4">Job Type</p>
        <RadioGroup defaultValue={jobType} onValueChange={(e) => setJobType(e)}>
          {jobTypes.map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={type} id="r1" />
              <Label htmlFor="r1">{type}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mt-6">
        <p className="font-semibold mb-4">Select WorkplaceType</p>
        <RadioGroup
          defaultValue={workplaceType}
          onValueChange={(e) => setWorkplaceType(e)}
        >
          {["On-site", "Hybrid", "Remote"].map((type, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={type} id="r2" />
              <Label htmlFor="r2">{type}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="mt-6 gap-2">
        <FilterIcon className="w-4 h-4" />
        Filter
      </Button>
    </aside>
  );
};

export default Filter;
