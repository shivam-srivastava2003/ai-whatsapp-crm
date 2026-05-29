export default function LeadsLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header and Toolbar Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-2">
          <div className="h-5 w-36 bg-slate-200 rounded" />
          <div className="h-3.5 w-48 bg-slate-100 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-100" />
          <div className="w-8 h-8 rounded-lg bg-slate-100" />
          <div className="h-9 w-24 bg-slate-200 rounded-xl" />
        </div>
      </div>

      {/* Summary Cards Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-3 shadow-card">
            <div className="w-9 h-9 rounded-xl bg-slate-100" />
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="h-4 w-12 bg-slate-200 rounded" />
              <div className="h-3 w-20 bg-slate-100 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar Search / View Filters Skeleton */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="h-10 bg-white border border-slate-100 rounded-xl flex-1 max-w-md shadow-card" />
        <div className="flex gap-2 overflow-x-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-slate-100 rounded-xl flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Kanban Board Columns Skeleton */}
      <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
        {[...Array(6)].map((_, colIdx) => (
          <div key={colIdx} className="w-72 flex-shrink-0 bg-slate-50/50 border border-slate-100/60 rounded-2xl p-3 flex flex-col gap-3 min-h-[480px]">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="h-3.5 w-24 bg-slate-200 rounded" />
              </div>
              <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-400 font-bold" />
            </div>

            {/* Column Cards */}
            <div className="flex flex-col gap-3">
              {[...Array(colIdx % 2 === 0 ? 2 : 1)].map((_, cardIdx) => (
                <div key={cardIdx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-card space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-slate-200" />
                      <div className="h-3 w-16 bg-slate-200 rounded" />
                    </div>
                    <div className="h-4 w-10 bg-slate-100 rounded-full" />
                  </div>
                  <div className="h-3.5 w-32 bg-slate-200 rounded" />
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="h-2 w-12 bg-slate-100 rounded" />
                      <div className="h-2 w-8 bg-slate-100 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded bg-slate-100" />
                      <div className="w-4 h-4 rounded bg-slate-100" />
                    </div>
                    <div className="h-3.5 w-16 bg-slate-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
