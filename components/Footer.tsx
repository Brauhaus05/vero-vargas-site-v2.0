import React from 'react';
import { Smile } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#7C8356] text-[#F5F2EA] py-12 px-6 md:px-12 border-t border-[#F5F2EA]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <h4 className="font-bold text-xl tracking-tight">vero vargas</h4>
            <Smile size={20} />
        </div>
        <div className="text-xs opacity-60 flex flex-col md:flex-row gap-4 text-center md:text-left">
            <p>Strategy, but fun. ©</p>
            <p>© {new Date().getFullYear()} Veronica Vargas Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};