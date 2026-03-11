import React, { useState } from 'react';
import { Calculator, Info, CheckCircle2 } from 'lucide-react';

const Zakat = () => {
  const [totalHarta, setTotalHarta] = useState('');
  const [hargaEmas, setHargaEmas] = useState(1200000); // Rp / gram
  const nisab = hargaEmas * 85;
  const zakat = totalHarta >= nisab ? totalHarta * 0.025 : 0;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Kalkulator Zakat Maal</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500">Total Harta (Tabungan/Emas/Saham)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">Rp</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl border-none focus:ring-2 focus:ring-gold outline-none font-bold text-lg"
                  value={totalHarta}
                  onChange={(e) => setTotalHarta(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500">Harga Emas Saat Ini (per gram)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">Rp</span>
                <input
                  type="number"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-white/5 rounded-2xl border-none focus:ring-2 focus:ring-gold outline-none font-bold text-lg"
                  value={hargaEmas}
                  onChange={(e) => setHargaEmas(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="p-4 bg-gold/5 rounded-2xl border border-gold/20 flex items-start gap-3">
              <Info className="text-gold shrink-0" size={20} />
              <div className="text-xs text-gold font-medium leading-relaxed">
                Nisab Zakat Maal adalah setara dengan 85 gram emas.
                Saat ini nisab Anda adalah: <span className="font-bold">Rp {nisab.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] p-8 rounded-[2rem] text-white shadow-xl text-center space-y-4">
            <Calculator size={48} className="mx-auto text-gold mb-2" />
            <p className="text-gold font-bold uppercase tracking-widest text-sm">Total Zakat Anda</p>
            <h3 className="text-4xl font-bold">Rp {zakat.toLocaleString('id-ID')}</h3>
            <p className="text-xs opacity-70">Wajib dibayarkan jika harta telah mencapai haul (1 tahun)</p>
          </div>

          <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10">
            <h4 className="font-bold mb-4">8 Golongan Penerima Zakat</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Fakir', 'Miskin', 'Amil', 'Muallaf', 'Riqab', 'Gharimin', 'Fisabilillah', 'Ibnu Sabil'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 size={14} className="text-gold" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zakat;
