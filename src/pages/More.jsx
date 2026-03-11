import React, { useState } from 'react';
import {
  Calculator, Calendar as CalendarIcon, GraduationCap, Users,
  Settings as SettingsIcon, Heart, Shield, BookOpen, MessageSquare,
  Gift, LayoutGrid, Award, ChevronRight
} from 'lucide-react';
import Dzikir from './Dzikir';
import Zakat from './Zakat';
import Pustaka from './Pustaka';
import Mengaji from './Mengaji';
import Masjid from './Masjid';
import Settings from './Settings';
import Haji from './Haji';
import Calendar from './Calendar';

const MenuItem = ({ icon: Icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-gold transition-all group w-full"
  >
    <div className={`p-4 rounded-2xl ${color} text-white group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <span className="font-bold text-sm text-center">{label}</span>
  </button>
);

const More = () => {
  const [activeSubPage, setActiveSubPage] = useState(null);

  const menuItems = [
    { id: 'zakat', icon: Calculator, label: 'Kalkulator Zakat', color: 'bg-green-500' },
    { id: 'dzikir', icon: Heart, label: 'Doa & Dzikir', color: 'bg-red-500' },
    { id: 'pustaka', icon: BookOpen, label: 'Perpustakaan', color: 'bg-indigo-500' },
    { id: 'mengaji', icon: GraduationCap, label: 'Belajar Mengaji', color: 'bg-purple-500' },
    { id: 'calendar', icon: CalendarIcon, label: 'Kalender Hijriah', color: 'bg-blue-500' },
    { id: 'haji', icon: Shield, label: 'Panduan Haji', color: 'bg-orange-500' },
    { id: 'masjid', icon: Users, label: 'Cari Masjid', color: 'bg-teal-500' },
    { id: 'settings', icon: SettingsIcon, label: 'Pengaturan', color: 'bg-gray-500' },
    { id: 'asmaul', icon: Award, label: 'Asmaul Husna', color: 'bg-gold' },
    { id: 'kajian', icon: MessageSquare, label: 'Kajian Online', color: 'bg-pink-500' },
    { id: 'infaq', icon: Gift, label: 'Infaq & Sedekah', color: 'bg-amber-500' },
    { id: 'habit', icon: LayoutGrid, label: 'Habit Tracker', color: 'bg-slate-500' },
  ];

  const renderSubPage = () => {
    switch (activeSubPage) {
      case 'dzikir': return <Dzikir />;
      case 'zakat': return <Zakat />;
      case 'pustaka': return <Pustaka />;
      case 'mengaji': return <Mengaji />;
      case 'masjid': return <Masjid />;
      case 'settings': return <Settings />;
      case 'haji': return <Haji />;
      case 'calendar': return <Calendar />;
      default: return null;
    }
  };

  if (activeSubPage) {
    return (
      <div className="space-y-6">
        <button onClick={() => setActiveSubPage(null)} className="text-gold flex items-center gap-2 font-medium">
          <ChevronRight size={20} className="rotate-180" /> Kembali
        </button>
        {renderSubPage() || (
          <div className="bg-white dark:bg-white/5 p-20 rounded-[3rem] text-center border border-gray-100 dark:border-white/10">
            <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <LayoutGrid size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Fitur Segera Hadir</h3>
            <p className="text-gray-500">Kami sedang menyiapkan fitur terbaik untuk Anda.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Fitur Lengkap</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            {...item}
            onClick={() => setActiveSubPage(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default More;
