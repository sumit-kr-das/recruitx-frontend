import { useState } from "react";
import { Slider } from "../../../ui/slider";
import { Checkbox } from "../../../ui/checkbox";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";

const Filter = () => {
  const [sliderValue, setSliderValue] = useState([33]);

  const handleChange = (newValue) => {
    setSliderValue(newValue);
  };
  return (
    <aside className="w-[300px] h-fit bg-white p-8 rounded-lg border shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Filter</h1>
        <p className="text-cyan-600">Clear all</p>
      </div>
      <div className="mt-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="location">Search Location</Label>
          <Input type="text" id="location" placeholder="Banglore" />
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Salary</p>
        <Slider
          defaultValue={sliderValue}
          max={5000}
          step={1}
          onChange={handleChange}
          className="my-4"
        />
        <div className="flex align-center justify-between">
          <p>₹{sliderValue[0]}</p>
          <p>₹5000</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Job Type</p>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Full time
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Part time
          </label>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remote
          </label>
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Job Location</p>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            On Site
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Hybrid
          </label>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remote
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
