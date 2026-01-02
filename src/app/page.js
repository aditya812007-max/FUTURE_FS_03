import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <Image
          src="/train2.png"
          alt="Test Image"
          fill
          className="object-cover opacity-60 animate-slow-zoom"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>


      <div className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        

        <div className="mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
          <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">
            🚀 The Future of Indian Railways is Here
          </span>
        </div>


        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up">
          Experience Travel at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500">
            Hyper-Speed
          </span>
        </h1>


        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxedv animate-fade-up-delay">
          Book tickets with AI-powered predictions, visualize your seat in 3D, 
          and travel seamlessly across India.
        </p>


        <div className="w-full flex justify-center">
          <BookingForm />
        </div>

      </div>
    </main>
  );
}