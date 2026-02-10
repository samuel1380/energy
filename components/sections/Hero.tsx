import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { MaskText } from '../ui/MaskText';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-32 items-center overflow-hidden">
      {/* Fixed Video Background */}
      <div className="fixed inset-0 z-0 h-screen w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          {/* Prioritize local video if exists, fallback to CDN */}
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/04/18/36468-409953839_large.mp4" type="video/mp4" />
          <div className="w-full h-full bg-aether-black" />
        </video>
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Z-10: Gradient Overlay (fades into content) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-aether-black via-transparent to-black/20" />

      {/* Z-20: Content */}
      <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
            <MaskText className="text-white/60 text-sm md:text-base tracking-[0.2em] uppercase mb-4">
              The Future of Power
            </MaskText>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
              <MaskText delay={0.1}>UNLIMITED</MaskText>
              <MaskText delay={0.2} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                CLEAN ENERGY
              </MaskText>
            </h1>
        </div>

        <div className="max-w-xl text-white/70 text-lg md:text-xl font-light leading-relaxed">
          <MaskText delay={0.3}>
            Pioneering the transition to a sustainable grid with advanced
            infrastructure and AI-driven distribution networks.
          </MaskText>
        </div>

        <div className="mt-8">
            <MagneticButton className="cursor-pointer">
                <button className="group relative px-8 py-4 bg-white rounded-full flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10 text-black font-semibold text-lg">Discover Matrix</span>
                    <ArrowRight className="w-5 h-5 text-black relative z-10 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
            </MagneticButton>
        </div>
      </div>
    </section>
  );
};