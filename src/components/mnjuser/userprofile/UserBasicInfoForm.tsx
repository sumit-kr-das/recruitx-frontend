import { useState } from 'react'
import { skillData } from '../../../constants/skillData';
import SelectInput from '../../form/multiSelectInput/SelectInput';
import { MdClose } from 'react-icons/md';

const UserBasicInfoForm = () => {
    const [info, setInfo] = useState();
    const [skills, setSkills] = useState([skillData[0]]);
    const [language, setLanguage] = useState([]);

    const handelChange = (e) => {
        const {name, value} = e.target;
        setInfo({...info, [name]:value});
    }

    const handelSubmit = ()=>{
        console.log(info);
    }

    return (
        <>
            <div className="pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Basic information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Increase the quality of your hire
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Phone No
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="text"
                                    name="phone"
                                    id="title"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Date of Birth
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="date"
                                    name="dateOfBirth"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            User Bio
                        </label>
                        <div className="mt-2">
                            <textarea
                                onChange={handelChange}
                                id="bio"
                                name="bio"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            User Objective
                        </label>
                        <div className="mt-2">
                            <textarea
                                onChange={handelChange}
                                id="bio"
                                name="objective"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Enter Photo
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="file"
                                    name="phone"
                                    id="title"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Github

                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="text"
                                    name="github"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            LinkedIn

                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="text"
                                    name="linkedIn"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Age

                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="number"
                                    name="age"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="sm:col-span-3">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Address
                        </label>
                        <div className="mt-2">
                            <textarea
                                onChange={handelChange}
                                id="bio"
                                name="address"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter a breaf description about your job post"
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Write a breaf description about your job.
                        </p>
                    </div>

                    <div className="col-span-full">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Address
                        </label>

                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <select
                                    onChange={handelChange}
                                    name="age"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                >

                                    <option value="fresher">Fresher</option>
                                    <option value="fresher">Exprienced</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Language
                        </label>
                        <div className="mt-2">
                            <div className="">

                                <input
                                    className="border rounded-lg px-2 py-2 w-full my-2"
                                    type="text"
                                    placeholder="Enter your preferred job role"
                                />
                                <div className="flex items-center gap-2 mt-1 flex-wrap">

                                    <p className="text-sm font-semibold ">Bengali</p>
                                    <MdClose className="text-xs cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Gender
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <select
                                    onChange={handelChange}
                                    name="gender"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                >

                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Maximum Qualification
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    onChange={handelChange}
                                    type="number"
                                    name="maxQualification"
                                    id="title"
                                    autoComplete="dateOfBirth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Enter Phone No"
                                />
                            </div>
                        </div>
                    </div>


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
                                options={skillData}
                                value={skills}
                                onChange={(o) => {
                                    setSkills(o);
                                }}
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600" onClick={handelSubmit}>
                            Save
                        </button>
                    </div>



                </div>
            </div >
        </>
    )
}

export default UserBasicInfoForm;