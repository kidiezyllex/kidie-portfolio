import { Skeleton } from "@/components/ui/skeleton"

export default function IntroductionSkeleton() {
    return (
        <div className="relative pb-4 z-50 flex h-full w-full flex-col items-end justify-end gap-2 pl-11 sm:items-start sm:gap-4">
            <div className="w-[90%]">
                {/* Title skeleton */}
                <Skeleton className="h-8 w-96 mb-6 sm:h-12" />
                <div className="grid w-[100%] grid-cols-2 rounded-tr-md rounded-bl-md">
                    {/* Block 1 */}
                    <div className="flex h-36 w-full items-center justify-center relative">
                        <Skeleton className="h-full w-full" />
                    </div>

                    {/* Block 2 */}
                    <div className="w-full flex h-36 flex-col items-center justify-center gap-1 p-4">
                        {/* Social buttons skeleton */}
                        <div className="flex gap-2 sm:mb-4">
                            {[...Array(4)].map((_, i) => (
                                <Skeleton key={i} className="h-10 w-10 rounded-full" />
                            ))}
                        </div>
                        {/* Action buttons skeleton */}
                        <div className="flex w-full items-center justify-center gap-4">
                            <Skeleton className="h-9 w-28" />
                            <Skeleton className="h-9 w-28" />
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="h-36 flex flex-col items-center justify-center gap-3 p-2">
                        <Skeleton className="h-8 w-48" />
                        <div className="w-full rounded-md p-2 space-y-2">
                            <div className="flex items-center">
                                <Skeleton className="w-6 h-6 mr-3 rounded-full" />
                                <Skeleton className="h-6 w-36" />
                            </div>
                            <div className="flex items-center">
                                <Skeleton className="w-6 h-6 mr-3 rounded-full" />
                                <Skeleton className="h-6 w-28" />
                            </div>
                        </div>
                    </div>

                    {/* Block 4 */}
                    <div className="w-full flex h-36 items-center justify-center overflow-hidden">
                        <Skeleton className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}