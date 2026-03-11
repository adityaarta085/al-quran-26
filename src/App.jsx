import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Prayer from './pages/Prayer';
import Qibla from './pages/Qibla';
import More from './pages/More';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'quran': return <Quran />;
      case 'prayer': return <Prayer />;
      case 'qibla': return <Qibla />;
      case 'more': return <More />;
      default: return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
