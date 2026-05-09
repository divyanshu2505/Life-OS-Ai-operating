"use client";
import { motion } from "framer-motion";
import { Wallet, Globe2, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";

export default function RevenueGenerator() {
  const sites = [
    { name: "Fiverr", link: "https://www.fiverr.com/" },
    { name: "Upwork", link: "https://www.upwork.com/" },
    { name: "Toptal", link: "https://www.toptal.com/" },
    { name: "Freelancer", link: "https://www.freelancer.com/" },
    { name: "Contra", link: "https://contra.com/" },
    { name: "PeoplePerHour", link: "https://www.peopleperhour.com/" },
    { name: "RemoteOK", link: "https://remoteok.com/" },
    { name: "FlexJobs", link: "https://www.flexjobs.com/" }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#f4f4f5] p-8 pt-24 font-sans uppercase tracking-wide">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 border-b border-white/10 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-[#a1a1aa] text-xs font-mono mb-6">
              <Wallet size={14} /> Freelance Market Matrix
            </motion.div>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Revenue<br/><span className="text-[#a1a1aa]">Engine.</span>
            </motion.h1>
          </div>
          <p className="text-sm text-[#71717a] font-mono max-w-sm normal-case tracking-normal">
            A centralized dashboard linking your portfolio to 8+ top global freelancing platforms. Click any platform to navigate instantly.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Platform Network Map */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 border border-white/20 p-8">
            <h2 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-3"><Globe2 /> Integrated Platforms</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sites.map((site, i) => (
                <a 
                  key={i} 
                  href={site.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-6 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all flex flex-col items-center justify-center text-center group cursor-pointer aspect-square"
                >
                  <ArrowUpRight size={20} className="mb-4 opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                  <span className="font-bold tracking-tight text-sm">{site.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-[#111] border border-white/10 flex items-start gap-4">
              <Sparkles className="text-white shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Deal Flow Intelligence Active</h3>
                <p className="text-xs text-[#a1a1aa] font-mono normal-case tracking-normal">Your portfolio is synchronized. AI is actively matching your skills with high-paying clients across the above networks.</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="border border-white/20 p-8 flex flex-col justify-between bg-[#050505]">
            <div>
              <div className="text-[#71717a] text-xs font-mono mb-4">Total Deal Volume</div>
              <div className="text-7xl font-light tracking-tighter mb-12">$12,400</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-4 border border-white/10">
                <span className="font-bold text-sm">Upwork</span>
                <span className="text-[#10b981] flex items-center gap-2 text-xs font-mono"><TrendingUp size={14} /> Active</span>
              </div>
              <div className="flex justify-between items-center p-4 border border-white/10">
                <span className="font-bold text-sm">Fiverr</span>
                <span className="text-[#10b981] flex items-center gap-2 text-xs font-mono"><TrendingUp size={14} /> Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
