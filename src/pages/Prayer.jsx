import React from 'react';
import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { format } from 'date-fns';
import { Clock, MapPin, Bell, Info } from 'lucide-react';

const PrayerCard = ({ name, time, isActive }) => (
  <div className={`p-6 rounded-3xl border transition-all ${
    isActive
      ? 'bg-gold text-white shadow-lg border-gold scale-105 z-10'
      : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10'
  }`}>
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-bold text-lg">{name}</h4>
      <Bell size={18} className={isActive ? 'text-white' : 'text-gold'} />
    </div>
    <p className="text-3xl font-bold">{time ? format(time, 'HH:mm') : '--:--'}</p>
    {isActive && <p className="text-xs mt-2 font-medium opacity-90 uppercase tracking-widest">Sekarang</p>}
  </div>
);

const Prayer = () => {
  const prayerData = usePrayerTimes();

  const prayers = [
    { id: 'fajr', name: 'Subuh', time: prayerData?.fajr },
    { id: 'dhuhr', name: 'Dzuhur', time: prayerData?.dhuhr },
    { id: 'asr', name: 'Ashar', time: prayerData?.asr },
    { id: 'maghrib', name: 'Maghrib', time: prayerData?.maghrib },
    { id: 'isha', name: 'Isya', time: prayerData?.isha },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Waktu Shalat</h2>
          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
            <MapPin size={14} /> Jakarta, Indonesia (Otomatis)
          </p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-gold/10 text-gold rounded-xl font-bold text-sm">Metode: Kemenag</button>
           <button className="px-4 py-2 bg-gold/10 text-gold rounded-xl font-bold text-sm">24 Jam</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-8">
        {prayers.map((prayer) => (
          <PrayerCard
            key={prayer.id}
            name={prayer.name}
            time={prayer.time}
            isActive={prayerData?.next === prayer.id}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
          <h4 className="font-bold mb-6 flex items-center gap-2"><Info size={18} className="text-gold" /> Sunnah & Lainnya</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
              <span className="text-gray-500">Imsak</span>
              <span className="font-bold">{prayerData?.imsak ? format(prayerData.imsak, 'HH:mm') : '--:--'}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
              <span className="text-gray-500">Terbit (Sunrise)</span>
              <span className="font-bold">{prayerData?.sunrise ? format(prayerData.sunrise, 'HH:mm') : '--:--'}</span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
              <span className="text-gray-500">Sepertiga Malam Terakhir</span>
              <span className="font-bold">{prayerData?.lastThird ? format(prayerData.lastThird, 'HH:mm') : '--:--'}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] p-8 rounded-[2rem] text-white">
          <h4 className="font-bold mb-6">Niat Shalat</h4>
          <div className="space-y-6">
            <div>
              <p className="font-amiri text-2xl text-right mb-2">أُصَلِّي فَرْضَ الظُّهْرِ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلَّهِ تَعَالَى</p>
              <p className="text-xs text-gold font-medium mb-1 italic">Ushollii fardhodh dhuhr...</p>
              <p className="text-xs opacity-70">"Aku niat melakukan shalat fardhu dzuhur..."</p>
            </div>
          </div>
          <button className="w-full mt-8 py-4 border border-white/20 rounded-2xl font-bold hover:bg-white/5 transition-colors">
            Lihat Semua Niat & Doa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prayer;
