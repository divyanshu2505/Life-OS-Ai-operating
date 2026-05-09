"use client";
import { motion } from "framer-motion";
import { PlayCircle, ExternalLink, Video, DownloadCloud } from "lucide-react";

export default function VideoSummarizer() {
  const externalLinks = [
    { name: "Eightify", url: "https://eightify.app/", desc: "YouTube Summary with AI" },
    { name: "Summarize.tech", url: "https://www.summarize.tech/", desc: "AI video summaries" },
    { name: "YouTube Summary by Glasp", url: "https://glasp.co/youtube-summary", desc: "Browser extension for transcripts & summaries" },
    { name: "Mindgrasp", url: "https://mindgrasp.ai/", desc: "Video & audio learning assistant" },
    { name: "Notta", url: "https://www.notta.ai/", desc: "Audio/Video transcription and summary" },
    { name: "SkipVideo", url: "https://skipvideo.ai/", desc: "Instantly summarize YouTube videos" },
    { name: "ChatYoutube", url: "https://chatyoutube.com/", desc: "Chat with YouTube videos" },
  ];

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-300 p-8 pt-24 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1920&q=80" alt="Video Timeline" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[#0c0a09]/80 backdrop-blur-md" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-4">
            Video NLP <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-rose-700">Summarizer</span>
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">Access top-tier external NLP-driven video summarization, flashcard generation, and translation platforms.</p>
        </header>

        {/* Settings Dashboard */}
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><Video className="text-rose-500" /> Recommended External Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {externalLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="block p-6 rounded-2xl border border-stone-800 bg-stone-900/50 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{link.name}</h4>
                    <ExternalLink size={18} className="text-stone-500 group-hover:text-rose-400" />
                  </div>
                  <p className="text-sm text-stone-400">{link.desc}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
