import { Skeleton } from "../../ui/skeleton";

export function PublicStatsSkeletion() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <Skeleton className="w-20 h-20 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
}
