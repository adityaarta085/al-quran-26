import React, { useState } from 'react';
import { Home, Book, Clock, Navigation, Grid, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
      active ? 'text-gold' : 'text-gray-400 hover:text-white'
    }`}
  >
    <Icon size={24} />
    <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
  </button>
);

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full p-4 space-x-4 transition-all hover:bg-white/5 ${
      active ? 'text-gold border-r-2 border-gold bg-white/5' : 'text-gray-400'
    }`}
  >
    <Icon size={20} />
    {!collapsed && <span className="font-medium">{label}</span>}
  </button>
);

const Layout = ({ children, activeTab, setActiveTab }) => {
  const { isDark, toggleTheme } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const tabs = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'quran', label: 'Al-Qur\'an', icon: Book },
    { id: 'prayer', label: 'Shalat', icon: Clock },
    { id: 'qibla', label: 'Kiblat', icon: Navigation },
    { id: 'more', label: 'Lainnya', icon: Grid },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-[#0D7377] hidden md:flex flex-col z-50 transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-6 flex items-center justify-between">
          {!sidebarCollapsed && <h1 className="text-2xl font-bold text-white font-amiri tracking-wider">Mega Islam</h1>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="text-white hover:text-gold">
            {sidebarCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>

        <nav className="flex-1 mt-6">
          {tabs.map((tab) => (
            <SidebarItem
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              collapsed={sidebarCollapsed}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-4 w-full p-4 text-gray-400 hover:text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            {!sidebarCollapsed && <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0D7377] md:hidden z-50 px-6 py-3 flex justify-between items-center rounded-t-2xl shadow-lg border-t border-white/10">
        {tabs.map((tab) => (
          <NavItem
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </nav>

      {/* Main Content */}
      <main className={`transition-all duration-300 pb-24 md:pb-0 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        {/* Header for Mobile */}
        <header className="md:hidden p-6 flex justify-between items-center bg-[#0D7377] text-white">
          <h1 className="text-xl font-bold font-amiri tracking-wider">Mega Islam</h1>
          <button onClick={toggleTheme} className="text-gold">
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </header>

        <div className="max-w-7xl mx-auto p-6 bg-islamic min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Layout;
