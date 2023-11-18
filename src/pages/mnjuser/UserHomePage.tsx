import React from 'react'

import HomeFeed from '../../components/mnjuser/HomeFeed'
import UserProfile from '../../components/mnjuser/UserProfile'
import UserNotices from '../../components/mnjuser/UserNotices'

const UserHomePage = () => {
  return (
    <main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
    <aside className="bg-white border rounded-md w-[240px] h-fit mt-24">
        <UserProfile />
    </aside>
    <section className="flex-1 h-fit mt-24">
        <HomeFeed />
    </section>
    <aside className="w-[240px] mt-24">
        <UserNotices />
    </aside>
</main>
  )
}

export default UserHomePage
