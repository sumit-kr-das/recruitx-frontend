import { MdModeEdit } from "react-icons/md";
import Certificate from "./Certificate";

const UserCertifications = () => {
    return (
        <>
            <section className='bg-white border rounded-md w-full mt-5 h-fit justify-between'>
                <div className='flex justify-between'>
                    <div className='w-1/2 flex'>
                        <h2 className='text-3xl font-bold p-5'>Certificates</h2>
                        <MdModeEdit className="text-xl ml-1 text-cyan-500 mt-7 cursor-pointer" />
                    </div>
                    <div className='w-1/2'>
                        <p className='text-right p-5'><a href='#'>Add Education</a></p>
                    </div>
                </div>
                <Certificate/>
                <Certificate/>
            </section>
        </>
    )
}

export default UserCertifications