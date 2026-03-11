import React from 'react';
import { BookOpen, Star, Info, ShieldCheck } from 'lucide-react';

const Pustaka = () => {
  const sections = [
    {
      title: 'Rukun Islam',
      icon: ShieldCheck,
      color: 'text-green-500',
      items: ['Syahadat', 'Shalat', 'Zakat', 'Puasa', 'Haji']
    },
    {
      title: 'Rukun Iman',
      icon: Star,
      color: 'text-blue-500',
      items: ['Iman kepada Allah', 'Malaikat', 'Kitab-kitab', 'Rasul', 'Hari Kiamat', 'Qada & Qadar']
    },
    {
      title: 'Adab & Akhlak',
      icon: Info,
      color: 'text-gold',
      items: ['Adab Makan', 'Adab Tidur', 'Berbakti Orang Tua', 'Kejujuran']
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Perpustakaan Islami</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((sec, i) => (
          <div key={i} className="bg-white dark:bg-white/5 p-6 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 ${sec.color}`}>
                <sec.icon size={24} />
              </div>
              <h3 className="font-bold">{sec.title}</h3>
            </div>
            <ul className="space-y-4">
              {sec.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 py-3 border border-gray-100 dark:border-white/5 rounded-xl text-xs font-bold text-gold">Baca Selengkapnya</button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
        <h3 className="font-bold mb-6">Asmaul Husna (99 Nama Allah)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {[
             { a: 'الرَّحْمَنُ', l: 'Ar-Rahman', t: 'Maha Pengasih' },
             { a: 'الرَّحِيمُ', l: 'Ar-Rahim', t: 'Maha Penyayang' },
             { a: 'الْمَلِكُ', l: 'Al-Malik', t: 'Maha Merajai' },
             { a: 'الْقُدُّوسُ', l: 'Al-Quddus', t: 'Maha Suci' },
             { a: 'السَّلاَمُ', l: 'As-Salam', t: 'Maha Sejahtera' },
           ].map((item, i) => (
             <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-center">
               <p className="font-amiri text-2xl text-gold mb-1">{item.a}</p>
               <p className="font-bold text-xs">{item.l}</p>
               <p className="text-[10px] text-gray-500">{item.t}</p>
             </div>
           ))}
        </div>
        <button className="w-full mt-6 text-gold font-bold text-sm">Tampilkan Semua 99 Nama</button>
      </div>
    </div>
  );
};

export default Pustaka;
