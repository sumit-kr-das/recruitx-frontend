import { useState } from 'react'
import ViewUserProject from '../../../components/mnjuser/userProfile/userProject/ViewUserProject';
import AddUserProject from '../../../components/mnjuser/userProfile/userProject/AddUserProject';
const UserProject = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ViewUserProject setIsOpen={setIsOpen} />
            <AddUserProject setIsOpen={setIsOpen} isOpen={isOpen} />
        </>

    )
}

export default UserProject