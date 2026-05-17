import React from 'react';

const Teachings = () => {
  return (
    <section id="DiscoverMore" className="bg-[#96b3af] relative pt-[2rem] md:pt-[3rem] px-[1.5rem] min-h-[300px] overflow-visible z-10">
      
      {/* Exact Mandala Art Extracted from Design */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none opacity-90 overflow-hidden flex items-end">
        <img src="/images/mandala-exact.png" alt="" className="w-[200px] md:w-[350px] object-contain object-bottom block translate-y-[15px] md:translate-y-[25px]" />
      </div>

      <div className="max-w-[1020px] w-full mx-auto grid grid-cols-1 md:grid-cols-[1fr_minmax(280px,400px)] gap-8 md:gap-[2rem] items-end relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="pb-[2rem] md:pb-[3rem] relative z-20 self-center">
          <h2 className="text-[#fcf7c3] text-[clamp(1.6rem,3.5vw,2.2rem)] font-black uppercase tracking-widest mb-[1.5rem] font-['Montserrat']">
            Founder Acharya
          </h2>
          
          <div className="relative max-w-[580px]">
            {/* Giant Quote Mark properly placed next to quote */}
            <span className="absolute right-[-1rem] md:right-[-5rem] top-[-1rem] md:top-[1rem] text-[#58595b] text-[6rem] md:text-[9rem] leading-[0.7] font-black font-serif pointer-events-none select-none drop-shadow-sm opacity-90">
              ❞
            </span>

            <blockquote className="text-[#414042] text-[clamp(1.1rem,2.4vw,1.4rem)] italic leading-[1.5] font-['Cormorant_Garamond',Georgia,serif] m-0 pl-[1.2rem] font-medium relative z-10">
              "This Kṛṣṇa consciousness movement is meant to save human society from spiritual death and bring people to the platform of eternal life, full knowledge and bliss."
            </blockquote>
            
            <div className="mt-[1.5rem] max-w-[560px] text-center relative z-10">
              <p className="text-[#414042] text-[0.65rem] font-extrabold uppercase tracking-[0.08em] m-0">
                Śrīmad-Bhāgavatam 4.30.20 — Purport
              </p>
              <p className="text-[#414042] text-[0.65rem] font-extrabold uppercase tracking-[0.08em] m-0 mt-1">
                — HIS DIVINE GRACE AC BHAKTIVEDANTA SWAMI SRILA PRABHUPADA
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative flex justify-center md:justify-end items-end z-30 w-full">
          {/* We use negative top margin to make the image slightly break out of the top, and bottom-0 to stay flush at bottom */}
          <img
            className="w-full max-w-[320px] md:max-w-[420px] object-contain object-bottom block relative z-30 -mt-[3rem] md:-mt-[4rem]"
            src="/images/image-removebg-preview.png"
            alt="Srila Prabhupada"
            loading="lazy"
            style={{ filter: "drop-shadow(0 15px 20px rgba(40, 12, 20, 0.25))" }}
          />
        </div>

      </div>
    </section>
  );
};

export default Teachings;
