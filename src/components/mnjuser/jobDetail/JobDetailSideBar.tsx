import React from 'react'
import { convertDate } from '../../../pages/company/MyJobs'

const JobDetailSideBar = ({ job }) => {
    return (
        <div className="lg:col-span-4 md:col-span-6">
            <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                <div className="p-6">
                    <h5 className="text-lg font-semibold">Job Information</h5>
                </div>
                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                    <ul className="list-none">
                        <li className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-user-check h-5 w-5"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Employee Type:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.jobType}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-map-pin h-5 w-5"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Location:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.location}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-monitor h-5 w-5"
                            >
                                <rect
                                    x="2"
                                    y="3"
                                    width="20"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Job Role:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.roles}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-briefcase h-5 w-5"
                            >
                                <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Experience:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.minExprience} years - {job?.info?.maxExprience} years
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-book h-5 w-5"
                            >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Qualifications:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.maxQualification}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-book h-5 w-5"
                            >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Degree:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {job?.info?.degree}
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-dollar-sign h-5 w-5"
                            >
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Salary:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    Rs {job?.info?.minSalary} - {job?.info?.maxSalary} LPA
                                </span>
                            </div>
                        </li>

                        <li className="flex items-center mt-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-clock h-5 w-5"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>

                            <div className="ms-4">
                                <p className="font-medium">Date posted:</p>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {convertDate(job?.info?.startDate)}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JobDetailSideBar