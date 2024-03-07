import { useState } from 'react'
import ViewUserCertificate from '../../../components/mnjuser/userProfile/userCertificate/ViewUserCertificate';
import AddUserCertificate from '../../../components/mnjuser/userProfile/userCertificate/AddUserCertificate';
const UserCertificate = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ViewUserCertificate setIsOpen={setIsOpen} />
            <AddUserCertificate isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default UserCertificate