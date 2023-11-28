import { qualificationData } from "../../../../constants/qualificationData";
import Modal from "../../../Modal";

const SetUserEducation = ({ setOpen }) => {
  const handleSubmit = () => {};
  return (
    <Modal classes="w-fit h-fit overflow-auto">
      <form onSubmit={handleSubmit}>
        <div className="pb-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Educational information
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Education
              </label>
              <div className="mt-2">
                <select
                  // value={userData.gender}
                  // onChange={(e) =>
                  // 	setUserData({ ...userData, gender: e.target.value })
                  // }
                  id="category"
                  name="category"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select education</option>
                  {qualificationData.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                University/Institute
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    // value={userData.objective}
                    // onChange={(e) =>
                    // 	setUserData({
                    // 		...userData,
                    // 		objective: e.target.value,
                    // 	})
                    // }
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Institute name"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Course
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    // value={userData.objective}
                    // onChange={(e) =>
                    // 	setUserData({
                    // 		...userData,
                    // 		objective: e.target.value,
                    // 	})
                    // }
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="B.tech"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Course type
              </label>
              <div className="mt-2">
                <select
                  // value={userData.gender}
                  // onChange={(e) =>
                  // 	setUserData({ ...userData, gender: e.target.value })
                  // }
                  id="category"
                  name="category"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select course type</option>
                  <option value="Part time">Part time</option>
                  <option value="Full time">Full time</option>
                  <option value="Correspondence/Distance learning">
                    Correspondence/Distance learning
                  </option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Course duration
              </label>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    // value={userData.objective}
                    // onChange={(e) =>
                    // 	setUserData({
                    // 		...userData,
                    // 		objective: e.target.value,
                    // 	})
                    // }
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Starting year"
                  />
                </div>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    // value={userData.objective}
                    // onChange={(e) =>
                    // 	setUserData({
                    // 		...userData,
                    // 		objective: e.target.value,
                    // 	})
                    // }
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ending year"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Total marks in percentage
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    // value={userData.objective}
                    // onChange={(e) =>
                    // 	setUserData({
                    // 		...userData,
                    // 		objective: e.target.value,
                    // 	})
                    // }
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="70"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={() => setOpen((prev) => !prev)}
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
    </Modal>
  );
};

export default SetUserEducation;
