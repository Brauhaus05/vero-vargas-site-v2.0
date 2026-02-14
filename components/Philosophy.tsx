import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import { PHILOSOPHY_ITEMS } from '../constants';

export const Philosophy: React.FC = () => {
  return (
    <Section id="philosophy" className="bg-[#3D4236] text-[#F5F2EA]">
      <AnimatedTitle className="text-[#E6E888] text-5xl md:text-7xl mb-16">
        The Philosophy
      </AnimatedTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {PHILOSOPHY_ITEMS.map((item, index) => (
          <FadeIn key={index} delay={0.1 * index} className="border-l-2 border-[#E6E888] pl-6">
            <h3 className="text-xl font-bold mb-2 text-[#F5F2EA]">
              {item.title}
            </h3>
            <p className="text-[#F5F2EA]/80 leading-relaxed">
              {item.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};