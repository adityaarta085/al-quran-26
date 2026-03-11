import React, { useState, useEffect, useRef } from 'react';
import { Search, Book, Play, Pause, Bookmark, ChevronRight } from 'lucide-react';

const Quran = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    fetch('https://equran.id/api/v2/surat')
      .then(res => res.json())
      .then(data => {
        setSurahs(data.data);
        setLoading(false);
      });
  }, []);

  const filteredSurahs = surahs.filter(s =>
    s.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
    s.arti.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedSurah) {
    return <SurahView surahId={selectedSurah} onBack={() => setSelectedSurah(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Al-Qur'an</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Cari Surah..."
            className="pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-gold outline-none w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 dark:bg-white/5 rounded-2xl shimmer"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurahs.map((surah) => (
            <button
              key={surah.nomor}
              onClick={() => setSelectedSurah(surah.nomor)}
              className="flex items-center justify-between p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-gold dark:hover:border-gold transition-all text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 text-gold rounded-lg flex items-center justify-center font-bold text-sm">
                  {surah.nomor}
                </div>
                <div>
                  <h4 className="font-bold">{surah.namaLatin}</h4>
                  <p className="text-xs text-gray-500">{surah.arti} • {surah.jumlahAyat} Ayat</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-amiri text-lg text-gold">{surah.nama}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{surah.tempatTurun}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SurahView = ({ surahId, onBack }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${surahId}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setLoading(false);
      });
  }, [surahId]);

  const toggleAudio = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="space-y-8">
      <button onClick={onBack} className="text-gold flex items-center gap-2 font-medium">
        <ChevronRight size={20} className="rotate-180" /> Kembali ke Daftar
      </button>

      {loading ? (
        <div className="space-y-8">
          <div className="h-40 bg-gray-100 dark:bg-white/5 rounded-3xl shimmer"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 dark:bg-white/5 rounded-2xl shimmer"></div>
          ))}
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-br from-[#0D7377] to-[#0A0F1E] p-8 rounded-[2rem] text-white text-center shadow-xl">
            <h2 className="text-4xl font-amiri mb-2">{data.nama}</h2>
            <h3 className="text-2xl font-bold text-gold">{data.namaLatin}</h3>
            <p className="mt-2 opacity-80">{data.arti} • {data.tempatTurun} • {data.jumlahAyat} Ayat</p>
            <div className="mt-6 flex justify-center gap-4">
               <audio ref={audioRef} src={data.audioFull['05']} onEnded={() => setPlaying(false)} />
               <button
                onClick={toggleAudio}
                className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors"
               >
                  {playing ? <Pause size={24} /> : <Play size={24} />}
               </button>
               <button className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-white transition-colors">
                  <Bookmark size={24} />
               </button>
            </div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto mt-12">
            {data.ayat.map((ayat) => (
              <div key={ayat.nomorAyat} className="group">
                <div className="flex justify-between items-start gap-8 border-b border-gray-100 dark:border-white/5 pb-10">
                  <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-xs text-gold flex-shrink-0">
                    {ayat.nomorAyat}
                  </div>
                  <div className="flex-1 space-y-6">
                    <p className="font-amiri text-4xl leading-[4.5rem] text-right" dir="rtl">
                      {ayat.teksArab}
                    </p>
                    <p className="text-gold font-medium italic text-sm">{ayat.teksLatin}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{ayat.teksIndonesia}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quran;
