"use client";
import { motion } from "framer-motion";
import { Plane, BarChart2, ShieldCheck, ExternalLink, MapPin } from "lucide-react";

export default function FlightTracker() {
  const comparisons = [
    { name: "FlightAware", pro: "Best for Real-time IFR tracking", type: "Live Tracker", url: "https://flightaware.com/" },
    { name: "Flightradar24", pro: "Best Global Radar Visuals", type: "Live Radar", url: "https://www.flightradar24.com/" },
    { name: "Skyscanner", pro: "Best for Booking & Pricing", type: "Booking Engine", url: "https://www.skyscanner.net/" },
    { name: "MakeMyTrip", pro: "Best for Indian Domestic", type: "Boarding/Booking", url: "https://www.makemytrip.com/flights/" },
  ];

  return (
    <div className="min-h-screen bg-[#000a12] text-blue-100 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto p-8 pt-24 relative z-10">
        <header className="mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4 flex items-center gap-4">
            <Plane className="text-blue-500" size={56} /> Aero Dashboard
          </motion.h1>
          <p className="text-xl text-blue-200/60 max-w-2xl">Compare boarding trackers, flight booking systems, and live radar mapping engines.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Active Live Radar Area */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="h-[500px] bg-[#001524] rounded-3xl border border-blue-900/50 relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,10,18,0.8)_inset]">
             <div className="bg-blue-950/40 p-4 border-b border-blue-900/50 flex justify-between items-center z-20 backdrop-blur-md absolute top-0 left-0 w-full">
               <span className="text-sm font-bold flex items-center gap-2 text-white"><MapPin size={16} className="text-red-500 animate-pulse" /> Live Global ADSB Radar</span>
             </div>
             
             <div className="absolute inset-0 pt-12">
               <iframe 
                 src="https://globe.adsbexchange.com/" 
                 className="w-full h-full border-0 grayscale invert opacity-80 mix-blend-lighten"
                 allowFullScreen
               ></iframe>
             </div>
             
             {/* Overlay for aesthetic */}
             <div className="absolute inset-0 pointer-events-none bg-blue-900/10 mix-blend-overlay z-10"></div>
          </motion.div>

          {/* Comparison Dashboard */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel rounded-3xl border border-white/5 p-8 h-[500px] flex flex-col">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><BarChart2 className="text-blue-500" /> Platform Comparison Engine</h2>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {comparisons.map((c, i) => (
                <a key={i} href={c.url} target="_blank" rel="noreferrer" className="block p-4 rounded-2xl bg-blue-950/20 border border-blue-900/30 group hover:bg-blue-900/60 hover:border-blue-500/50 transition-all cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1 flex items-center gap-2">
                        {c.name} <ExternalLink size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-blue-300/70">{c.pro}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs uppercase tracking-widest text-blue-500 mb-2">{c.type}</span>
                      <ShieldCheck size={18} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-900/30 text-xs text-blue-400/50 font-mono text-center">
               // API Integration Status: Disconnected
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
