import React, { useState, useEffect } from 'react';
import { Compass, Navigation2, Globe } from 'lucide-react';

const Qibla = () => {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.webkitCompassHeading) {
        setHeading(e.webkitCompassHeading);
      } else if (e.alpha) {
        setHeading(360 - e.alpha);
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Arah Kiblat</h2>
        <p className="text-gray-500 mt-2">Pegang ponsel sejajar dengan lantai</p>
      </div>

      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-gray-100 dark:border-white/10 rounded-full"></div>

        {/* Compass Face */}
        <div
          className="absolute inset-4 rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{ transform: `rotate(${-heading}deg)` }}
        >
          <div className="w-full h-full relative">
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-red-500">U</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold">S</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 font-bold">T</span>
            <span className="absolute left-2 top-1/2 -translate-y-1/2 font-bold">B</span>

            {/* Kaaba Marker */}
            <div
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
               style={{ transform: 'rotate(295deg) translateY(-120px)' }}
            >
               <Navigation2 className="text-gold fill-gold" size={32} />
               <div className="bg-black text-white text-[10px] px-2 py-1 rounded absolute -top-8 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">
                  KABAH (295°)
               </div>
            </div>
          </div>
        </div>

        {/* Center Point */}
        <div className="w-4 h-4 bg-gold rounded-full z-10 shadow-lg border-2 border-white"></div>

        {/* Device Marker */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold">
          <div className="w-1 h-8 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-center">
          <Globe className="mx-auto text-gold mb-2" size={24} />
          <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Jarak</p>
          <p className="text-xl font-bold">7,912 km</p>
        </div>
        <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 text-center">
          <Compass className="mx-auto text-gold mb-2" size={24} />
          <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Arah</p>
          <p className="text-xl font-bold">295.12°</p>
        </div>
      </div>
    </div>
  );
};

export default Qibla;
