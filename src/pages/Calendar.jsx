import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Calendar = () => {
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const events = [
    { date: '1 Ramadhan', title: 'Awal Puasa' },
    { date: '17 Ramadhan', title: 'Nuzulul Quran' },
    { date: '1 Syawal', title: 'Hari Raya Idul Fitri' },
    { date: '10 Dzulhijjah', title: 'Hari Raya Idul Adha' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Kalender Hijriah</h2>
        <div className="flex items-center gap-4 bg-white dark:bg-white/5 p-2 rounded-xl border border-gray-100 dark:border-white/10">
          <button className="p-1 hover:text-gold"><ChevronLeft size={20} /></button>
          <span className="font-bold text-sm px-4">Ramadhan 1445 H</span>
          <button className="p-1 hover:text-gold"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map(d => <div key={d} className="text-center text-xs font-bold text-gray-400 py-2">{d}</div>)}
            {[...Array(30)].map((_, i) => (
              <div key={i} className={`aspect-square flex flex-col items-center justify-center rounded-2xl border ${
                i + 1 === 17 ? 'bg-gold/10 border-gold text-gold font-bold' : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/5'
              }`}>
                <span className="text-sm">{i + 1}</span>
                <span className="text-[10px] opacity-50">{i + 10} Mar</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <h3 className="font-bold mb-6 flex items-center gap-2"><Star size={18} className="text-gold" /> Hari Penting</h3>
            <div className="space-y-4">
              {events.map((e, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                  <div>
                    <p className="font-bold text-sm">{e.title}</p>
                    <p className="text-xs text-gray-500">{e.date}</p>
                  </div>
                  <div className="text-xs font-bold text-gold">12 Hari Lagi</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0D7377] p-8 rounded-[2rem] text-white">
            <h4 className="font-bold mb-2">Amalan Bulan Ini</h4>
            <ul className="text-xs space-y-3 opacity-90">
              <li>• Puasa Wajib Ramadhan</li>
              <li>• Shalat Tarawih & Witir</li>
              <li>• Memperbanyak Sedekah</li>
              <li>• Membaca Al-Quran</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
