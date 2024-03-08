import { useUserCareerDataQuery } from "../../../../features/user/get/getCareerDataApiSlice";
import UpdateUserCareer from "./UpdateUserCareer";


const ViewUserCareer = () => {
    const { data, isSuccess } = useUserCareerDataQuery();

    return (
        <>
            {
                isSuccess && (
                    <div className="relative mt-4 bg-white p-10 rounded-lg border shadow">
                        <div className="mb-5">
                            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                                Carrer Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Your career information will help the recruiters to know about your job preferences.
                            </p>
                        </div>
                        <div className="mx-auto mt-5">
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border">
                                <h2 className="text-xl font-semibold mb-2">Job Role</h2>
                                <p className="text-gray-700">{data?.jobRole}</p>
                            </div>
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                <h2 className="text-xl font-semibold mb-2">Industry</h2>
                                <p className="text-gray-700">{data?.industry}</p>
                            </div>
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                <h2 className="text-xl font-semibold mb-2">Role</h2>
                                <p className="text-gray-700">{data?.role}</p>
                            </div>
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                <h2 className="text-xl font-semibold mb-2">Employee Type</h2>
                                <p className="text-gray-700">{data?.employmentType}</p>
                            </div>
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                <h2 className="text-xl font-semibold mb-1">Key skills</h2>
                                <ul className="flex items-center gap-x-5 flex-wrap">
                                    {data?.skills.map((item) => (
                                        <li
                                            className="px-4 py-1 bg-white border rounded-full capitalize mt-2"
                                            key={item}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                <h2 className="text-xl font-semibold mb-2">Expected Salary</h2>
                                <p className="text-gray-700">{data?.expectedSalary}</p>
                            </div>

                        </div>
                        {data && (
                            <UpdateUserCareer data={data} />
                        )}
                    </div>

                )
            }
        </>


    )
}

export default ViewUserCareer