export default function InboxLoading() {
  return (
    <div className="h-[calc(100vh-80px)] flex border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-premium animate-pulse">
      {/* Left Column: Contacts List Skeleton */}
      <div className="w-80 border-r border-slate-100 flex flex-col bg-white">
        <div className="p-4 border-b border-slate-100 space-y-3">
          <div className="h-4 w-28 bg-slate-200 rounded" />
          <div className="h-9 bg-slate-50 border border-slate-100 rounded-xl" />
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-7 w-16 bg-slate-100 rounded-lg flex-shrink-0" />
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/40">
              <div className="w-10 h-10 rounded-xl bg-slate-200 flex-shrink-0" />
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex justify-between items-center">
                  <div className="h-3 w-20 bg-slate-200 rounded" />
                  <div className="h-2 w-8 bg-slate-100 rounded" />
                </div>
                <div className="h-2.5 w-32 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Column: Chat Feed Skeleton */}
      <div className="flex-1 flex flex-col bg-slate-50/50">
        {/* Chat Header */}
        <div className="px-5 py-4 border-b border-slate-100 bg-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-200" />
            <div className="space-y-1.5">
              <div className="h-3.5 w-24 bg-slate-200 rounded" />
              <div className="h-2.5 w-16 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-100" />
            <div className="w-8 h-8 rounded-lg bg-slate-100" />
          </div>
        </div>

        {/* Messages Feed */}
        <div className="flex-1 p-5 space-y-5 overflow-y-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`flex gap-3 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {i % 2 === 0 && <div className="w-7 h-7 rounded-xl bg-slate-200 flex-shrink-0 self-end" />}
              <div className={`p-3 rounded-2xl max-w-xs space-y-2 ${i % 2 === 0 ? 'bg-white rounded-bl-sm border border-slate-100' : 'bg-slate-200 rounded-br-sm text-right'}`}>
                <div className={`h-3.5 rounded ${i % 2 === 0 ? 'bg-slate-100 w-36' : 'bg-slate-300 w-28'}`} />
                {i % 3 === 0 && <div className={`h-2.5 rounded ${i % 2 === 0 ? 'bg-slate-50 w-20' : 'bg-slate-100/50 w-16'}`} />}
                <div className="h-2 w-10 bg-slate-100 rounded ml-auto mt-1" />
              </div>
            </div>
          ))}
        </div>

        {/* AI Reply Bar Skeleton */}
        <div className="px-4 py-2 border-t border-slate-100 bg-white flex items-center gap-2 overflow-x-auto flex-shrink-0">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 w-40 bg-slate-100 border border-slate-200 rounded-xl flex-shrink-0" />
          ))}
        </div>

        {/* Input box */}
        <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex-shrink-0" />
          <div className="flex-1 h-10 bg-slate-50 border border-slate-100 rounded-xl" />
          <div className="w-10 h-10 rounded-xl bg-slate-200 flex-shrink-0" />
        </div>
      </div>

      {/* Right Column: Profile Detail Skeleton */}
      <div className="w-64 border-l border-slate-100 bg-white flex flex-col p-4 space-y-6 hidden lg:flex">
        {/* Avatar Profile */}
        <div className="flex flex-col items-center text-center space-y-3 pb-4 border-b border-slate-100">
          <div className="w-16 h-16 rounded-2xl bg-slate-200" />
          <div className="space-y-1.5 w-full flex flex-col items-center">
            <div className="h-4 w-28 bg-slate-200 rounded" />
            <div className="h-3 w-16 bg-slate-100 rounded" />
          </div>
          <div className="flex gap-1">
            <div className="h-5 w-12 bg-slate-100 rounded-full" />
            <div className="h-5 w-16 bg-slate-100 rounded-full" />
          </div>
        </div>

        {/* Lead Details */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="h-3.5 w-24 bg-slate-200 rounded" />
            <div className="h-8 bg-slate-50 rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <div className="h-3.5 w-24 bg-slate-200 rounded" />
            <div className="h-8 bg-slate-50 rounded-xl" />
          </div>
          <div className="space-y-1.5">
            <div className="h-3.5 w-28 bg-slate-200 rounded" />
            <div className="h-3 w-full bg-slate-100 rounded-full" />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2 mt-auto">
          <div className="h-9 w-full bg-slate-100 rounded-xl" />
          <div className="h-9 w-full bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  )
}
