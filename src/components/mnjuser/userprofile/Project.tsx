import React from 'react'
import { MdModeEdit } from 'react-icons/md'

const Project = () => {
    return (
        <>
            <div className="p-5">
                <div className='flex'>
                    <p className='text-md font-bold'>Ecommerce Food Franchise System</p>
                    <MdModeEdit className="text-xl ml-1 text-cyan-500 cursor-pointer" />
                </div>
                <p className='text-sm text-gray-600'>Devstack Solution (Offsite)</p>
                <p className='text-base leading-7 text-gray-600'>Nov 2021 to Apr 2022 (Part Time)</p>
                <p>Food Franchise company ecommerce website and franchise system. This website has following features : 1. Full Ecommerce 2. Stock Management System 3. Franchise System 4. Earn and Refer System 5. Barcode Billing</p>
            </div>
        </>
    )
}

export default Project