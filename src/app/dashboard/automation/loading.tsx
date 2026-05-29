export default function AutomationLoading() {
  return (
    <div className="space-y-4 sm:space-y-5 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-2">
          <div className="h-5 w-40 bg-slate-200 rounded" />
          <div className="h-3.5 w-56 bg-slate-100 rounded" />
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
          <div className="flex-1 sm:flex-none h-9 w-24 bg-slate-100 rounded-xl" />
          <div className="flex-1 sm:flex-none h-9 w-24 bg-slate-200 rounded-xl" />
        </div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-card">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex-shrink-0" />
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="h-4 w-12 bg-slate-200 rounded" />
              <div className="h-2.5 w-20 bg-slate-100 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Main split grid */}
      <div className="grid lg:grid-cols-5 gap-5">
        {/* Left side list skeleton */}
        <div className="lg:col-span-2 space-y-3">
          <div className="h-4 w-32 bg-slate-200 rounded px-1" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-card space-y-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="h-3.5 w-36 bg-slate-200 rounded" />
                  <div className="h-2.5 w-44 bg-slate-100 rounded" />
                </div>
                <div className="w-8 h-4 bg-slate-100 rounded-full flex-shrink-0" />
              </div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="w-6 h-6 rounded bg-slate-50 border border-slate-100" />
                ))}
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-50">
                <div className="h-3 w-16 bg-slate-100 rounded" />
                <div className="h-3 w-20 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Right side builder skeleton */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-slate-100 rounded-2xl shadow-card overflow-hidden">
            {/* Canvas Header */}
            <div className="px-4 sm:px-5 py-3.5 border-b border-slate-100 bg-slate-50/60 flex justify-between items-center">
              <div className="space-y-1.5">
                <div className="h-3.5 w-36 bg-slate-200 rounded" />
                <div className="h-2.5 w-24 bg-slate-100 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="h-5 w-14 bg-slate-100 rounded-full" />
                <div className="w-7 h-7 bg-slate-100 rounded-lg" />
              </div>
            </div>

            {/* Canvas step flowchart blocks */}
            <div className="p-5 flex flex-col items-center space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-full flex flex-col items-center">
                  <div className="w-full max-w-sm border border-slate-100 rounded-2xl p-4 bg-slate-50/20 flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex-shrink-0" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 w-16 bg-slate-100 rounded" />
                      <div className="h-3.5 w-32 bg-slate-200 rounded" />
                      <div className="h-2.5 w-44 bg-slate-100 rounded" />
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex flex-col items-center gap-0.5 py-2">
                      <div className="w-px h-4 bg-slate-200" />
                      <div className="w-2.5 h-2.5 border-r border-b border-slate-300 rotate-45" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
