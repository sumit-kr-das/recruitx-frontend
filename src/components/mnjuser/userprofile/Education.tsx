import { MdModeEdit } from "react-icons/md";

const Education = () => {
    return (
        <>
            <div className="p-5">
                <div className='flex'>
                    <p className='text-md font-bold'>MCA Computers</p>
                    <MdModeEdit className="text-xl ml-1 text-cyan-500 cursor-pointer" />
                </div>
                <p className='text-base leading-7 text-gray-600'>Dr B C Roy Engineering College, Durgapur</p>
                <p className='text-sm text-gray-600'>2022-2024 | 89%</p>
            </div>
        </>
    )
}

export default Education