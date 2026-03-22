import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import { Button } from './Button';
import { STORY_ITEMS } from '../constants';

export const Story: React.FC = () => {
  return (
    <Section id="story" className="bg-[#3D4236] text-[#F5F2EA] pb-32">
      <div className="max-w-4xl">
        <AnimatedTitle className="text-[#E6E888] text-5xl md:text-7xl mb-12">
          The Story
        </AnimatedTitle>
        
        <FadeIn delay={0.2} className="mb-16">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            With over a decade of experience across communication, marketing, service design, and strategic operations, I’ve built a career around solving complex problems with clarity, creativity, and data.
          </p>
          <p>
            I began in copywriting for global brands like Corona, Heineken, and Hyundai,  developing campaigns that lived in festivals, retail spaces, and city streets. That’s where I learned how to connect with people in real time.

          </p>
        </FadeIn>

        <div className="space-y-8 mb-16">
          {STORY_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <p className="text-[#F5F2EA]/80 leading-relaxed border-b border-[#F5F2EA]/20 pb-8 hover:text-white transition-colors">
                {item}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="space-y-8">
            <p className="opacity-80 leading-relaxed max-w-2xl">
                Today, I lead strategic operations in digital environments, designing systems that scale, optimizing workflows, and translating long-term vision into actionable roadmaps.
            </p>
            <p className="opacity-80 leading-relaxed max-w-2xl">
                From AI automation and service design to cross-functional alignment and performance tracking, I build the infrastructure that allows teams to grow intentionally and efficiently
            </p>
            <Button>Shoot Me A Message</Button>
        </FadeIn>
      </div>
    </Section>
  );
};