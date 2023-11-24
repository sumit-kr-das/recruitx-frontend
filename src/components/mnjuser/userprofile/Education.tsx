import { MdModeEdit } from "react-icons/md";

const Education = ({edu}) => {
    return (
        <>
            <div className="p-5">
                <div className='flex'>
                    <p className='text-md font-bold'>{edu?.degree}</p>
                    <MdModeEdit className="text-xl ml-1 text-cyan-500 cursor-pointer" />
                </div>
                <p className='text-base leading-7 text-gray-600'>{edu?.college}</p>
                <p className='text-sm text-gray-600'>{edu?.duration.admissionYear}-{edu?.duration.passYear} | {edu?.marks}%</p>
            </div>
        </>
    )
}

export default Education