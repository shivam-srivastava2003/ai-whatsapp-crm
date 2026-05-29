export default function AnalyticsLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Header date filter row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-2">
          <div className="h-5 w-40 bg-slate-200 rounded" />
          <div className="h-3.5 w-56 bg-slate-100 rounded" />
        </div>
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 w-12 bg-slate-100 rounded-lg" />
          ))}
        </div>
      </div>

      {/* 6 stats cards row */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-slate-100" />
              <div className="h-4 w-12 bg-slate-50 rounded-full" />
            </div>
            <div className="h-5 w-16 bg-slate-200 rounded" />
            <div className="h-3 w-20 bg-slate-100 rounded" />
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Customer Growth Area Chart */}
        <div className="lg:col-span-2 h-[280px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-28 bg-slate-200 rounded-md" />
              <div className="h-3 w-44 bg-slate-100 rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-3.5 w-16 bg-slate-100 rounded" />
              <div className="h-3.5 w-16 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="flex-1 h-[170px] bg-slate-50 rounded-xl flex items-end justify-between p-4">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="w-[6%] bg-slate-200 rounded-t" style={{ height: `${30 + (idx % 3) * 20}%` }} />
            ))}
          </div>
        </div>

        {/* AI Performance Radar Chart */}
        <div className="h-[280px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded-md" />
            <div className="h-3 w-24 bg-slate-100 rounded" />
          </div>
          <div className="h-[150px] bg-slate-50 rounded-xl flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-[10px] border-slate-100 border-t-slate-200 animate-spin" />
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-50">
            <div className="h-3 w-16 bg-slate-100 rounded" />
            <div className="h-3 w-12 bg-slate-100 rounded ml-auto" />
          </div>
        </div>
      </div>

      {/* Conversion Funnel + Channel */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Conversion Funnel */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded-md" />
            <div className="h-3 w-40 bg-slate-100 rounded" />
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <div className="h-3 w-20 bg-slate-200 rounded" />
                  <div className="h-3 w-12 bg-slate-200 rounded" />
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Channel Performance */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-36 bg-slate-200 rounded-md" />
            <div className="h-3 w-32 bg-slate-100 rounded" />
          </div>
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-16 h-3 bg-slate-200 rounded" />
                <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                <div className="w-6 h-3 bg-slate-200 rounded" />
                <div className="w-8 h-3 bg-slate-100 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
