function SkeletonCard() {
  return (
    <div className="bg-aletheia-card rounded-aletheia-lg border border-zinc-200/80 shadow-card overflow-hidden animate-pulse">
      <div className="aspect-[4/5] bg-aletheia-surfaceAlt" />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-aletheia-surfaceAlt rounded w-1/4" />
        <div className="h-4 bg-aletheia-surfaceAlt rounded w-full" />
        <div className="h-4 bg-aletheia-surfaceAlt rounded w-4/5" />
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-3 w-3 bg-aletheia-surfaceAlt rounded" />
          ))}
        </div>
        <div className="h-6 bg-aletheia-surfaceAlt rounded w-1/3 mt-2" />
      </div>
    </div>
  );
}

export function LoadingSkeleton({ count = 8 }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>
          <SkeletonCard />
        </li>
      ))}
    </ul>
  );
}
