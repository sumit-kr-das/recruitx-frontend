import React from 'react'
import TopHeader from '../../components/navigation/TopHeader'
import Container from '../../layout/Container'
import UserTopProfile from '../../components/mnjuser/userprofile/UserTopProfile';
import { MdModeEdit } from "react-icons/md";
import UserBasicInfo from '../../components/mnjuser/userprofile/UserBasicInfo';
import UserEducations from '../../components/mnjuser/userprofile/UserEducations';
import UserCertifications from '../../components/mnjuser/userprofile/UserCertifications';
import UserProjects from '../../components/mnjuser/userprofile/UserProjects';
import UserCareerProfile from '../../components/mnjuser/userprofile/UserCareerProfile';


const UserProfilePage = () => {
    return (
        <>
            <TopHeader />
            <Container className='pt-20'>
                <UserTopProfile />
                <UserBasicInfo />
                <UserEducations/>
                <UserCertifications/>
                <UserProjects/>
                <UserCareerProfile/>
            </Container>
        </>
    )
}

export default UserProfilePage