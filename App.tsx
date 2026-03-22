import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Philosophy } from './components/Philosophy';
import { Framework } from './components/Framework';
import { Practice } from './components/Practice';
import { Story } from './components/Story';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F5F2EA] selection:bg-[#E6E888] selection:text-[#3D4236]">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Philosophy />
        <Framework onOpenModal={openModal} />
        <Practice />
        <Story onOpenModal={openModal} />
      </main>
      <Footer />
      <AnimatePresence>
        {modalOpen && <ContactModal isOpen={modalOpen} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default App;