import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer 
        className="relative h-[80vh] bg-black clip-path-footer"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
        <div className="fixed bottom-0 h-[80vh] w-full bg-black flex flex-col justify-between p-6 md:p-12">
            
            {/* Massive Background Text */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-end overflow-hidden pointer-events-none select-none">
                <h1 className="text-[12vw] md:text-[18vw] leading-[0.8] font-bold tracking-tighter text-slate-900 whitespace-nowrap">
                    AETHER ENERGY
                </h1>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 pt-20">
                <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold mb-6">Contact</h3>
                    <div className="flex flex-col gap-4 text-lg text-white/60">
                         <a href="#" className="hover:text-white transition-colors">hello@aether.energy</a>
                         <a href="#" className="hover:text-white transition-colors">+55 (11) 9999-9999</a>
                         <p>Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-6">Sitemap</h3>
                    <ul className="space-y-3 text-white/60">
                        {['About', 'Technology', 'Careers', 'Press', 'Investors'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300 block">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                     <h3 className="text-xl font-medium mb-6">Social</h3>
                     <ul className="space-y-3 text-white/60">
                        {['LinkedIn', 'Twitter', 'Instagram', 'Github'].map(item => (
                            <li key={item}>
                                <a href="#" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="relative z-10 flex justify-between items-end pb-4 text-xs text-white/30 uppercase tracking-widest">
                <span>© 2024 Aether Energy Corp.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    </footer>
  );
};