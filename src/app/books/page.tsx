"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Wand2, Link as LinkIcon, ExternalLink } from "lucide-react";

const questions = [
  { q: "What genre are you looking for?", options: ["Science Fiction", "Fantasy", "Mystery/Thriller", "Non-fiction/Self-help"] },
  { q: "What is your preferred reading length?", options: ["Short Stories (<200 pages)", "Standard (200-400 pages)", "Long (400-600 pages)", "Epic (600+ pages)"] },
  { q: "What pacing do you enjoy?", options: ["Slow burn and atmospheric", "Steady and detailed", "Fast-paced and action-packed", "Non-stop thrill ride"] },
  { q: "Which tone do you prefer?", options: ["Dark and gritty", "Lighthearted and humorous", "Emotional and dramatic", "Educational and informative"] },
  { q: "What setting appeals to you the most?", options: ["Futuristic / Sci-Fi worlds", "Historical / Past eras", "Modern day / Contemporary", "Magical / Fantasy realms"] },
  { q: "Who should the main character be?", options: ["A flawed anti-hero", "A brave chosen one", "An ordinary person", "An expert/professional"] },
  { q: "What theme interests you?", options: ["Technology & Future", "Love & Relationships", "Crime & Justice", "Personal Growth & Success"] },
  { q: "How complex should the plot be?", options: ["Straightforward", "A few twists", "Very complex & layered", "Mind-bending"] }
];

export default function BookGenerator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOption = (opt: string) => {
    setAnswers({ ...answers, [step]: opt });
    setStep(step + 1);
  };

  const revenueLinks = [
    { name: "Amazon Kindle Direct Publishing", url: "https://kdp.amazon.com/", desc: "Publish and sell your books globally" },
    { name: "Gumroad", url: "https://gumroad.com/", desc: "Sell ebooks directly to your audience" },
    { name: "Draft2Digital", url: "https://draft2digital.com/", desc: "Wide distribution to Apple, B&N, etc." },
    { name: "Patreon", url: "https://www.patreon.com/", desc: "Monetize your writing via subscriptions" },
    { name: "Substack", url: "https://substack.com/", desc: "Paid newsletters and serialization" },
    { name: "Kobo Writing Life", url: "https://writinglife.kobobooks.com/", desc: "Reach global readers on Kobo" },
    { name: "Smashwords", url: "https://www.smashwords.com/", desc: "Largest indie ebook distributor" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 p-8 pt-24 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80" alt="Books" className="w-full h-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        {/* Recommender Questionnaire UI */}
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-8 rounded-3xl border border-amber-500/20 relative overflow-hidden bg-black/60 backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-3">
              <Wand2 className="text-amber-500" /> Book Recommender Engine
            </h2>
            
            <div className="space-y-6">
              {step < questions.length ? (
                <>
                  <div className="opacity-50 text-xs tracking-widest uppercase mb-2">Question {step + 1} of {questions.length}</div>
                  <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                    <h3 className="text-xl mb-4 text-white font-medium">{questions[step].q}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {questions[step].options.map((t, idx) => (
                        <button key={idx} onClick={() => handleOption(t)} className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all text-sm font-medium">
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <Sparkles size={64} className="text-amber-500 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold mb-4 text-white">Generating Your Perfect Book Options...</h3>
                  <p className="text-stone-400 mb-8 max-w-md mx-auto">Based on your {questions.length} personalized answers, our AI is compiling a list of 40+ tailored recommendations.</p>
                  
                  <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl mb-8 text-left">
                    <h4 className="font-bold text-amber-500 mb-2">Your Preferences Profile:</h4>
                    <ul className="text-xs text-stone-300 space-y-1 font-mono">
                      {Object.entries(answers).map(([idx, ans]) => (
                        <li key={idx}>Q{Number(idx)+1}: {ans}</li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => { setStep(0); setAnswers({}); }} className="px-8 py-3 rounded-full border border-stone-600 hover:bg-stone-800 text-sm font-bold uppercase tracking-widest transition-colors">Reset Engine</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Revenue Generator References */}
        <div className="w-full md:w-[400px] space-y-6">
          <h3 className="text-stone-400 text-sm uppercase tracking-widest font-mono">Revenue & Publishing Platforms</h3>
          <div className="space-y-4">
            {revenueLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="block bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/5 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">{link.name}</h4>
                  <ExternalLink size={16} className="text-stone-500 group-hover:text-amber-400" />
                </div>
                <p className="text-xs text-stone-400">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
