import { Card } from '../../ui/card'
import { Briefcase, Milestone, ShieldOff, Star } from 'lucide-react'
import { useGetDashboardStatsQuery } from '../../features/statics/getDashboardStatsApiSlice'
import Loader from '../loader/Loader'
import { useSelector } from 'react-redux'
import { selectCurrentRole } from '../../features/auth/authSlice'


const DashboardStats = () => {
    const role = useSelector(selectCurrentRole);
    const { data, isLoading, isSuccess } = useGetDashboardStatsQuery({ role });

    if (!data && isLoading) return (<Loader />);
    return (
        <>
            {
                isSuccess && (<>
                    <div className="flex justify-between flex-wrap" >
                        <Card className="flex items-center gap-10 p-8">
                            <div className="bg-green-100 p-5 rounded-full">
                                <Briefcase className="text-green-500" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-right">{data.jobs}</h1>
                                <p className="mt-2 text-slate-500">Posted jobs</p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-10 p-8">
                            <div className="bg-yellow-100 p-5 rounded-full">
                                <Milestone className="text-yellow-500" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-right">{data.activeJobs}</h1>
                                <p className="mt-2 text-slate-500">Active Jobs</p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-10 p-8">
                            <div className="bg-red-100 p-5 rounded-full">
                                <ShieldOff className="text-red-500" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-right">{data.expiredJobs}</h1>
                                <p className="mt-2 text-slate-500">Expired Jobs</p>
                            </div>
                        </Card>
                        <Card className="flex items-center gap-10 p-8">
                            <div className="bg-blue-100 p-5 rounded-full">
                                <Star className="text-blue-500" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-right">{data.totalReviews}</h1>
                                <p className="mt-2 text-slate-500">Total Review</p>
                            </div>
                        </Card>
                    </ div>
                </>)
            }

        </>

    )
}

export default DashboardStats