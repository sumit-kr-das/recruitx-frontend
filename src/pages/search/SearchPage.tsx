import { Search } from "lucide-react";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import { Button } from "../../ui/button";
import Filter from "./_components/Filter";
import FilteredJobs from "./_components/FilteredJobs";

const SearchPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-28 relative">
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 gap-x-8">
          <Filter />
          <div>
            <div className="relative p-8 rounded-lg border shadow bg-gradient-to-r from-cyan-500 to-blue-500">
              <h1 className="text-4xl font-bold text-white">
                Find your dream job here!
              </h1>
              <p className="text-white text-lg my-2">
                Explore the latest job openings and apply for the best job
                opportunities available today!
              </p>
              <div className="relative w-full flex items-center p-2 rounded-lg justify-between border shadow bg-white">
                <Search className="block absolute text-gray-400" />
                <input
                  className="block w-full rounded-md border-0 pl-8 py-1.5 focus:outline-none focus:ring-transparent"
                  type="text"
                  placeholder="Search Job"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600">
                  Search
                </Button>
              </div>
            </div>
            <div className="mt-8 grid gap-x-4 gap-y-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {[...Array(4)].map((_, index) => (
                <FilteredJobs key={index} />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Button>Load more...</Button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchPage;
