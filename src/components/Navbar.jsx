import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/50 transition-all">
            <Image 
              src="/logo.png" 
              alt="IRCTC Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            IRCTC <span className="text-orange-500">NEXT</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#" className="hover:text-blue-400 transition-colors">Book Tickets</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">PNR Status</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Train Schedule</Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">Meals</Link>
        </div>

        {/* Login Button */}
        <button className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-600/20">
          Login / Register
        </button>
      </div>
    </nav>
  );
}