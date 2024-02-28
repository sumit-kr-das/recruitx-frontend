import { useEffect, useState } from 'react'
import { useViewJobChartQuery } from '../../features/company/get/viewJobChartApiSlice'
import { Card } from '../../ui/card';
import Chart from "react-apexcharts";
import Loader from '../loader/Loader';
import { useSelector } from 'react-redux';
import { selectCurrentRole } from '../../features/auth/authSlice';

type JobData = {
    series: [
        {
            name: string,
            data: number[]
        }
    ],
    options: {
        chart: {
            id: string
        },
        xaxis: {
            categories: string[]
        }
    }
}
const JobChart = () => {
    const role = useSelector(selectCurrentRole);
    const { data, isLoading, isSuccess } = useViewJobChartQuery({ role: role });
    const [option, setOption] = useState<JobData | null>();

    useEffect(() => {
        if (data) {
            setOption(JSON.parse(JSON.stringify(data)));
        }
        console.log(data, "data");
    }, [data, isLoading, isSuccess]);
    if (!data && isLoading && !isSuccess) return (<Loader />)


    console.log(option, 'options data');
    return (
        <Card className="mt-5 w-full p-5">
            <h2 className="font-bold text-lg mb-5">Job Posted Per Date</h2>
            {
                option && Object.keys(option?.series).length > 0 ? (<Chart
                    options={option?.options}
                    series={option?.series}
                    type="bar"
                    height={350}
                    className="w-full"
                />) : (<>No Data</>)
            }
            {/* <ReactApexChart
                options={data?.options}
                series={data?.series}
                type="area"
                height={350}
            /> */}
        </Card>
    )
}

export default JobChart