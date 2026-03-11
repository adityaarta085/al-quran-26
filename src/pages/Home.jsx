import React, { useState, useEffect } from 'react';
import { getGreeting, getHijriDate, getFormattedDate } from '../utils/dateUtils';
import { dailyVerses, dailyHadiths } from '../data/dailyContent';
import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { Clock, BookOpen, Heart, CheckCircle2, ChevronRight } from 'lucide-react';
import { format, differenceInSeconds } from 'date-fns';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white dark:bg-white/5 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex items-center space-x-4">
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </div>
);

const Home = () => {
  const prayerData = usePrayerTimes();
  const [verse, setVerse] = useState(dailyVerses[0]);
  const [hadith, setHadith] = useState(dailyHadiths[0]);
  const [habits, setHabits] = useState({
    subuh: false, dzuhur: false, ashar: false, maghrib: false, isya: false, quran: false
  });
  const [countdown, setCountdown] = useState('--:--:--');

  useEffect(() => {
    const day = new Date().getDate();
    setVerse(dailyVerses[day % dailyVerses.length]);
    setHadith(dailyHadiths[day % dailyHadiths.length]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (prayerData?.timeForNext) {
        const diff = differenceInSeconds(prayerData.timeForNext, new Date());
        if (diff > 0) {
          const hours = Math.floor(diff / 3600);
          const minutes = Math.floor((diff % 3600) / 60);
          const seconds = diff % 60;
          setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        } else {
          setCountdown('Waktunya Shalat!');
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [prayerData]);

  const toggleHabit = (id) => {
    setHabits(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 pb-12">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assalamualaikum!</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{getGreeting()}, Semoga hari Anda penuh berkah.</p>
        </div>
        <div className="text-right">
          <p className="text-gold font-bold text-lg">{getHijriDate()}</p>
          <p className="text-sm text-gray-500">{getFormattedDate()}</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gold font-medium uppercase tracking-widest text-sm">Shalat Berikutnya</p>
            <h3 className="text-5xl font-bold mt-2 capitalize">{prayerData?.next || '...'}</h3>
            <p className="text-2xl mt-2 opacity-80">
              {prayerData?.timeForNext ? format(prayerData.timeForNext, 'HH:mm') : '--:--'}
            </p>
          </div>

          <div className="flex flex-col items-center">
             <div className="w-40 h-40 rounded-full border-4 border-gold/30 flex items-center justify-center relative">
                <div className="text-center">
                  <Clock size={32} className="mx-auto text-gold mb-1" />
                  <p className="text-xs opacity-70">Sisa Waktu</p>
                  <p className="text-xl font-mono font-bold">{countdown}</p>
                </div>
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="76" fill="none" stroke="currentColor" strokeWidth="4" className="text-gold" strokeDasharray="477" strokeDashoffset="120" />
                </svg>
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Streak" value="12 Hari" icon={Heart} color="bg-red-500" />
        <StatCard title="Khatam" value="45%" icon={BookOpen} color="bg-blue-500" />
        <StatCard title="Dzikir" value="1.2k" icon={CheckCircle2} color="bg-green-500" />
        <StatCard title="Target" value="2 Juz" icon={BookOpen} color="bg-purple-500" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold flex items-center gap-2"><BookOpen size={18} className="text-gold" /> Ayat Hari Ini</h4>
              <span className="text-xs text-gray-500">{verse.ref}</span>
            </div>
            <p className="text-2xl font-amiri text-right leading-loose mb-4" dir="rtl">{verse.text}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{verse.translation}"</p>
          </div>

          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold flex items-center gap-2"><Heart size={18} className="text-gold" /> Hadits Hari Ini</h4>
              <span className="text-xs text-gray-500">{hadith.ref}</span>
            </div>
            <p className="text-xl font-amiri text-right leading-loose mb-4" dir="rtl">{hadith.text}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{hadith.translation}"</p>
          </div>
        </div>

        <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
          <h4 className="font-bold mb-6 flex items-center gap-2"><CheckCircle2 size={18} className="text-gold" /> Progress Ibadah</h4>
          <div className="space-y-4">
            {Object.keys(habits).map((habit) => (
              <button
                key={habit}
                onClick={() => toggleHabit(habit)}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="capitalize font-medium">{habit}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${habits[habit] ? 'bg-gold border-gold' : 'border-gray-300 dark:border-gray-600'}`}>
                  {habits[habit] && <CheckCircle2 size={14} className="text-white" />}
                </div>
              </button>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-gold font-bold text-sm flex items-center justify-center gap-2">
            Lihat Statistik Lengkap <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
