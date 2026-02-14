import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';
import { Framework } from './components/Framework';
import { Practice } from './components/Practice';
import { Story } from './components/Story';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EA] selection:bg-[#E6E888] selection:text-[#3D4236]">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Philosophy />
        <Framework />
        <Practice />
        <Story />
      </main>
      <Footer />
    </div>
  );
};

export default App;