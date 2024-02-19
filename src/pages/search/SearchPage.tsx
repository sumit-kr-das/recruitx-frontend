import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
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
            <div className="mt-8 grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {[...Array(4)].map((_, index) => (
                <FilteredJobs key={index} />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SearchPage;
