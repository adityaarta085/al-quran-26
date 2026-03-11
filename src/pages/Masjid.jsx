import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const Masjid = () => {
  const masjids = [
    { name: 'Masjid Istiqlal', distance: '1.2 km', address: 'Jl. Taman Wijaya Kusuma, Jakarta', status: 'Buka', rating: '4.9' },
    { name: 'Masjid Agung Al-Azhar', distance: '3.5 km', address: 'Jl. Sisingamangaraja, Jakarta', status: 'Buka', rating: '4.8' },
    { name: 'Masjid Cut Meutia', distance: '2.1 km', address: 'Jl. Taman Cut Mutia, Jakarta', status: 'Buka', rating: '4.7' },
  ];

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/masjid+terdekat', '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Masjid Terdekat</h2>
        <button
          onClick={openGoogleMaps}
          className="px-6 py-2 bg-gold text-white rounded-xl font-bold text-sm flex items-center gap-2"
        >
          <MapPin size={16} /> Buka Maps
        </button>
      </div>

      <div className="space-y-4">
        {masjids.map((m, i) => (
          <div key={i} className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/10 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                <Navigation size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{m.name}</h4>
                <p className="text-sm text-gray-500">{m.address}</p>
                <div className="flex gap-4 mt-2">
                   <span className="text-xs font-bold text-green-500 flex items-center gap-1"><Clock size={12} /> {m.status}</span>
                   <span className="text-xs font-bold text-gold flex items-center gap-1">★ {m.rating}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
               <button className="flex-1 md:flex-none px-4 py-2 border border-gray-100 dark:border-white/10 rounded-xl text-sm font-bold"><Phone size={16} className="mx-auto" /></button>
               <button className="flex-[2] md:flex-none px-6 py-2 bg-[#0D7377] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                 {m.distance} <ChevronRight size={16} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masjid;
