export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse p-1">
      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-slate-100" />
              <div className="w-12 h-5 rounded-full bg-slate-100" />
            </div>
            <div className="h-7 w-24 bg-slate-200 rounded-lg" />
            <div className="h-3 w-16 bg-slate-100 rounded-md" />
            <div className="h-2 w-28 bg-slate-50 rounded" />
          </div>
        ))}
      </div>

      {/* Revenue & Conversion Charts Skeleton */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 h-[340px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-slate-200 rounded-md" />
              <div className="h-3 w-48 bg-slate-100 rounded" />
            </div>
            <div className="h-8 w-24 bg-slate-100 rounded-lg" />
          </div>
          <div className="flex-1 h-[220px] bg-slate-50 rounded-xl flex items-end justify-between p-4">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="w-[6%] bg-slate-200 rounded-t" style={{ height: `${20 + (idx % 4) * 20}%` }} />
            ))}
          </div>
        </div>
        <div className="h-[340px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-28 bg-slate-200 rounded-md" />
            <div className="h-3 w-40 bg-slate-100 rounded" />
          </div>
          <div className="h-[220px] bg-slate-50 rounded-xl flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-[12px] border-slate-100 border-t-slate-200 animate-spin" />
          </div>
        </div>
      </div>

      {/* Bottom Row Skeleton */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="h-[280px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-32 bg-slate-200 rounded-md" />
            <div className="h-3 w-44 bg-slate-100 rounded" />
          </div>
          <div className="flex-1 h-[170px] bg-slate-50 rounded-xl flex items-end justify-between p-4">
            {[...Array(7)].map((_, idx) => (
              <div key={idx} className="w-[10%] bg-slate-200 rounded-t" style={{ height: `${30 + (idx % 3) * 20}%` }} />
            ))}
          </div>
        </div>

        <div className="h-[280px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-200" />
            <div className="space-y-1.5 flex-1">
              <div className="h-3 w-20 bg-slate-200 rounded" />
              <div className="h-2 w-28 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="p-3 border border-slate-50 rounded-xl space-y-2 bg-slate-50/50">
                <div className="h-3.5 w-3/4 bg-slate-200 rounded" />
                <div className="h-2.5 w-1/2 bg-slate-100 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="h-[280px] bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-4 w-28 bg-slate-200 rounded-md" />
            <div className="h-3 w-12 bg-slate-100 rounded" />
          </div>
          <div className="space-y-3">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-200 flex-shrink-0" />
                <div className="flex-1 space-y-1.5 min-w-0">
                  <div className="h-3 w-24 bg-slate-200 rounded" />
                  <div className="h-2 w-32 bg-slate-100 rounded" />
                </div>
                <div className="w-8 h-2.5 bg-slate-100 rounded flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
