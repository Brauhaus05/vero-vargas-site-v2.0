import React from 'react';
import logo from '../assets/logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7C8356] text-[#F5F2EA] py-12 px-6 md:px-12 border-t border-[#F5F2EA]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src={logo} alt="Vero Vargas" className="h-8" />
        <div className="text-xs opacity-60 flex flex-col md:flex-row gap-4 text-center md:text-left">
            <p>Strategy, but fun. ©</p>
            <p>© {new Date().getFullYear()} Veronica Vargas Studio. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="https://www.linkedin.com/in/veronica-vargas/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="https://www.instagram.com/verovargas.yvr/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">Instagram</a>
        </div>
      </div>
    </footer>
  );
};