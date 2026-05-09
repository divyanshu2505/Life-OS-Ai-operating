"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Search, ArrowUpRight, Bot } from "lucide-react";

export default function JobsBoard() {
  const [searchQuery, setSearchQuery] = useState("Python Developer");
  const [isSearching, setIsSearching] = useState(false);
  const [jobs, setJobs] = useState([
    { title: "Senior AI Engineer", via: "LinkedIn", time: "2 mins ago", link: "https://www.linkedin.com/jobs/search/?keywords=AI%20Engineer" },
    { title: "Frontend Lead", via: "Wellfound", time: "10 mins ago", link: "https://wellfound.com/role/frontend-developer" },
    { title: "Backend Architect", via: "Indeed", time: "45 mins ago", link: "https://www.indeed.com/q-backend-architect-jobs.html" },
  ]);

  const platforms = [
    { name: "LinkedIn", desc: "Professional networking & B2B hiring", link: "https://www.linkedin.com/jobs/search/?keywords=Python%20Developer", color: "bg-blue-600" },
    { name: "Naukri.com", desc: "India's largest job portal", link: "https://www.naukri.com/python-developer-jobs", color: "bg-cyan-600" },
    { name: "Indeed", desc: "Global search engine for jobs", link: "https://www.indeed.com/q-python-developer-jobs.html", color: "bg-blue-700" },
    { name: "Wellfound", desc: "Startup hiring agencies", link: "https://wellfound.com/role/python-developer", color: "bg-red-500" },
  ];

  const triggerAutoSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setJobs([
        { title: "Senior Python Developer", via: "LinkedIn", time: "Just now", link: "https://www.linkedin.com/jobs/search/?keywords=Python%20Developer" },
        { title: "Python/Django Backend Engineer", via: "LinkedIn", time: "1 min ago", link: "https://www.linkedin.com/jobs/search/?keywords=Python%20Developer" },
        { title: "AI/ML Engineer (Python)", via: "Naukri.com", time: "5 mins ago", link: "https://www.naukri.com/python-developer-jobs" },
        { title: "Python Full Stack Developer", via: "Indeed", time: "12 mins ago", link: "https://www.indeed.com/q-python-developer-jobs.html" },
        { title: "Lead Python Architect", via: "Wellfound", time: "18 mins ago", link: "https://wellfound.com/role/python-developer" },
      ]);
      setIsSearching(false);
    }, 1500);
  };

  useEffect(() => {
    // Initial trigger for Python developer
    triggerAutoSearch();
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f4f4f5] p-8 pt-24 font-sans uppercase tracking-wide">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 border-b border-white/10 pb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-[#a1a1aa] text-xs font-mono mb-6">
              <Briefcase size={14} /> Omni-Jobs Dashboard
            </motion.div>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              Global<br/><span className="text-[#a1a1aa]">Recruitment.</span>
            </motion.h1>
          </div>
          <button onClick={triggerAutoSearch} className="px-6 py-4 bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
             <Bot size={18} /> {isSearching ? "Crawling Web..." : "Auto-Search New Jobs"}
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Aggregator Dashboard Links */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((p, i) => (
              <motion.a 
                key={i} 
                href={p.link} 
                target="_blank" 
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="block p-6 rounded-none border border-white/20 hover:bg-white hover:text-black transition-all group"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className={`w-2 h-2 rounded-full ${p.color}`} />
                  <ArrowUpRight size={24} className="opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{p.name}</h3>
                <p className="text-[10px] text-[#71717a] group-hover:text-black/60 font-mono tracking-widest">{p.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* Mock Data Feed */}
          <div className="lg:col-span-7 border border-white/20 p-8 flex flex-col relative overflow-hidden">
            {isSearching && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <Search size={48} className="text-blue-500 animate-pulse mb-4" />
                <div className="text-blue-400 font-mono text-sm tracking-widest uppercase">Aggregating new roles...</div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-white/10 pb-6 gap-4">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                Live Feed <span className="bg-blue-600 text-white px-2 py-1 text-[10px] rounded-full">Bot Active</span>
              </h2>
              <div className="flex items-center gap-2 bg-[#111] px-4 py-2 border border-white/10 text-xs font-mono text-[#a1a1aa] w-full sm:w-64">
                <Search size={14} />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent outline-none w-full text-white" />
              </div>
            </div>
            
            <div className="space-y-4 flex-1">
              {jobs.map((job, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border border-white/10 hover:border-blue-500/50 transition-colors group">
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-[#111] flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-colors"><Building2 size={20} className="text-[#a1a1aa] group-hover:text-blue-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold tracking-tight text-white">{job.title}</h4>
                      <div className="text-[10px] text-[#71717a] font-mono mt-1 group-hover:text-blue-300/70">via {job.via} • {job.time}</div>
                    </div>
                  </div>
                  <a href={job.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer text-center block">AUTO APPLY IN PROGRESS</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
