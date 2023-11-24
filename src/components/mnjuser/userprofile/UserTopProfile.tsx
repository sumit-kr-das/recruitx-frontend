import React from 'react'
import { MdModeEdit } from 'react-icons/md'
import { IoLocationSharp, IoBagSharp  } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useUserInfoDataQuery } from '../../../features/user/getUserInfoDataApiSlice';
const UserTopProfile = () => {
    const {data} = useUserInfoDataQuery();

  return (
    <>
    <section className='bg-white border rounded-md w-full h-fit lg:flex justify-between'>
                    <div className='p-4 lg:w-1/4'>
                        <img
                            src={`http://localhost:8000/${data[0]?.photo}`}
                            alt="user_default"
                            width={200}
                            className="rounded-full object-cover border"
                        />
                    </div>
                    <div className='p-4 lg:w-1/2'>
                        <h2 className='text-3xl font-bold'>${data[0]?.name}</h2>
                        <p>Profile Last Updated Today</p>
                        <hr className='mt-5'/>
                        <div className='flex w-full justify-between'>
                            <div>
                                <div className='flex'>
                                <IoLocationSharp className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>
                                    {data[0]?.address}
                                </p>
                                </div>
                                <div className='flex'>
                                <IoBagSharp className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>{data[0]?.status}</p>

                                </div>
                                <div className='flex'>
                                <LiaBirthdayCakeSolid className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>{data[0]?.dateOfBirth}</p>

                                </div>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                <FaPhoneAlt className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>{data[0]?.phone}</p>

                                </div>
                                <div className='flex'>
                                <IoIosMail className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>{data[0]?.email}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default UserTopProfile