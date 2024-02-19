import { Search } from "lucide-react";
import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import { Button } from "../../ui/button";
import Filter from "./_components/Filter";
import FilteredJobs from "./_components/FilteredJobs";
import SearchFilter from "./_components/SearchFilter";

const SearchPage = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <TopHeader />
      <Container className="pt-28 relative">
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 gap-x-8">
          <Filter />
          <div>
            <SearchFilter />
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
