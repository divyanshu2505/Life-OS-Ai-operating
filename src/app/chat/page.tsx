"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Cpu, Settings, MessageSquare, Bot, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [model, setModel] = useState("llama3");
  const ws = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom(); }, [messages]);

  // WebSocket Connection
  // Replaced with HTTP fetch to our new Next.js API route

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMsg,
          apiKey: "AIzaSyB4jujiCdGLIsQmArvt7wDdbegznwwDRR4" // Passed directly since you provided it!
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: `❌ Error: ${data.error}` }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: "⚠️ Cannot connect to Gemini API. Please check your internet connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden font-sans pt-[72px]">
      
      {/* Sidebar - Glassmorphism */}
      <aside className="w-72 hidden md:flex flex-col border-r border-[var(--border)] glass-panel relative z-10">
        <div className="p-6">
          <button className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-violet-500 text-white py-3 rounded-xl transition-colors font-medium">
            <Plus size={18} /> New Chat
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
          
          {/* Tool Hub */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[var(--text3)] font-mono mb-3 px-2">External AI Hub</div>
            <div className="space-y-1">
              <a href="https://claude.ai" target="_blank" className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--bg2)] text-xs text-[var(--text2)] hover:text-[var(--text)] transition-colors group">
                <div className="flex items-center gap-2"><Cpu size={14} className="text-orange-400" /> Vibe & Code</div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Claude</span>
              </a>
              <a href="https://gemini.google.com" target="_blank" className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--bg2)] text-xs text-[var(--text2)] hover:text-[var(--text)] transition-colors group">
                <div className="flex items-center gap-2"><Bot size={14} className="text-blue-400" /> Image Gen</div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Gemini</span>
              </a>
              <a href="https://seedance2.ai/" target="_blank" className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--bg2)] text-xs text-[var(--text2)] hover:text-[var(--text)] transition-colors group">
                <div className="flex items-center gap-2"><Settings size={14} className="text-rose-400" /> Video Gen</div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Seedance</span>
              </a>
              <a href="https://chatgpt.com" target="_blank" className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[var(--bg2)] text-xs text-[var(--text2)] hover:text-[var(--text)] transition-colors group">
                <div className="flex items-center gap-2"><MessageSquare size={14} className="text-emerald-400" /> Personal Chat</div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">ChatGPT</span>
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-widest text-[var(--text3)] font-mono mb-3 px-2">Local History</div>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--bg2)] text-sm text-[var(--text2)] hover:text-[var(--text)] transition-colors text-left truncate">
                <MessageSquare size={16} className="shrink-0" />
                <span>FastAPI WebSocket Setup</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[var(--border)]">
          <button className="flex items-center gap-3 text-sm text-[var(--text2)] hover:text-[var(--text)] px-2 py-2">
            <Settings size={16} /> Settings
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[100px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        {/* Chat Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-[var(--border)] glass-panel relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.15)] flex items-center justify-center text-[var(--primary)]">
              <Bot size={18} />
            </div>
            <div>
              <h2 className="font-medium text-sm">LifeOS Assistant</h2>
              <div className="flex items-center gap-1.5 text-[10px] text-[var(--text3)] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> System Online
              </div>
            </div>
          </div>
          
          {/* Model Selector */}
          <div className="flex items-center gap-2 text-xs border border-[var(--border)] rounded-full px-3 py-1.5 bg-[var(--bg2)]">
            <Cpu size={14} className="text-[var(--accent)]" />
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="bg-transparent border-none outline-none text-[var(--text2)] cursor-pointer appearance-none"
            >
              <option value="llama3">Llama 3 (Local)</option>
              <option value="mistral">Mistral (Local)</option>
            </select>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 relative z-10 scroll-smooth">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-0 animate-reveal-up">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(124,58,237,0.1)] flex items-center justify-center mb-6 text-[var(--primary)]">
                <Bot size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium mb-2">How can I help you today?</h3>
              <p className="text-[var(--text2)] text-sm max-w-md">I'm your local AI operating system. I run entirely on your hardware for complete privacy and maximum speed.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={msg.id} 
                className={`flex gap-4 max-w-4xl mx-auto ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                  msg.role === 'user' 
                    ? 'bg-[var(--bg2)] border border-[var(--border)] text-[var(--text2)]' 
                    : 'bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white'
                }`}>
                  {msg.role === 'user' ? '👤' : <Bot size={16} />}
                </div>
                
                {/* Message Body */}
                <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`px-5 py-3.5 text-[0.9rem] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[var(--bg2)] border border-[var(--border)] rounded-2xl rounded-tr-sm'
                      : 'bg-transparent rounded-2xl'
                  }`}>
                    {/* Basic Markdown Rendering (you'd use react-markdown here normally) */}
                    <div className="whitespace-pre-wrap font-sans">{msg.content}</div>
                  </div>
                  
                  {/* Streaming pulse indicator */}
                  {msg.isStreaming && (
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mt-2 rounded-full animate-pulse" />
                  )}
                </div>
              </motion.div>
            ))
          )}
          
          {isTyping && (
             <div className="flex gap-4 max-w-4xl mx-auto opacity-50">
               <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white">
                  <Bot size={16} />
               </div>
               <div className="flex items-center gap-1 mt-3">
                 <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce" />
                 <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce delay-100" />
                 <span className="w-1.5 h-1.5 bg-[var(--text3)] rounded-full animate-bounce delay-200" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-gradient-to-t from-[var(--bg)] to-transparent relative z-10">
          <form onSubmit={sendMessage} className="max-w-4xl mx-auto relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message LifeOS (try asking for Python code)..."
              className="w-full bg-[rgba(24,24,27,0.6)] backdrop-blur-md border border-[var(--border)] rounded-2xl py-4 pl-6 pr-14 outline-none text-sm focus:border-[var(--primary)] transition-colors shadow-lg placeholder:text-[var(--text3)]"
            />
            <button 
              type="submit" 
              disabled={!input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--primary)] hover:bg-violet-500 disabled:opacity-50 disabled:hover:bg-[var(--primary)] text-white rounded-xl transition-all"
            >
              <Send size={16} />
            </button>
          </form>
          <div className="text-center mt-3 text-[10px] text-[var(--text3)] font-mono">
            LifeOS AI can make mistakes. Consider verifying important information.
          </div>
        </div>
      </main>
    </div>
  );
}
