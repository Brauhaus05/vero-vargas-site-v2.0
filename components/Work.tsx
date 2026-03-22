import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import { WORK_ITEMS } from '../constants';

export const Work: React.FC = () => {
  return (
    <Section id="work" className="bg-[#F5F2EA] text-[#3D4236]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <AnimatedTitle className="text-5xl md:text-7xl mb-8">
            The Work
          </AnimatedTitle>
          <FadeIn delay={0.2}>
            <p className="text-lg leading-relaxed max-w-md">
              I’m a marketing, brand, and operations consultant for founders, creatives, and small teams who want to grow smart, while actually enjoying the process.
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col">
          <div className="mb-6 text-xs font-bold uppercase tracking-widest opacity-60">I help you:</div>
          {WORK_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={0.1 * index} className="group">
              <div className="py-8 border-t border-[#3D4236]/20 transition-all duration-300 hover:pl-4">
                <h3 className="text-xl md:text-2xl font-medium leading-snug">
                  {item}
                </h3>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-[#3D4236]/20"></div>
        </div>
      </div>
    </Section>
  );
};