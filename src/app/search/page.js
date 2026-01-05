"use client";

import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("from");
  const destination = searchParams.get("to");

  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrains() {
      try {
        const res = await fetch(`/api/trains?source=${source || ''}&destination=${destination || ''}`);
        const data = await res.json();
        
        if (data.success) {
          setTrains(data.trains);
        }
      } catch (error) {
        console.error("Failed to fetch trains", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrains();
  }, [source, destination]);

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Search Results: <span className="text-blue-500">{source} ➔ {destination}</span>
      </h1>

      {loading ? (
        <p className="text-xl text-center animate-pulse">Scanning Neural Network for Trains...</p>
      ) : (
        <div className="space-y-4">
          {trains.length === 0 ? (
              <p className="text-red-400">No trains found for this route.</p>
          ) : (
              trains.map((train) => (
              <div key={train._id} className="p-6 rounded-xl border border-white/10 bg-white/5 flex justify-between items-center hover:border-blue-500/50 transition-all animate-fade-up">
                  <div>
                  <h2 className="text-xl font-bold text-blue-400">{train.name}</h2>
                  <p className="text-slate-400 text-sm">#{train.trainNumber} | {train.source} ➔ {train.destination}</p>
                  <p className="text-xs text-slate-500 mt-1">Departs: {train.departureTime} | Seats: {train.seatsAvailable}</p>
                  </div>
                  <div className="text-right">
                  <p className="text-2xl font-bold">₹ {train.price}</p>
                  <button 
                    onClick={() => window.location.href = `/book/${train._id}`}
                    className="text-xs bg-orange-500 px-4 py-2 rounded text-black font-bold mt-2 hover:scale-105 transition-transform"
                  >
                      BOOK NOW
                  </button>
                  </div>
              </div>
              ))
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchResults() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center pt-40 text-blue-500">Loading Search Module...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}