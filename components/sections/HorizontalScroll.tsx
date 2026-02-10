import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wind, Droplets, Sun } from 'lucide-react';

const panels = [
  {
    title: "Aeolian Systems",
    subtitle: "Offshore Capabilities",
    description: "Harnessing the relentless power of ocean winds with our next-gen turbines.",
    icon: Wind,
    image: "https://picsum.photos/id/1036/1600/900", // Winter/Snow/Nature placeholder
    stats: "12.5 GW Capacity"
  },
  {
    title: "Hydro Kinetic",
    subtitle: "Fluid Dynamics",
    description: "Minimal impact dams utilizing advanced flow modulation technology.",
    icon: Droplets,
    image: "https://picsum.photos/id/10/1600/900", // Forest/Water placeholder
    stats: "8.2 GW Capacity"
  },
  {
    title: "Solar Arrays",
    subtitle: "Photovoltaic Matrix",
    description: "High-efficiency bifacial panels optimizing light absorption in all climates.",
    icon: Sun,
    image: "https://picsum.photos/id/98/1600/900", // Ocean/Light placeholder
    stats: "15.8 GW Capacity"
  }
];

export const HorizontalScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-aether-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {panels.map((panel, i) => (
            <div key={i} className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center px-4 md:px-20 overflow-hidden border-r border-white/5">
              
              {/* Background Parallax Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <motion.img 
                  style={{ 
                    x: useTransform(
                      scrollYProgress, 
                      [0, 1], 
                      ["-5%", "-25%"] // Gradual shift across the entire scroll
                    )
                  }}
                  src={panel.image} 
                  alt={panel.title} 
                  className="absolute top-0 left-0 w-[130%] h-full object-cover opacity-60"
                />
              </div>

              {/* Content Card */}
              <div className="relative z-20 w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                        <panel.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h4 className="text-aether-gray text-xl uppercase tracking-widest mb-2 font-medium">{panel.subtitle}</h4>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">{panel.title}</h2>
                        <p className="text-white/70 text-lg leading-relaxed">{panel.description}</p>
                    </div>
                    <div className="pt-8 border-t border-white/20">
                        <p className="text-3xl font-mono text-white">{panel.stats}</p>
                    </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};