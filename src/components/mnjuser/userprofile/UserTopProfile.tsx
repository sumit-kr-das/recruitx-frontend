import React from 'react'
import { MdModeEdit } from 'react-icons/md'
import { IoLocationSharp, IoBagSharp  } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const UserTopProfile = () => {
  return (
    <>
    <section className='bg-white border rounded-md w-full h-fit lg:flex justify-between'>
                    <div className='p-4 lg:w-1/4'>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="user_default"
                            width={200}
                            className="rounded-full object-cover border"
                        />
                    </div>
                    <div className='p-4 lg:w-1/2'>
                        <h2 className='text-3xl font-bold'>Sk Shoyeb</h2>
                        <p>Profile Last Updated Today</p>
                        <hr className='mt-5'/>
                        <div className='flex w-full justify-between'>
                            <div>
                                <div className='flex'>
                                <IoLocationSharp className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>Kolkata, INDIA</p>
                                </div>
                                <div className='flex'>
                                <IoBagSharp className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>Fresher</p>

                                </div>
                                <div className='flex'>
                                <LiaBirthdayCakeSolid className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>Add Date of Birth</p>

                                </div>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                <FaPhoneAlt className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>9749220398</p>

                                </div>
                                <div className='flex'>
                                <IoIosMail className="text-xl mt-1 mr-1 text-cyan-500 cursor-pointer" /> 
                                <p className='mt-1'>shoyebjio3398@gmail.com</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default UserTopProfile