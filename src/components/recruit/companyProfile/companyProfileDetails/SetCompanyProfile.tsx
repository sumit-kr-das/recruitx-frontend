import React from "react";
import { INITIAL_DATA } from "./CompanyProfileDetails";
import { toast } from "react-hot-toast";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { companyTagData } from "../../../../constants/companyTagsData";
import { useSetCompanyProfileMutation } from "../../../../features/company/post/setCompanyProfileDetailsApiSlice";

const SetCompanyProfile = ({ userData, setUserData, cType, setCtype }) => {
  const [setCompanyProfile] = useSetCompanyProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setCompanyProfile(userData).unwrap();
      toast.success("Save successfull");
    } catch (err: any) {
      toast.success(err?.data?.msg);
      console.log("Error on company login", err);
    }
  };
  const handleCancel = () => {
    setUserData(INITIAL_DATA);
  };
  return (
    <div className="relative bg-white p-5 rounded-lg gap-5 mt-5 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Basic information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Increase the quality of your hire
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company description
              </label>
              <div className="mt-2">
                <textarea
                  value={userData.description}
                  onChange={(e) =>
                    setUserData({ ...userData, description: e.target.value })
                  }
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter a breaf description about yourself"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a breaf description about your career.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company type
              </label>
              <div className="mt-2">
                <select
                  value={userData.type}
                  onChange={(e) =>
                    setUserData({ ...userData, type: e.target.value })
                  }
                  id="category"
                  name="category"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select type</option>
                  <option value="Private">Private</option>
                  <option value="Semi-Private">Semi-Private</option>
                  <option value="Govt-Undertaken">Govt-Undertaken</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select language
              </label>
              <div className="mt-2 w-full">
                <SelectInput
                  multiple
                  options={companyTagData}
                  value={cType}
                  onChange={(o) => {
                    setCtype(o);
                    setUserData({ ...userData, tags: cType });
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Team size
              </label>
              <div className="mt-2">
                <input
                  value={userData.teamSize}
                  onChange={(e) =>
                    setUserData({ ...userData, teamSize: e.target.value })
                  }
                  type="text"
                  name="minExprience"
                  id="minExprience"
                  autoComplete="minExprience"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="500+"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Established
              </label>
              <div className="mt-2">
                <input
                  value={userData.founded}
                  onChange={(e) =>
                    setUserData({ ...userData, founded: e.target.value })
                  }
                  type="text"
                  name="minExprience"
                  id="minExprience"
                  autoComplete="minExprience"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="1563"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleCancel}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetCompanyProfile;
