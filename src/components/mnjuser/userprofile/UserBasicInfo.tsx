import React from 'react'
import { MdModeEdit } from "react-icons/md";
const UserBasicInfo = () => {
    return (
        <>
            <section className='bg-white border rounded-md w-full mt-5 h-fit justify-between'>
                <div className='flex'>
                    <h2 className='text-3xl font-bold p-5'>User Basic Information</h2>

                    <MdModeEdit className="text-xl ml-1 text-cyan-500 mt-7 cursor-pointer" />
                </div>
                <p className='text-md font-bold ml-5'>Full Stack Web Developer | Vue js, Node js | Ex Software Engineer at Wiseboxs Technologies</p>
                {/* <h2 className='text-3xl font-bold p-5'>User Basic Information</h2> */}
                <div className='mt-5 flex justify-center p-5'>
                    <div className='w-1/2'>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Date of Birth</p>
                            <p className='text-md font-bold'>16/12/2001</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Age</p>
                            <p className='text-md font-bold'>21 Years</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Address</p>
                            <p className='text-md font-bold'>Puratan Chawk, Burdwan , Burdwan, 713102</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Language</p>
                            <div className='flex items-center gap-2 mt-1 flex-wrap'>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    Bengali
                                </p>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                   English
                                </p>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    Hindi
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Objective</p>
                            <p className='text-md font-bold'>hfjhf jdbfhf f jf j f fe f</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Gender</p>
                            <p className='text-md font-bold'>Male</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Skills</p>
                            {/* <p className='text-md font-bold'>Bengali, Hindi, English</p> */}
                            <div className='flex items-center gap-2 mt-1 flex-wrap'>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    html
                                </p>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    html
                                </p>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    html
                                </p>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    html
                                </p>
                            </div>

                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Maximum Qualification</p>
                            <p className='text-md font-bold'>Post Graduate</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserBasicInfo