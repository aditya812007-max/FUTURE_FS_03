'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState('book');
  const router = useRouter();

  return (
    <div className="w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">


      <div className="flex gap-6 mb-6 border-b border-white/10 pb-4">
        {['Book Ticket', 'Check PNR', 'Train Status'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold uppercase tracking-wider pb-2 transition-all ${activeTab === tab
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-slate-400 hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">


        <div className="md:col-span-3">
          <label className="block text-xs text-slate-400 mb-1 ml-1 uppercase font-bold">From</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-blue-500">📍</span>
            </div>
            <input
              type="text"
              placeholder="NDLS, New Delhi"
              className="w-full bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-3 transition-all group-hover:bg-slate-800"
            />
          </div>
        </div>


        <div className="hidden md:flex md:col-span-1 justify-center items-center pb-3">
          <button className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors text-slate-400 hover:text-white">
            ⇄
          </button>
        </div>


        <div className="md:col-span-3">
          <label className="block text-xs text-slate-400 mb-1 ml-1 uppercase font-bold">To</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-orange-500">🏁</span>
            </div>
            <input
              type="text"
              placeholder="BCT, Mumbai Central"
              className="w-full bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-3 transition-all group-hover:bg-slate-800"
            />
          </div>
        </div>


        <div className="md:col-span-2">
          <label className="block text-xs text-slate-400 mb-1 ml-1 uppercase font-bold">Date</label>
          <input
            type="date"
            className="w-full bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 uppercase"
          />
        </div>


        <div className="md:col-span-3">
          <button onClick={() => router.push('/search')}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-blue-500/30 transition-all transform hover:scale-[1.02] active:scale-95">
            SEARCH TRAINS ➜
          </button>
        </div>
      </div>


      <div className="mt-4 flex gap-4 text-xs text-slate-400">
        <label className="flex items-center gap-2 cursor-pointer hover:text-white">
          <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-blue-500 focus:ring-offset-0" />
          <span>Flexible with Date?</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer hover:text-white">
          <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-blue-500 focus:ring-offset-0" />
          <span>Railway Pass Concession</span>
        </label>
      </div>

    </div>
  );
}