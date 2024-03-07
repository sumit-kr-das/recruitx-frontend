import { useState } from 'react'
import ViewUserCareer from '../../../components/mnjuser/userProfile/userCareer/ViewUserCareer'
import { useUserCareerDataQuery } from '../../../features/user/get/getCareerDataApiSlice';
import Loader from '../../../components/loader/Loader';
import AddUserCareer from '../../../components/mnjuser/userProfile/userCareer/AddUserCareer';
const UserCareer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data, isLoading, isSuccess } = useUserCareerDataQuery();
    if (isLoading) return <Loader />
    return (
        <>
            {
                isSuccess && data ? (
                    <ViewUserCareer setIsOpen={setIsOpen} />
                ) : (
                    <AddUserCareer />
                )
            }
        </>
    )
}

export default UserCareer