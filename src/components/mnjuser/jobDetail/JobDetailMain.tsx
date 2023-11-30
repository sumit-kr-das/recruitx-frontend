import React from 'react'
import DefaultJob from "../../../assets/default-company-logo.png"

const JobDetailMain = ({ job }) => {

    const applyForJob = () => {
        console.log("apply")
    }

    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                <img
                    src={DefaultJob}
                    className="rounded-full h-28 w-28 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                    alt=""
                />

                <div className="md:ms-4 md:mt-0 mt-6">
                    <h5 className="text-xl font-semibold">
                        {job?.title}
                    </h5>
                    <div className="mt-2">
                        <span className="text-slate-400 font-medium me-2 inline-block">
                            <i className="uil uil-building text-[18px] text-emerald-600 me-1"></i>{" "}
                            {job?.companyId.companyName}
                        </span>
                        <span className="text-slate-400 font-medium me-2 inline-block">
                            <i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i>{" "}
                            {job?.companyId.address}, {job?.companyId.pin}
                        </span>
                    </div>
                </div>
            </div>

            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

            <p className="text-slate-600 mt-4">
                {job?.description}
            </p>

            <div className="mt-5">
                <button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600" onClick={applyForJob}>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default JobDetailMain