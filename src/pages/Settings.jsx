import React from 'react';
import { User, Bell, Globe, Type, Shield, HelpCircle } from 'lucide-react';

const SettingRow = ({ icon: Icon, label, value, color }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 rounded-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg ${color} text-white`}>
        <Icon size={18} />
      </div>
      <span className="font-medium">{label}</span>
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500">
      {value} <ChevronRight size={16} />
    </div>
  </div>
);

const Settings = () => {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold">Pengaturan</h2>

      <div className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 space-y-8">
        <div className="flex items-center gap-6 pb-8 border-b border-gray-100 dark:border-white/5">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-white text-3xl font-bold">A</div>
          <div>
            <h3 className="text-xl font-bold">Abdullah</h3>
            <p className="text-gray-500">Jakarta, Indonesia</p>
          </div>
          <button className="ml-auto text-gold font-bold text-sm">Edit Profil</button>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Aplikasi</h4>
          <SettingRow icon={Bell} label="Notifikasi Adzan" value="Aktif" color="bg-blue-500" />
          <SettingRow icon={Globe} label="Bahasa" value="Indonesia" color="bg-green-500" />
          <SettingRow icon={Type} label="Ukuran Font Arab" value="Besar" color="bg-purple-500" />
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2">Dukungan</h4>
          <SettingRow icon={Shield} label="Kebijakan Privasi" value="" color="bg-orange-500" />
          <SettingRow icon={HelpCircle} label="Bantuan & FAQ" value="" color="bg-teal-500" />
        </div>

        <button className="w-full py-4 bg-red-500/10 text-red-500 rounded-2xl font-bold">Keluar Akun</button>
      </div>
    </div>
  );
};

export default Settings;
