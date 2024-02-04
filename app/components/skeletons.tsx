// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent dark:before:from-transparent dark:before:via-neutral-700/70 dark:before:to-transparent";

export function TrackSkeleton({index}) {
  return (
    <li className="flex items-center gap-3 mb-4">
      <span className="text-3xl text-neutral-600 font-bold inline-block w-5">
        {index + 1}
      </span>
      <div className="flex justify-center">
        <div
          className={`w-[100px] h-[100px] bg-neutral-700/60 relative ${shimmer} overflow-hidden`}
        />
        <div className="ml-3">
          <p className={`w-24 h-4 bg-neutral-700/60 mb-3 relative ${shimmer} overflow-hidden`} />
          <p className={`w-32 h-4 bg-neutral-700/60 relative ${shimmer} overflow-hidden`} />
        </div>
      </div>
    </li>
  );}

export function TopTracksSkeleton() {
    return (
      <>
        {
          Array.from(Array(7).keys()).map((_, index) => (
            <TrackSkeleton key={index} index={index} />
          ))
        }
      </>
    );
}