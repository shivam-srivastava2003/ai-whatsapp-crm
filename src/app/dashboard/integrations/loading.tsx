export default function IntegrationsLoading() {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-2">
          <div className="h-5 w-32 bg-slate-200 rounded" />
          <div className="h-3.5 w-48 bg-slate-100 rounded" />
        </div>
        <div className="h-9 w-32 bg-slate-200 rounded-xl" />
      </div>

      {/* Stats bar Skeleton */}
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

      {/* Search + Filter tabs Skeleton */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="h-10 bg-white border border-slate-100 rounded-xl flex-1 max-w-sm shadow-card" />
        <div className="flex gap-2 overflow-x-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-20 bg-slate-100 rounded-xl flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Most Popular Grid Skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-28 bg-slate-200 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100" />
              <div className="h-3.5 w-24 bg-slate-200 rounded" />
              <div className="h-2.5 w-full bg-slate-100 rounded" />
              <div className="h-9 w-full bg-slate-200 rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* All Integrations Grid Skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-32 bg-slate-200 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-card space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-100 flex-shrink-0" />
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="h-3.5 w-20 bg-slate-200 rounded" />
                  <div className="h-4 w-14 bg-slate-100 rounded-full" />
                </div>
              </div>
              <div className="h-3.5 w-full bg-slate-100 rounded" />
              <div className="flex items-center gap-2">
                <div className="flex-1 h-9 bg-slate-100 rounded-xl" />
                <div className="w-8 h-9 bg-slate-50 border border-slate-100 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
