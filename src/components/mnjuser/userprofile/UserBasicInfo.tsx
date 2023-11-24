// import { useState, useEffect } from 'react'
import { MdModeEdit } from "react-icons/md";
import { useUserInfoDataQuery } from '../../../features/user/getUserInfoDataApiSlice';
import UserBasicInfoForm from './UserBasicInfoForm';
import { convertDate } from "../../../pages/company/MyJobs";
const UserBasicInfo = () => {

    const { data } = useUserInfoDataQuery();

    console.log(data);
    // setInfo(data);

    // useEffect(() => {
    //   const {data} = useUserInfoDataQuery();

    //   console.log(data);
    //   setInfo(data);
    // }, [])

    return (
        <>
            <section className='bg-white border rounded-md w-full mt-5 h-fit justify-between'>
                {
                    data ? (<>
                        <div className='flex'>
                            <h2 className='text-3xl font-bold p-5'>User Basic Information</h2>

                            <MdModeEdit className="text-xl ml-1 text-cyan-500 mt-7 cursor-pointer" />
                        </div>
                        <p className='text-md font-bold ml-5'>{data[0]?.bio}</p>
                        {/* <h2 className='text-3xl font-bold p-5'>User Basic Information</h2> */}
                        <div className='mt-5 flex justify-center p-5'>
                            <div className='w-1/2'>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Date of Birth</p>
                                    <p className='text-md font-bold'>{convertDate(data[0]?.dateOfBirth)}</p>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Age</p>
                                    <p className='text-md font-bold'>{data[0]?.age}</p>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Address</p>
                                    <p className='text-md font-bold'>{data[0]?.address}</p>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Language</p>
                                    <div className='flex items-center gap-2 mt-1 flex-wrap'>
                                        {
                                            data[0].language.map((l) => (
                                                <>
                                                    <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                                        {l}
                                                    </p>
                                                </>
                                            ))
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Objective</p>
                                    <p className='text-md font-bold'>{data[0]?.objective}</p>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Gender</p>
                                    <p className='text-md font-bold'>{data[0]?.gender}</p>
                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Skills</p>

                                    <div className='flex items-center gap-2 mt-1 flex-wrap'>
                                        {
                                            data[0].skills.map((skill) => (
                                                <>
                                                    <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                                        {skill}
                                                    </p>
                                                </>
                                            ))
                                        }
                                    
                                    </div>

                                </div>
                                <div className='w-full mt-5'>
                                    <p className='text-base leading-7 text-gray-600'>Maximum Qualification</p>
                                    <p className='text-md font-bold'>{data[0].maxQualification}</p>
                                </div>
                            </div>
                        </div>
                    </>) : (<>
                        <div className='p-5'>
                            <UserBasicInfoForm />

                        </div>
                    </>)
                }

            </section>
        </>
    )
}

export default UserBasicInfo