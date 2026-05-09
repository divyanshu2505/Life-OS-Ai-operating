"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Dumbbell, Activity, ShieldCheck, ArrowRight, HeartPulse, ExternalLink } from "lucide-react";

export default function GymWorkspace() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const gyms = [
    { name: "Cult.fit Center", distance: "0.8 km", rating: "4.8", equip: ["Machines", "CrossFit"] },
    { name: "Gold's Gym HQ", distance: "1.2 km", rating: "4.5", equip: ["Premium Weights", "Sauna"] },
    { name: "Anytime Fitness", distance: "2.1 km", rating: "4.6", equip: ["24/7 Access", "Cardio"] },
  ];

  const platforms = [
    { name: "Cult.fit", desc: "Group workouts & Gyms", link: "https://www.cult.fit/" },
    { name: "MyFitnessPal", desc: "Nutrition & Macro tracking", link: "https://www.myfitnesspal.com/" },
    { name: "Bodybuilding.com", desc: "Workouts & Supplementation", link: "https://www.bodybuilding.com/" },
    { name: "Mindbody", desc: "Wellness & Class booking", link: "https://www.mindbodyonline.com/" },
    { name: "Whoop", desc: "Advanced biometric tracking", link: "https://www.whoop.com/" },
    { name: "Strava", desc: "Run, Ride, Hike tracking", link: "https://www.strava.com/" }
  ];

  return (
    <div className="bg-[#050505] text-[#d4d4d8] font-sans selection:bg-[#a3e635] selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80" alt="Gym" className="w-full h-full object-cover opacity-30 mix-blend-luminosity transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
          {/* Depth/Volume effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-500/5 via-black/50 to-black pointer-events-none" />
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-lime-500/20 bg-lime-500/5 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
             <span className="text-xs font-mono uppercase tracking-widest text-[#a3e635]">NeuroFit Engine</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.9] mb-8 drop-shadow-2xl text-white">
            Optimize your <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a3e635]">Potential.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-12 font-light">
            AI-driven biometric tracking and location intelligence. Finding the perfect environment for your physical evolution.
          </motion.p>
          <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="px-10 py-5 bg-[#a3e635] text-black text-sm font-bold uppercase tracking-widest hover:bg-[#a3e635]/80 transition-all flex items-center gap-4 mx-auto rounded-none relative overflow-hidden group">
            <span className="relative z-10">Access Workspace</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>
        </div>
      </section>

      {/* Workspace Dashboard */}
      <section className="relative z-20 py-24 px-8 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Panel - Bio Stats */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-12 p-8 rounded-3xl bg-[#111] border border-white/5 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3e635]/5 rounded-full blur-[80px]" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#71717a] mb-8 flex items-center gap-2"><HeartPulse size={16} /> Biometric Data</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="border border-lime-500/20 bg-lime-950/20 p-6 rounded-2xl group hover:border-lime-500/50 transition-colors">
                    <Activity className="text-[#a3e635] mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-black text-white mb-1 tracking-tighter">2,450</div>
                    <div className="text-lime-700 text-[10px] uppercase font-mono tracking-widest">Kcal Burned Today</div>
                  </div>
                  <div className="border border-lime-500/20 bg-lime-950/20 p-6 rounded-2xl group hover:border-lime-500/50 transition-colors">
                    <Dumbbell className="text-[#a3e635] mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-black text-white mb-1 uppercase tracking-tight">Hypertrophy</div>
                    <div className="text-lime-700 text-[10px] uppercase font-mono tracking-widest">AI Recommended Phase</div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                  <h4 className="text-xs font-mono uppercase text-[#71717a] tracking-widest mb-4">Nearby Gym Intelligence</h4>
                  <div className="space-y-4">
                    {gyms.map((gym, i) => (
                      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-[#a3e635]/30 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-white text-sm group-hover:text-[#a3e635] transition-colors">{gym.name}</h3>
                          <div className="bg-lime-500/10 text-[#a3e635] px-2 py-1 rounded text-[10px] font-mono border border-lime-500/20">{gym.distance}</div>
                        </div>
                        <div className="flex gap-2">
                          {gym.equip.map(e => <span key={e} className="text-[9px] uppercase tracking-wider text-stone-400 bg-stone-900 px-2 py-1 rounded border border-white/5">{e}</span>)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - 3D Map Area & Platforms */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              
              {/* Radar Map */}
              <div className="h-[500px] w-full bg-[#0a0a0a] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />
                 <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute z-10 text-center w-full max-w-lg">
                   
                   <div className="w-full h-64 bg-stone-900 rounded-2xl border border-stone-800 mb-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
                      
                      <div className="relative z-20">
                        <div className="absolute -inset-4 bg-lime-500/20 blur-xl rounded-full" />
                        <MapPin className="text-[#a3e635] animate-bounce relative z-20" size={48} />
                      </div>
                      
                      <div className="text-xs text-[#a3e635] uppercase tracking-widest mt-24 relative z-20 font-mono">[ Radar Scanning Active ]</div>
                   </div>

                   <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-white">Spatial Mapping</h2>
                   <p className="text-[#71717a] font-mono text-xs mt-4 uppercase">Locating optimal training facilities</p>
                 </motion.div>
              </div>

              {/* External Fitness Platforms */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.map((p, i) => (
                  <motion.a 
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="p-6 bg-[#111] border border-white/5 rounded-3xl hover:border-[#a3e635]/50 hover:bg-[#a3e635]/5 transition-colors group block relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3e635]/5 rounded-full blur-[40px] translate-x-16 -translate-y-16 group-hover:bg-[#a3e635]/10 transition-colors" />
                    <div className="flex justify-between items-start mb-4 relative z-10">
                       <h3 className="text-white font-bold group-hover:text-[#a3e635] transition-colors">{p.name}</h3>
                       <ExternalLink size={16} className="text-[#71717a] group-hover:text-[#a3e635] transition-all" />
                    </div>
                    <p className="text-xs text-[#71717a] font-mono relative z-10">{p.desc}</p>
                  </motion.a>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
