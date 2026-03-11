import React from 'react';
import { Shield, Map, BookOpen, CheckCircle } from 'lucide-react';

const Haji = () => {
  const steps = [
    { title: 'Ihram', desc: 'Niat dan mengenakan pakaian ihram dari Miqat.' },
    { title: 'Wukuf', desc: 'Berdiam diri di Arafah pada 9 Dzulhijjah.' },
    { title: 'Muzdalifah', desc: 'Mabit (menginap) dan mencari kerikil.' },
    { title: 'Lempar Jumrah', desc: 'Melempar kerikil di Mina.' },
    { title: 'Thawaf Ifadhah', desc: 'Mengelilingi Ka\'bah 7 kali.' },
    { title: 'Sa\'i', desc: 'Lari-lari kecil antara Shafa dan Marwah.' },
    { title: 'Tahallul', desc: 'Mencukur atau memotong rambut.' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Panduan Haji & Umrah</h2>

      <div className="bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] p-8 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold">Manasik Digital</h3>
          <p className="opacity-80 leading-relaxed">Panduan lengkap tata cara ibadah Haji dan Umrah sesuai sunnah Rasulullah SAW.</p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gold text-white rounded-xl font-bold text-sm">Mulai Panduan</button>
            <button className="px-6 py-2 bg-white/10 rounded-xl font-bold text-sm">Download PDF</button>
          </div>
        </div>
        <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center">
          <Shield size={64} className="text-gold" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
          <h4 className="font-bold mb-6 flex items-center gap-2"><Map size={18} className="text-gold" /> Rukun Haji</h4>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-gold/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-gold text-white flex items-center justify-center font-bold text-sm shrink-0">{i+1}</div>
                <div>
                  <p className="font-bold text-sm">{step.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <h4 className="font-bold mb-6 flex items-center gap-2"><BookOpen size={18} className="text-gold" /> Doa-doa Haji</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                <p className="font-bold text-sm mb-2">Talbiyah</p>
                <p className="font-amiri text-xl text-right mb-2">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ ...</p>
                <p className="text-[10px] text-gray-500">"Labbaikallahumma Labbaik..."</p>
              </div>
              <button className="w-full text-gold font-bold text-sm">Lihat Semua Doa</button>
            </div>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <h4 className="font-bold mb-6 flex items-center gap-2"><CheckCircle size={18} className="text-gold" /> Checklist Persiapan</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Paspor', 'Vaksin', 'Kain Ihram', 'Obat-obatan', 'Buku Doa', 'Uang Riyal'].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-4 h-4 rounded border border-gray-300"></div> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haji;
