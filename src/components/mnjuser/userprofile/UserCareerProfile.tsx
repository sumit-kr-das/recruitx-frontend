import { MdModeEdit } from 'react-icons/md'
import { useUserCareerDataQuery } from '../../../features/user/getCareerDataApiSlice'

const UserCareerProfile = () => {
    const {data} = useUserCareerDataQuery();

    return (
        <>
            <section className='bg-white border rounded-md w-full mt-5 h-fit justify-between'>
                <div className='flex'>
                    <h2 className='text-3xl font-bold p-5'>User Career Profile</h2>

                    <MdModeEdit className="text-xl ml-1 text-cyan-500 mt-7 cursor-pointer" />
                </div>
                <div className='mt-5 flex justify-center p-5'>
                    <div className='w-1/2'>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Industry</p>
                            <p className='text-md font-bold'>{data?.industry}</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>role</p>
                            <p className='text-md font-bold'>{data?.role}</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Job Role</p>
                            <p className='text-md font-bold'>{data?.jobRole}</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Job Type</p>
                            <p className='text-md font-bold'>{data?.jobType}</p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Employment Type</p>
                            <p className='text-md font-bold'>{data?.employmentType}</p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Preferred work location</p>
                            <p className='text-md font-bold'>
                                {
                                    data?.location.map((l)=>(<>
                                      {l}, 
                                    </>))
                                }
                            </p>
                        </div>
                        <div className='w-full mt-5'>
                            <p className='text-base leading-7 text-gray-600'>Expected Salary</p>
                            <p className='text-md font-bold'>₹{data?.expectedSalary}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserCareerProfile