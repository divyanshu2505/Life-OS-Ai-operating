"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Train, PackageSearch, Activity, Map, ArrowRight, ShieldAlert } from "lucide-react";

export default function Cargo() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const wagons = [
    { id: "WGN-01", type: "Coal", temp: "Ambient", status: "Nominal" },
    { id: "WGN-02", type: "Petrochemicals", temp: "Controlled", status: "Critical Check" },
    { id: "WGN-03", type: "Steel Pipes", temp: "Ambient", status: "Nominal" },
    { id: "WGN-04", type: "Agri-Wheat", temp: "Dry", status: "Nominal" },
  ];

  return (
    <div className="bg-[#050505] text-[#d4d4d8] font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2000&q=80" alt="Freight Train" className="w-full h-full object-cover opacity-40 mix-blend-luminosity transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
          {/* Depth/Volume effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none" />
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
             <span className="text-xs font-mono uppercase tracking-widest">Real-time Freight Intelligence</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 drop-shadow-2xl">
            Where is my <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ea580c]">Cargo.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-12 font-light">
            Modern rail logistics operating system. Tracking India's heavy freight network with cinematic AI precision.
          </motion.p>
          <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="px-10 py-5 bg-[#ea580c] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#ea580c]/80 transition-all flex items-center gap-4 mx-auto rounded-none relative overflow-hidden group">
            <span className="relative z-10">Access Control Center</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>
        </div>
      </section>

      {/* Control Center Dashboard */}
      <section className="relative z-20 py-24 px-8 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Panel - Live Status */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-12 p-8 rounded-3xl bg-[#111] border border-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-[80px]" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#71717a] mb-8 flex items-center gap-2"><Activity size={16} /> Live Feed</h3>
                
                <div className="mb-12">
                  <div className="text-[10px] text-[#ea580c] uppercase font-bold tracking-widest mb-2">Active Locomotive</div>
                  <div className="text-3xl font-black tracking-tight mb-2 text-white">WAG-12B Super Heavy</div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-gradient-to-r from-[#ea580c]/50 to-[#ea580c]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#a1a1aa] uppercase">
                    <span>Mumbai Port</span>
                    <span>65% to Delhi</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {wagons.map((w, i) => (
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className={`p-4 rounded-xl border flex justify-between items-center ${w.status === 'Critical Check' ? 'bg-red-950/20 border-red-900/30' : 'bg-black/40 border-white/5'}`}>
                      <div>
                        <div className="text-xs font-mono font-bold text-white mb-1">{w.id}</div>
                        <div className={`text-[10px] uppercase font-bold tracking-wider ${w.status === 'Critical Check' ? 'text-red-500' : 'text-[#ea580c]'}`}>{w.type}</div>
                      </div>
                      <div className="text-right text-[10px] font-mono text-[#71717a] space-y-1">
                        <div>{w.temp}</div>
                        {w.status === 'Critical Check' ? <div className="text-red-500 flex items-center gap-1 justify-end"><ShieldAlert size={10} /> Alert</div> : <div>Nominal</div>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Live Map Area */}
            <div className="w-full lg:w-2/3 h-[800px] bg-[#000] rounded-3xl border border-white/5 relative overflow-hidden flex flex-col group shadow-[0_0_50px_rgba(0,0,0,0.8)_inset]">
               <div className="bg-[#111]/80 p-4 border-b border-white/5 flex justify-between items-center z-20 backdrop-blur-md absolute top-0 left-0 w-full">
                 <span className="text-sm font-bold flex items-center gap-2 text-white"><Map size={16} className="text-[#ea580c] animate-pulse" /> Live Indian Railway Atlas</span>
               </div>
               
               <div className="absolute inset-0 pt-12">
                 <iframe 
                   src="https://indiarailinfo.com/atlas" 
                   className="w-full h-full border-0 grayscale invert opacity-80 mix-blend-lighten"
                   allowFullScreen
                 ></iframe>
               </div>
               
               {/* Overlay for aesthetic */}
               <div className="absolute inset-0 pointer-events-none bg-[#ea580c]/5 mix-blend-overlay z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
