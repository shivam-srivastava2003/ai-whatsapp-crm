export default function SettingsLoading() {
  return (
    <div className="space-y-5 animate-pulse p-1">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-5 w-24 bg-slate-200 rounded" />
        <div className="h-3.5 w-44 bg-slate-100 rounded" />
      </div>

      {/* 2-Column workspace */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Left side category tabs list skeleton */}
        <div className="lg:col-span-1 bg-white border border-slate-100 rounded-2xl p-3 shadow-card space-y-1.5 h-fit">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50/50">
              <div className="w-4 h-4 rounded bg-slate-200 flex-shrink-0" />
              <div className="h-3.5 w-20 bg-slate-200 rounded" />
            </div>
          ))}
        </div>

        {/* Right side settings category form content skeleton */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-card space-y-6">
            {/* Category title */}
            <div className="pb-3 border-b border-slate-100 space-y-2">
              <div className="h-4.5 w-32 bg-slate-200 rounded" />
              <div className="h-3 w-56 bg-slate-100 rounded" />
            </div>

            {/* Form inputs fields skeletons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="h-3 w-16 bg-slate-200 rounded" />
                  <div className="h-9 bg-slate-50 border border-slate-100 rounded-xl" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-3 w-16 bg-slate-200 rounded" />
                  <div className="h-9 bg-slate-50 border border-slate-100 rounded-xl" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="h-3 w-20 bg-slate-200 rounded" />
                <div className="h-9 bg-slate-50 border border-slate-100 rounded-xl" />
              </div>

              <div className="space-y-3 pt-3">
                <div className="h-3 w-24 bg-slate-200 rounded" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-slate-50 bg-slate-50/50">
                    <div className="w-8 h-4 bg-slate-200 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 w-24 bg-slate-200 rounded" />
                      <div className="h-2.5 w-36 bg-slate-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer action buttons */}
            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <div className="h-10 w-20 bg-slate-100 rounded-xl" />
              <div className="h-10 w-32 bg-slate-200 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
