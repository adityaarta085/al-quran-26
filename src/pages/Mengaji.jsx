import React from 'react';
import { Book, PlayCircle } from 'lucide-react';

const letters = [
  'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ',
  'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص',
  'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق',
  'ك', 'ل', 'م', 'ن', 'و', 'ه', 'ي'
];

const Mengaji = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Belajar Mengaji</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
          <h3 className="font-bold mb-6 flex items-center gap-2"><Book size={18} className="text-gold" /> Huruf Hijaiyah</h3>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
            {letters.map((char, i) => (
              <button
                key={i}
                className="aspect-square flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-xl text-3xl font-amiri hover:bg-gold/10 hover:text-gold transition-all border border-transparent hover:border-gold/20"
              >
                {char}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <h3 className="font-bold mb-6">Materi Tajwid Dasar</h3>
            <div className="space-y-4">
              {['Idzhar', 'Ikhfa', 'Iqlab', 'Idgham', 'Qolqolah'].map((materi, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-2xl group cursor-pointer hover:bg-gold/5 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold text-xs">{i+1}</div>
                    <span className="font-medium">{materi}</span>
                  </div>
                  <PlayCircle size={20} className="text-gray-300 group-hover:text-gold" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mengaji;
