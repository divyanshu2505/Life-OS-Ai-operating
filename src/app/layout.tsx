import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "LifeOS — AI Operating System Ecosystem",
  description: "9 premium AI-powered products connected into one cinematic operating system. By Divyanshu Mishra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">
        {/* Global Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel border-x-0 border-t-0 border-b border-[var(--border)]">
          <a href="/" className="text-xl font-display font-bold tracking-tight">
            LifeOS<span className="text-[var(--text3)] ml-2 text-sm font-normal">ecosystem</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text2)]">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
