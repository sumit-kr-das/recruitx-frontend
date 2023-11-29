import React from 'react'
import TopHeader from '../../components/navigation/TopHeader'
import Footer from '../../components/footer/Footer'
import Container from '../../layout/Container'
import DefaultJob from "../../assets/default-company-logo.png"

const JobDetailsPage = () => {
    return (
        <div className='bg-green-50'>
            <TopHeader />
            {/* <Conta className="max-w-screen-xl mx-auto pb-10 flex justify-between"> */}
            <Container>
                <section className=" md:py-24 py-16">
                    <div className="container mt-10">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div className="lg:col-span-8 md:col-span-6">
                                <div className="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                                    <img src={DefaultJob} className="rounded-full h-28 w-28 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" alt="" />

                                    <div className="md:ms-4 md:mt-0 mt-6">
                                        <h5 className="text-xl font-semibold">Back-End Developer</h5>
                                        <div className="mt-2">
                                            <span className="text-slate-400 font-medium me-2 inline-block"><i className="uil uil-building text-[18px] text-emerald-600 me-1"></i> Lenovo pvt. ltd.</span>
                                            <span className="text-slate-400 font-medium me-2 inline-block"><i className="uil uil-map-marker text-[18px] text-emerald-600 me-1"></i> Beijing, China</span>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="text-lg font-semibold mt-6">Job Description:</h5>

                                <p className="text-slate-600 mt-4">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                                <p className="text-slate-600 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                                <p className="text-slate-600 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>

                                <div className="mt-5">
                                    <button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">Apply</button>
                                </div>
                            </div>

                            <div className="lg:col-span-4 md:col-span-6">
                                <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                    <div className="p-6">
                                        <h5 className="text-lg font-semibold">Job Information</h5>
                                    </div>
                                    <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                                        <ul className="list-none">
                                            <li className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Employee Type:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">Full Time</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin h-5 w-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Location:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">Beijing, China</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor h-5 w-5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Job Type:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">Back-end Developer</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase h-5 w-5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Experience:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">2+ years</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book h-5 w-5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Qualifications:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign h-5 w-5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Salary:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">$4000 - $4500</span>
                                                </div>
                                            </li>

                                            <li className="flex items-center mt-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock h-5 w-5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>

                                                <div className="ms-4">
                                                    <p className="font-medium">Date posted:</p>
                                                    <span className="text-emerald-600 font-medium text-sm">28th Feb, 2023</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
        </div>
    )
}

export default JobDetailsPage