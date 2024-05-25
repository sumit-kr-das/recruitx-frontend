import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../ui/pagination";
import { SearchCompany } from "../../../features/company/get/searchCompanyApiSlice";
type Props = {
  handelSearch: (page: number) => void;
  data: SearchCompany;
  page: number;
};
const CompanyPegination = ({ handelSearch, data, page }: Props) => {
  const totalPages = Math.ceil(data?.total / data?.limit);
  return (
    <div className="mt-8 flex items-center justify-center">
      <Pagination>
        <PaginationContent>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={index}
              onClick={() => handelSearch(index + 1)}
              className="cursor-pointer"
            >
              <PaginationLink isActive={index + 1 === page}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CompanyPegination;
