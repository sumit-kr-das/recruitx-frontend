import Footer from "../../components/footer/Footer";
import TopHeader from "../../components/navigation/TopHeader";
import Container from "../../layout/Container";
import Filter from "./_components/Filter";
import FilteredJobs from "./_components/FilteredJobs";

const SearchPage = () => {
  return (
    <>
      <TopHeader />
      <Container className="pt-20 ">
        <div className="max-h-screen flex flex-col">
          <div className="grid grid-cols-[auto,1fr] flex-grow-1  sticky top-0 overflow-y-auto scrollbar-hidden">
            <Filter />
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] scrollbar-hidden sticky top-0 overflow-y-auto scrollbar-hidden">
              {[...Array(50)].map((_, index) => (
                <FilteredJobs key={index} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
