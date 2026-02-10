import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// --- Animated Counter Hook ---
const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "circOut" });
    return controls.stop;
  }, [value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest.toFixed(1));
    });
    return unsubscribe;
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
};

// --- Brazil Map SVG Component (Simplified Abstract Representation) ---
const BrazilMap = () => {
    // A simplified abstract coordinate set for "dots" representing coverage
    const dots = [
        { cx: 40, cy: 30 }, { cx: 50, cy: 25 }, { cx: 60, cy: 35 }, 
        { cx: 35, cy: 45 }, { cx: 55, cy: 50 }, { cx: 45, cy: 60 },
        { cx: 65, cy: 65 }, { cx: 55, cy: 75 }, { cx: 30, cy: 55 },
        { cx: 70, cy: 45 }
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
            <h3 className="absolute top-6 left-6 text-sm uppercase tracking-widest text-white/50">Active Regions</h3>
            <svg viewBox="0 0 100 100" className="w-full h-full max-w-[300px] opacity-80">
                {/* Abstract Outline Placeholder */}
                <path d="M30,20 L70,20 L80,50 L60,90 L20,70 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                
                {dots.map((dot, i) => (
                    <g key={i}>
                         <circle cx={dot.cx} cy={dot.cy} r="1.5" className="fill-white/20" />
                         <motion.circle 
                            cx={dot.cx} cy={dot.cy} r="3" 
                            className="fill-green-400"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
                            transition={{ 
                                duration: 2 + Math.random(), 
                                repeat: Infinity, 
                                delay: Math.random() * 2 
                            }}
                         />
                    </g>
                ))}
            </svg>
        </div>
    );
};

// --- Line Chart Component ---
const LiveChart = () => {
    return (
        <div className="relative w-full h-full p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col justify-end">
             <h3 className="absolute top-6 left-6 text-sm uppercase tracking-widest text-white/50">Output Efficiency</h3>
             <svg className="w-full h-40 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                <motion.path
                    d="M0,35 Q10,32 20,25 T40,20 T60,15 T80,10 T100,5"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M0,35 Q10,32 20,25 T40,20 T60,15 T80,10 T100,5 L100,40 L0,40 Z"
                    fill="url(#gradient)"
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 1 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4ade80" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
             </svg>
        </div>
    )
}

export const Dashboard: React.FC = () => {
  return (
    <section className="py-32 bg-aether-black relative z-10 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Real-time Impact</h2>
            <p className="text-white/60 max-w-2xl">Monitoring our global energy matrix and efficiency distribution across active sectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[400px]">
            {/* Card 1: Map */}
            <BrazilMap />

            {/* Card 2: Chart */}
            <LiveChart />

            {/* Card 3: Metrics */}
            <div className="bg-white/5 rounded-3xl border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                    <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Total Capacity</h3>
                    <div className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
                        <AnimatedCounter value={4.5} suffix="GW" />
                    </div>
                 </div>

                 <div className="relative z-10">
                    <h3 className="text-sm uppercase tracking-widest text-white/50 mb-2">Carbon Offset</h3>
                    <div className="text-4xl md:text-5xl font-light text-white/90">
                        <AnimatedCounter value={89.2} suffix="Mt" />
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};