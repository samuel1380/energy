import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { HorizontalScroll } from './components/sections/HorizontalScroll';
import { Dashboard } from './components/sections/Dashboard';
import { Footer } from './components/sections/Footer';

function App() {
  
  // Initialize Lenis Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-aether-black min-h-screen text-white selection:bg-white/30">
      
      {/* Global Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]"
        style={{
            // Note: Assuming noise.png exists or using a base64 fallback would be ideal.
            // Using a simple CSS noise generator for reliability in this demo.
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <div className='relative z-10 bg-aether-black'>
          <HorizontalScroll />
          <Dashboard />
        </div>
        <Footer />
      </main>
      
    </div>
  );
}

export default App;