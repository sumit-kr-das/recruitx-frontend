import { MdModeEdit } from 'react-icons/md'

const Project = ({ item }) => {
    return (
        <>
            <div className="p-5">
                <div className='flex'>
                    <p className='text-md font-bold'>{item?.name}</p>
                    <MdModeEdit className="text-xl ml-1 text-cyan-500 cursor-pointer" />
                </div>
                <p className='text-sm text-gray-600'>{item?.associate}</p>
                <p className='text-base leading-7 text-gray-600'>{item?.startDate}  - {item.endDate ? item.endDate : "now"}</p>
                <p>{item?.description}</p>
                <div className='flex items-center gap-2 mt-1 flex-wrap'>
                    {
                        item.skills.map((l) => (
                            <>
                                <p className="text-sm font-semibold bg-slate-200 py-1 px-2 rounded-xl">
                                    {l}
                                </p>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default Project