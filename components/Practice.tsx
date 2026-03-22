import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import vero2Image from '../assets/vero2.png';

export const Practice: React.FC = () => {
  return (
    <>
        <div className="w-full h-[50vh] bg-[#F5F2EA] overflow-hidden">
             <img 
                src={vero2Image} 
                alt="Vero laughing" 
                className="w-full h-full object-cover object-center grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
            />
        </div>
        <Section id="practice" className="bg-[#F5F2EA] text-[#3D4236]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
            <AnimatedTitle className="text-5xl md:text-7xl mb-12">
                The Grounding
            </AnimatedTitle>
            <FadeIn>
                <p className="font-bold mb-6">High performance isn’t just strategic. It’s physiological.</p>
                <p className="mb-6 opacity-80 leading-relaxed">
                Outside of consulting, I guide Breathwork and facilitate sauna + cold immersion experiences designed to strengthen resilience, clarity, and presence.
                </p>
                <p className="mb-8 opacity-80 leading-relaxed">
                Because leadership doesn’t start in a spreadsheet. It starts in the nervous system.
                </p>

                <ul className="space-y-4 font-medium text-sm md:text-base border-l-4 border-[#7C8356] pl-6 py-2 bg-[#7C8356]/10 rounded-r-lg">
                    <li>Breathwork builds awareness under intensity.</li>
                    <li>Cold immersion strengthens composure under stress.</li>
                    <li>Heat creates space for release and reset.</li>
                </ul>
                <p className="mt-6 opacity-80 leading-relaxed">
                    The same principles that drive sustainable business growth, awareness, adaptability, and momentum also drive human performance.
                </p>
            </FadeIn>
            </div>

            <div className="pt-0 lg:pt-24">
                <FadeIn delay={0.3}>
                    <p className="mb-6 opacity-80 leading-relaxed">
                        Whether I'm designing scalable systems or guiding a room through breath, the intention is the same:
                    </p>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D4236] leading-tight mb-8">
                        Grounded leaders.<br />
                        Clear thinking.<br />
                        Intentional action.
                    </h3>
                    <p className="text-lg opacity-80 leading-relaxed">
                        It’s the same philosophy,  applied to the human operating system.
                    </p>
                </FadeIn>
            </div>
        </div>
        </Section>
    </>
  );
};