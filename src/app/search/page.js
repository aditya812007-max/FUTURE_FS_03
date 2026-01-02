import Navbar from "@/components/Navbar";

export default function SearchResults() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Search Results <span className="text-blue-500 text-lg font-normal">(3 Trains Found)</span>
        </h1>

        {/* Fake Train List */}
        <div className="space-y-4">
          {[1, 2, 3].map((train) => (
            <div key={train} className="p-6 rounded-xl border border-white/10 bg-white/5 flex justify-between items-center hover:border-blue-500/50 transition-all">
              <div>
                <h2 className="text-xl font-bold text-blue-400">Vande Bharat Express</h2>
                <p className="text-slate-400 text-sm">NDLS ➔ MUMBAI CENTRAL</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">₹ 1,850</p>
                <button className="text-xs bg-orange-500 px-4 py-2 rounded text-black font-bold mt-2">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}