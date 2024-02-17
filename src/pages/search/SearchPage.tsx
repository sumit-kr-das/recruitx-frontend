import React from "react";
import TopHeader from "../../components/navigation/TopHeader";
import Search from "../../components/mnjuser/userHome/search/Search";
import Container from "../../layout/Container";
import ApplyFilter from "./_components/ApplyFilter";
import FilteredJobs from "./_components/FilteredJobs";
import FilterJobDetails from "./_components/FilterJobDetails";

const SearchPage = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen">
      <TopHeader />
      <Container className="pt-24">
        <Search />
        <div className="relative mt-8 flex justify-between h-fit">
          <div className="w-[20%] h-screen absolute top-0 left-0 bg-white p-4 rounded-lg border shadow ">
            <ApplyFilter />
          </div>
          <div className="border border-green-200 bg-yellow-100 w-[40%] h-fit">
            <FilteredJobs />
          </div>
          <div className="border border-blue-200 bg-orange-100 w-[40%] h-fit">
            <FilterJobDetails />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
