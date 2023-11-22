import React from "react";

import HomeFeed from "../../components/mnjuser/HomeFeed";
import UserProfile from "../../components/mnjuser/UserProfile";
import UserNotices from "../../components/mnjuser/UserNotices";
import Container from "../../layout/Container";
import TopHeader from "../../components/navigation/TopHeader";
import Footer from "../../components/footer/Footer";

const UserHomePage = () => {
	return (
		<>
			<TopHeader />
			<Container className="flex justify-between">
				<section className="bg-white border rounded-md w-[240px] h-fit mt-24">
					<UserProfile />
				</section>
				<section className="flex-1 h-fit mt-24">
					<HomeFeed />
				</section>
				<section className="w-[240px] mt-24">
					<UserNotices />
				</section>
			</Container>
			<Footer />
		</>
	);
};

export default UserHomePage;
