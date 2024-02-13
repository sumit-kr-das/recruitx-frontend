import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '../../ui/alert'
import { ShieldX } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCurrentRole, selectCurrentStatus } from '../../features/auth/authSlice';

const ApproveAlert = () => {
    const role = useSelector(selectCurrentRole);
    const status = useSelector(selectCurrentStatus);
    return (
        <>
            {
                role === "company" && status !== "approved" && (<>
                    <Alert variant={'destructive'}>
                        <ShieldX className="mr-3" />
                        <AlertTitle>You Are Not Approved By Admin</AlertTitle>
                        <AlertDescription className="">
                            You cannot access some pages untill you get approved from the admin. Kindly wait for approval.
                        </AlertDescription>
                    </Alert>
                </>)
            }

        </>
    )
}

export default ApproveAlert