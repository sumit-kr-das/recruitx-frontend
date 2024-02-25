import TopHeader from '../../components/navigation/TopHeader'
import Container from '../../layout/Container'
import { Search } from 'lucide-react'
import { Button } from '../../ui/button'
import { useEffect, useState } from 'react'
import { useLazySearchCompanyQuery } from '../../features/company/get/searchCompanyApiSlice'
import CompanyContainer from '../../components/user/CompanyContainer'
import Loader from '../../components/loader/Loader'
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '../../ui/pagination'
import CompanyPegination from './_components/CompanyPegination'

const CompanySearch = () => {
    const [search, setSearch] = useState<string>("");
    const [trigger, { data, isLoading, isSuccess }] = useLazySearchCompanyQuery();
    const [page, setPage] = useState(1);

    const handelSearch = (page: number) => {
        setPage(page);
        trigger({
            search,
            page: page
        })
    }

    useEffect(() => {
        trigger({
            search: "",
            page: 1
        })
    }, []);

    if (isLoading && !data) return (<Loader />)

    return (
        <div className='bg-[#FAFAFA]'>
            <TopHeader />
            <Container className='pt-28 relative'>
                <div className='relative p-8 rounded-lg border shadow bg-gradient-to-r from-cyan-500 to-blue-500'>
                    <h1 className='text-4xl font-bold text-white'>
                        Find your dream company here!
                    </h1>
                    <p className='text-white text-lg my-2'>
                        Explore the latest companies and their job openings for the best opportunities available today!
                    </p>
                    <div className='relative w-full flex items-center p-2 rounded-lg justify-between shadow bg-white'>
                        <Search className='block absolute text-gray-400' />
                        <input className='block w-full rounded-md border-0 pl-8 py-1.5 focus:outline-none focus:ring-transparent' type='text' placeholder='Search Company' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button onClick={() => handelSearch(1)} className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600'>
                            Search
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap md:gap-x-5 gap-y-10 mt-4">
                    {
                        isSuccess && data && data.companies.length > 0 && data?.companies?.map((item, index) => (

                            <CompanyContainer data={item} key={index} />
                        ))
                    }

                </div>
                {
                    data && (<CompanyPegination handelSearch={handelSearch} data={data} page={page} setPage={setPage} />
                    )
                }

            </Container>
        </div>
    )
}

export default CompanySearch