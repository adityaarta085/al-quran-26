import React, { useState } from 'react';
import { RotateCcw, Volume2, ChevronRight, Heart } from 'lucide-react';

const Dzikir = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [vibrate, setVibrate] = useState(true);

  const playClick = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
  };

  const handleCount = () => {
    if (count < target) {
      setCount(prev => prev + 1);
      playClick();
      if (vibrate && navigator.vibrate) navigator.vibrate(50);
    } else {
      setCount(1);
      playClick();
    }
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Tasbih Digital</h2>
        <div className="flex gap-2">
           <button onClick={() => setVibrate(!vibrate)} className={`p-2 rounded-lg ${vibrate ? 'text-gold bg-gold/10' : 'text-gray-400'}`}><Volume2 size={20} /></button>
           <button onClick={() => setCount(0)} className="p-2 text-gray-400"><RotateCcw size={20} /></button>
        </div>
      </div>

      <div className="bg-white dark:bg-white/5 p-8 rounded-[3rem] border border-gray-100 dark:border-white/10 text-center space-y-8">
        <div className="space-y-2">
          <p className="text-gray-500 font-medium">Subhanallah</p>
          <p className="font-amiri text-4xl text-gold">سُبْحَانَ ٱللَّٰهِ</p>
        </div>

        <div
          onClick={handleCount}
          className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] shadow-2xl flex items-center justify-center cursor-pointer active:scale-95 transition-transform relative group"
        >
          <div className="absolute inset-4 rounded-full border-2 border-white/10 group-hover:border-gold/30 transition-colors"></div>
          <div className="text-center">
            <span className="text-6xl font-bold text-white font-mono">{count}</span>
            <p className="text-gold font-bold mt-2">/ {target}</p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {[33, 99, 100, 1000].map(t => (
            <button
              key={t}
              onClick={() => {setTarget(t); setCount(0);}}
              className={`px-6 py-2 rounded-xl border font-bold text-sm ${target === t ? 'bg-gold text-white border-gold' : 'border-gray-100 dark:border-white/10'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold flex items-center gap-2"><Heart size={18} className="text-gold" /> Rekomendasi Dzikir</h3>
        {[
          { id: 1, name: 'Dzikir Pagi', count: '10 Doa', time: 'Setelah Subuh' },
          { id: 2, name: 'Dzikir Petang', count: '12 Doa', time: 'Setelah Ashar' },
          { id: 3, name: 'Dzikir Setelah Shalat', count: '5 Doa', time: 'Setiap Shalat' },
        ].map(item => (
          <button key={item.id} className="w-full flex items-center justify-between p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-gold transition-colors">
            <div className="text-left">
              <h4 className="font-bold">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.count} • {item.time}</p>
            </div>
            <ChevronRight size={20} className="text-gold" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dzikir;
