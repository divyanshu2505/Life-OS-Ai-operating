"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

const products = [
  { id: '01', title: 'AI Chat Assistant', path: '/chat', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
  { id: '02', title: 'Revenue Engine', path: '/revenue', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80' },
  { id: '03', title: 'Video Summarizer', path: '/video', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1920&q=80' },
  { id: '04', title: 'Book Generator', path: '/books', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80' },
  { id: '05', title: 'Smart Navigation', path: '/navigation', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80' },
  { id: '06', title: 'Flight Tracking', path: '/flight', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80' },
  { id: '07', title: 'Cargo Freight', path: '/cargo', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1920&q=80' },
  { id: '08', title: 'Omni-Jobs Board', path: '/jobs', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80' },
  { id: '09', title: 'NeuroFit Gym', path: '/gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 150); // offset by half width of cursor image
      springY.set(e.clientY - 200); // offset by half height of cursor image
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <main className="min-h-screen bg-[#dcdcdc] text-[#111] overflow-hidden relative font-sans select-none">
      
      {/* Massive Image Cursor (Appears on Hover) */}
      <motion.div
          className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          animate={{
              opacity: hoveredProduct ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      >
          {products.map(p => (
              <img 
                key={p.id}
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: hoveredProduct === p.id ? 0.4 : 0 }}
              />
          ))}
      </motion.div>

      {/* Header */}
      <header className="p-8 flex justify-between items-start border-b border-black/10 relative z-10">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Life.OS</h1>
          <div className="text-xs font-mono font-bold mt-1">Divyanshu Mishra</div>
        </div>
        <div className="text-right text-xs font-mono font-bold max-w-xs">
          <p>ARTIFICIAL INTELLIGENCE PORTFOLIO</p>
          <p className="mt-2 text-black/50">NINE UNIFIED EXPERIENCES</p>
        </div>
      </header>

      {/* Massive Typographic Roster */}
      <div className="py-20 px-8 relative z-50">
        <div className="text-xs font-mono font-bold mb-12 uppercase border-b border-black/10 inline-block pb-2">Select Application Directory</div>
        
        <ul className="flex flex-col w-full">
          {products.map((product) => (
            <li 
              key={product.id} 
              className="border-b border-black/10 group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link href={product.path} className="flex flex-col md:flex-row md:items-baseline justify-between py-8 w-full">
                <div className="flex items-baseline gap-6">
                  <span className="text-sm font-mono font-bold opacity-30 group-hover:opacity-100 transition-opacity">{product.id}</span>
                  <span className="text-5xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter leading-none group-hover:italic transition-all duration-300">
                    {product.title}
                  </span>
                </div>
                <span className="text-sm font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-4 md:mt-0 text-black/50">LAUNCH SYSTEM &#8599;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
}
