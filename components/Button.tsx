import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-8 py-4 
        bg-[#E6E888] text-[#3D4236] 
        font-bold uppercase tracking-wide text-sm 
        transition-transform hover:scale-105 active:scale-95
        rounded-none
        ${className}
      `}
    >
      {children}
      <ArrowRight size={18} />
    </button>
  );
};