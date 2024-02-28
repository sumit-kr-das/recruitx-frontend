import { cn } from "../../lib/utils.ts";
import { Skeleton } from "../../ui/skeleton";
type PropType = {
  className?: string;
};

export function BaseSkeletonCard({ className }: PropType) {
  return (
    <div className={"flex flex-col space-y-3"}>
      <Skeleton className={cn("w-[320px] h-[320px] rounded-xl", className)} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
