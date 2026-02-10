import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Zap, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = ["Generation", "Infrastructure", "Impact", "Investors"];

  return (
    <motion.nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out flex items-center justify-between px-6 py-4",
        isScrolled 
          ? "top-4 w-[90%] md:w-[60%] rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" 
          : "top-0 w-full bg-transparent border-transparent"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
          <Zap className="w-5 h-5 text-white fill-current" />
        </div>
        <span className="font-bold tracking-tight text-lg text-white">AETHER</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="relative group overflow-hidden">
            <span className="block text-sm font-medium text-white/80 group-hover:text-white transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
              {link}
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        ))}
      </div>

      {/* Mobile Menu / CTA */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
          Get Started
        </button>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </motion.nav>
  );
};