"use client";
import { motion } from "framer-motion";
import { Map, Settings2, Compass, Layers } from "lucide-react";

export default function SmartNavigation() {
  const mapEngines = ["Google Maps", "Apple Maps", "OpenStreetMap"];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans flex flex-col">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-repeat" />
      
      <header className="p-6 relative z-10 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3 text-emerald-500">
          <Map size={24} />
          <span className="text-xl font-bold tracking-tight text-white">SmartNav OS</span>
        </div>
        
        {/* Map Engine Switcher */}
        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
          {mapEngines.map((engine, i) => (
            <button key={i} className={`px-4 py-2 rounded-lg text-sm transition-all ${i === 0 ? 'bg-emerald-500 text-black font-semibold' : 'hover:bg-white/10 text-stone-400'}`}>
              {engine}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 flex relative z-10">
        {/* Sidebar Dashboard */}
        <div className="w-96 bg-black/80 backdrop-blur-xl border-r border-white/5 p-8 flex flex-col z-20 shadow-2xl shadow-black">
          <h2 className="text-3xl font-light mb-8">Routing Intelligence</h2>
          <div className="space-y-4 mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-500" />
              <input type="text" placeholder="Origin" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 outline-none text-sm text-stone-300" defaultValue="New Delhi, India" />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white/40" />
              <input type="text" placeholder="Destination" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-10 pr-4 outline-none text-sm focus:border-emerald-500 transition-colors" />
            </div>
            <button className="w-full py-4 mt-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Compass size={18} /> Initiate Route
            </button>
          </div>

          <div className="flex-1 border-t border-white/5 pt-8">
            <h3 className="text-xs uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2"><Layers size={14} /> Active Overlays</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span className="text-sm">Live Traffic</span><div className="w-8 h-4 bg-emerald-500 rounded-full" /></div>
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg"><span className="text-sm text-stone-400">Weather Radar</span><div className="w-8 h-4 bg-stone-700 rounded-full" /></div>
            </div>
          </div>
        </div>

        {/* Active Google Map Area */}
        <div className="flex-1 flex relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14008.114827184283!2d77.216721!3d28.628454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
             className="w-full h-full border-0 grayscale invert opacity-80"
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
           {/* Overlay to give it the futuristic dark look while retaining functionality */}
           <div className="absolute inset-0 pointer-events-none bg-emerald-900/10 mix-blend-overlay"></div>
        </div>
      </main>
    </div>
  );
}
