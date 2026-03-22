import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FrameworkProps {
  onOpenModal?: () => void;
}

export const Framework: React.FC<FrameworkProps> = ({ onOpenModal }) => {
  return (
    <Section id="framework" className="bg-[#7C8356] text-[#F5F2EA]">
      <div className="max-w-4xl">
        <AnimatedTitle className="text-5xl md:text-7xl mb-12">
          The Framework
        </AnimatedTitle>

        <FadeIn delay={0.2} className="mb-16 max-w-2xl">
          <p className="text-xl leading-relaxed mb-6">
            Strategy doesn’t stick when it’s just theory. So I created a modular framework that works like a game.
          </p>
          <p className="opacity-90 leading-relaxed">
            When people play, they engage. When they engage, they gain clarity. With clarity, they move. And when they move... they build their way.
          </p>
        </FadeIn>

        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-2xl md:text-4xl font-bold mb-16 text-[#E6E888]">
            {['Play', 'Engage', 'Clarity', 'Move', 'Build'].map((word, i, arr) => (
                <React.Fragment key={word}>
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                        {word}
                    </motion.span>
                    {i < arr.length - 1 && (
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.35 + (i * 0.1) }}
                            className="text-[#F5F2EA]/50"
                        >
                            →
                        </motion.span>
                    )}
                </React.Fragment>
            ))}
        </div>

        <FadeIn delay={0.6}>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Play unlocks performance.<br />
            <span className="text-[#E6E888]">I make it make sense</span> — and make it fun.
          </h3>
          <Button onClick={onOpenModal}>Join The List</Button>
        </FadeIn>
      </div>
    </Section>
  );
};
