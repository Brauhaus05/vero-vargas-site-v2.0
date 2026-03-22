import React from 'react';
import { Section, AnimatedTitle, FadeIn } from './Section';
import vero2Image from '../assets/vero2.png';

export const Practice: React.FC = () => {
  return (
    <>
        <div className="w-full h-[50vh] bg-[#F5F2EA] overflow-hidden relative">
             <img
                src={vero2Image}
                alt="Vero laughing"
                className="w-full h-full object-cover object-center grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg width="245" height="211" viewBox="0 0 245 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_73_2)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M209.631 24.4383V54.7949C209.631 68.2917 198.653 79.2488 185.131 79.2488C171.609 79.2488 160.631 68.2917 160.631 54.7949V24.4383C160.631 10.9414 171.609 -0.015625 185.131 -0.015625C198.653 -0.015625 209.631 10.9414 209.631 24.4383Z" fill="#F1FF66"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M84.2522 24.4383V54.7949C84.2522 68.2917 73.2744 79.2488 59.7521 79.2488C46.2297 79.2488 35.252 68.2917 35.252 54.7949V24.4383C35.252 10.9414 46.2297 -0.015625 59.7521 -0.015625C73.2744 -0.015625 84.2522 10.9414 84.2522 24.4383Z" fill="#F1FF66"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M218.207 134.621C222.279 127.825 231.111 125.607 237.92 129.67C244.728 133.733 246.951 142.549 242.88 149.344C242.88 149.344 206.608 210.928 123.326 210.928C40.3285 210.928 2.21645 149.625 2.21645 149.625C-2.00939 142.924 0.0104956 134.06 6.72385 129.842C13.4364 125.624 22.318 127.64 26.5438 134.34C26.5438 134.34 57.2998 182.237 123.326 182.237C189.067 182.237 218.207 134.621 218.207 134.621Z" fill="#F1FF66"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_73_2">
                            <rect width="245" height="211" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <Section id="practice" className="bg-[#F5F2EA] text-[#3D4236]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
            <AnimatedTitle className="text-5xl md:text-7xl mb-12">
                The Practice
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