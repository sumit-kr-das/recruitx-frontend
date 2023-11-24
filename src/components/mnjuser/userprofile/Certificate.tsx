import { MdModeEdit } from "react-icons/md";
import { convertDate } from "../../../pages/company/MyJobs";

const Certificate = ({item}) => {
    return (
        <>
            <div className="p-5">
                <div className='flex'>
                    <p className='text-md font-bold'>{item?.title}</p>
                    <MdModeEdit className="text-xl ml-1 text-cyan-500 cursor-pointer" />
                </div>
                <p className='text-base leading-7 text-gray-600'>{item?.source}</p>
                <p className='text-sm text-gray-600'>{item?.description}</p>
                <p>{convertDate(item?.startDate)} | {convertDate(item?.endDate)}</p>
            </div>
        </>
    )
}

export default Certificate