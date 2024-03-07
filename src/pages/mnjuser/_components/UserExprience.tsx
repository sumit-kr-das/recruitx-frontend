import { useState } from 'react'
import ViewUserExp from '../../../components/mnjuser/userProfile/userExprience/ViewUserExp';
import AddUserExp from '../../../components/mnjuser/userProfile/userExprience/AddUserExp';
const UserExprience = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ViewUserExp setIsOpen={setIsOpen} />
            <AddUserExp isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}

export default UserExprience