import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLazyWithFilterJobsQuery } from "../../../features/user/get/filterJobsApiSlice";
import {
  selectCurrentUserJobsData,
  setUserJobsData,
} from "../../../features/user/userJobsSlice";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../ui/pagination";

const FilterPagination = () => {
  const [searchParams] = useSearchParams();
  const paramsTitle = searchParams.get("search") || "";
  const paramsLocation = searchParams.get("location") || "";
  const paramsworkplaceType = searchParams.get("workplaceType") || "";
  const paramsJobType = searchParams.get("jobTypes") || "";
  const paramsSalary = searchParams.get("minSalary") || "";
  const paramsExp = searchParams.get("minExprience") || "";

  const { page, limit, total } = useSelector(selectCurrentUserJobsData);
  console.log(total, limit);

  const totalPages = Math.ceil(total / 6);
  const [trigger, { data }] = useLazyWithFilterJobsQuery();
  const dispatch = useDispatch();

  const onPageChange = (pageNo: number) => {
    trigger({
      title: paramsTitle,
      value: paramsLocation,
      workplaceType: paramsworkplaceType,
      jobType: paramsJobType,
      salary: paramsSalary,
      exp: paramsExp,
      page: pageNo,
    });
  };

  useEffect(() => {
    dispatch(setUserJobsData(data));
  }, [data]);

  if (totalPages === 1) {
    return "";
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <Pagination>
        <PaginationContent>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={index}
              onClick={() => onPageChange(index + 1)}
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

export default FilterPagination;
