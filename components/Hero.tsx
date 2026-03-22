import React from 'react';
import { AnimatedTitle, FadeIn } from './Section';
import veroImage from '../assets/vero.png';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Text Section */}
      <section className="bg-[#7C8356] w-full pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24 text-[#F5F2EA]">
        <div className="max-w-7xl mx-auto">
          <AnimatedTitle className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-12">
            Hola,<br />
            I’m <span className="text-[#E6E888]">Vero.</span>
          </AnimatedTitle>
          
          <FadeIn delay={0.2} className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A strategic thinker with a creative edge.
            </h3>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              I help brands get clear on their story, their strategy, and their systems so they can grow with joy. 
              <br />Whether we’re building your brand, mapping your marketing, or untangling your business ops, I bring clarity, creativity, and momentum.
            </p>
            <p className="text-[#E6E888] font-bold text-xl">
              This is strategy, but fun.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-[#7C8356]">
        <img 
          src={veroImage} 
          alt="Vero Vargas smiling" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-10 left-6 md:top-20 md:left-24 text-[#F5F2EA] opacity-80 mix-blend-overlay md:mix-blend-normal">
          <h2 className="text-5xl md:text-7xl font-bold leading-none">
            Call me<br />
            [vair-oh]
          </h2>
        </div>
      </section>
    </>
  );
};