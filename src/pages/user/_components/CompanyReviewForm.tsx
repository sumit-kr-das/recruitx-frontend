import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import { Star } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSetReviewMutation } from "../../../features/user/post/setReviewApiSlice";
import { useToast } from "../../../ui/use-toast";
import { TApiError } from "../../../@types/TApiError";

const CompanyReviewForm = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState<undefined | number>(undefined);
  const [desc, setDesc] = useState("");
  const [setReview, { isLoading }] = useSetReviewMutation();
  const stars = Array(5).fill(0);
  const { companyId } = useParams();
  const { toast } = useToast();
  const submitRating = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      companyId: companyId,
      description: desc,
      rates: currentValue,
    };
    console.log(data);
    try {
      await setReview({ ...data }).unwrap();
      setCurrentValue(0);
      setDesc("");
      toast({
        description: "Your review submitted successfully",
      });
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError.data.message,
      });
    }
  };
  return (
    <div className="rounded-lg bg-white border p-5">
      <form onSubmit={submitRating}>
        <p className="text-xl font-semibold cursor-pointer transition-all hover:text-black">
          Add Review
        </p>
        <div className="mt-3 flex">
          <p className="text-md font-bold flex-1">Ratings: </p>

          {stars.map((_, index) => (
            <Star
              size={20}
              key={index}
              color="grey"
              onClick={() => setCurrentValue(index + 1)}
              onMouseOver={() => setHoverValue(index + 1)}
              onMouseOut={() => setHoverValue(undefined)}
              className="cursor-pointer"
              fill={(hoverValue || currentValue) > index ? "orange" : "white"}
            />
          ))}
        </div>
        <Textarea
          className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
          placeholder="Add your comments here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></Textarea>

        <div className="flex justify-between mt-5">
          <p className="text-sm  ">Enter atleast 15 characters</p>
          <Button type="submit" className="" disabled={isLoading}>
            Submit review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyReviewForm;
