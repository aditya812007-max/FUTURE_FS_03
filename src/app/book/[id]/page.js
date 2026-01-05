"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useRouter, useParams } from "next/navigation";

export default function SeatSelection() {
  const router = useRouter();
  const params = useParams();
  const trainId = params.id;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooking, setIsBooking] = useState(false);

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const cols = [1, 2, 3, 4];

  const toggleSeat = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = async () => {
    if (!trainId) {
      alert("Error: Train ID missing!");
      return;
    }

    setIsBooking(true);
    try {
      console.log("Booking Train:", trainId);
      console.log("Seats:", selectedSeats);

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trainId: trainId,
          seats: selectedSeats
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server Error ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      
      if (data.success) {
        alert("✅ VICTORY! Ticket Confirmed! ID: " + data.booking._id);
        router.push('/');
      } else {
        alert("Booking Failed: " + data.error);
      }

    } catch (error) {
      console.error(error);
      alert("❌ ERROR: " + error.message);
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24 px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 text-blue-400 uppercase tracking-tighter">
          Neural Seat Selection
        </h1>
        <p className="text-slate-500 mb-10 text-sm">Select your coordinates for high-speed transit</p>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl w-full max-w-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            {rows.map((row) => 
              cols.map((col) => {
                const seatId = `${row}${col}`;
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <button
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    className={`w-10 h-10 rounded-lg border text-[10px] font-bold transition-all duration-300 ${
                      isSelected 
                      ? "bg-blue-500 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)] scale-90" 
                      : "bg-black/40 border-white/20 hover:border-blue-500/50"
                    }`}
                  >
                    {seatId}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-10 w-full max-w-md flex justify-between items-end p-6 border-t border-white/10">
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold">Seats Selected</p>
            <p className="text-xl font-mono text-blue-300">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</p>
          </div>
          <button 
            onClick={handleBooking}
            disabled={selectedSeats.length === 0 || isBooking}
            className="bg-orange-500 disabled:bg-slate-800 disabled:text-slate-500 text-black font-bold py-3 px-8 rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            {isBooking ? "PROCESSING..." : "CONFIRM COORDINATES"}
          </button>
        </div>
      </div>
    </main>
  );
}