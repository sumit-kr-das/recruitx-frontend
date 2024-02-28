import { Skeleton } from "../../ui/skeleton";

export function BaseSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-[320px] h-[320px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
