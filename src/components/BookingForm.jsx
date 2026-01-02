"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();
  
  
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    
    router.push(`/search?from=${from}&to=${to}`);
  };

  return (
    <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl animate-fade-up-delay">
      
      
      <div className="flex gap-6 mb-6 text-sm font-semibold tracking-wide text-slate-400 border-b border-white/10 pb-4">
        <button className="text-blue-400 border-b-2 border-blue-400 pb-4 -mb-4.5">BOOK TICKET</button>
        <button className="hover:text-white transition-colors">CHECK PNR</button>
        <button className="hover:text-white transition-colors">TRAIN STATUS</button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
      
        <div className="bg-black/50 border border-white/20 rounded-xl p-3 flex flex-col group focus-within:border-blue-500/50 transition-colors">
          <label className="text-[10px] text-slate-500 font-bold tracking-wider mb-1 group-focus-within:text-blue-400">FROM</label>
          <input 
            type="text" 
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="New Delhi" 
            className="bg-transparent outline-none text-white font-medium placeholder-slate-600"
          />
        </div>

      
        <div className="bg-black/50 border border-white/20 rounded-xl p-3 flex flex-col group focus-within:border-blue-500/50 transition-colors">
          <label className="text-[10px] text-slate-500 font-bold tracking-wider mb-1 group-focus-within:text-blue-400">TO</label>
          <input 
            type="text" 
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Mumbai Central" 
            className="bg-transparent outline-none text-white font-medium placeholder-slate-600"
          />
        </div>

      
        <div className="bg-black/50 border border-white/20 rounded-xl p-3 flex flex-col group focus-within:border-blue-500/50 transition-colors">
          <label className="text-[10px] text-slate-500 font-bold tracking-wider mb-1 group-focus-within:text-blue-400">DATE</label>
          <input 
            type="date" 
            className="bg-transparent outline-none text-white font-medium placeholder-slate-600 w-full [color-scheme:dark]" 
          />
        </div>

      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-xs text-slate-400 font-medium">
          <label className="flex items-center gap-2 cursor-pointer hover:text-white">
            <input type="checkbox" className="rounded border-white/30 bg-transparent text-blue-500 focus:ring-0" />
            Flexible with Date?
          </label>
          <label className="flex items-center gap-2 cursor-pointer hover:text-white">
            <input type="checkbox" className="rounded border-white/30 bg-transparent text-blue-500 focus:ring-0" />
            Railway Pass Concession
          </label>
        </div>

        <button 
          onClick={handleSearch}
          className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-105 active:scale-95"
        >
          SEARCH TRAINS ➜
        </button>
      </div>
    </div>
  );
}