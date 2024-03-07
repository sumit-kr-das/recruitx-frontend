import { useState } from 'react'
import UpdateUserEducation from '../userEducation/UpateUserEducation'
import { Pen, Trash2 } from 'lucide-react'
import { TUserCareer } from '../../../../@types/user/TUserCareer'

const ListCarrer = ({ item }: { item: TUserCareer }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    return (
        <>


            {/* <UpdateUserEducation
                data={item}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            /> */}
        </>

    )
}

export default ListCarrer