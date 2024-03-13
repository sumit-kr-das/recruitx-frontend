import { Star } from "lucide-react";
import { useReviewsDataQuery } from "../../../features/user/get/GetReviewApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { convertDate } from "../../company/MyJobs";
import { TReviews } from "../../../@types/publicTypes/TReviews";

const CompanyReviews = () => {
  const { companyId } = useParams();
  const { data, isLoading, isSuccess } = useReviewsDataQuery(companyId);
  const star = Array(5).fill(0);

  if (isLoading && !data) return <Loader />;
  return (
    <>
      {isSuccess && (
        <>
          <div className="flex flex-col gap-3 mt-14">
            {data?.map((item: TReviews, index: number) => (
              <div
                className="flex flex-col gap-4 bg-white border p-4 rounded-lg"
                key={index}
              >
                <div className="flex justify justify-between">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 text-center rounded-full bg-red-500">
                      {item?.userId?.name.charAt(0)}
                    </div>
                    <span className="font-semibold">{item?.userId?.name}</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                    {star?.map((_, index) => (
                      <Star
                        size={20}
                        fill={index < item.rating ? "orange" : "white"}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <p>{item?.description}</p>
                <p className="flex justify-between">
                  {convertDate(item?.createdAt)}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CompanyReviews;
