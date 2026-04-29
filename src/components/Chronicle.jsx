import React from 'react';

const purposes = [
  'To systematically propagate spiritual knowledge to society at large and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world.',
  'To propagate a consciousness of Krishna (God), as it is revealed in the great scriptures of India, Bhagavad-gita and Srimad-Bhagavatam.',
  'To bring the members of the Society together with each other and nearer to Krishna, the prime entity, thus developing the idea within the members, and humanity at large, that each soul is part and parcel of the quality of Godhead.',
  'To teach and encourage the sankirtana movement, congregational chanting of the holy name of God, as revealed in the teachings of Lord Sri Caitanya Mahaprabhu.',
  'To erect for the members and for society at large a holy place of transcendental pastimes dedicated to the personality of Krishna.',
  'To bring the members closer together for the purpose of teaching a simpler, natural way of life.',
  'With a view towards achieving the aforementioned purposes, to publish and distribute periodicals, magazines, books and other writings.',
];

const MissionCard = ({ item, index, numberPos = 'right', isFullWidth = false }) => {
  const isRight = numberPos === 'right';
  return (
    <div className={`relative flex items-center min-h-[100px] h-full rounded-xl bg-white/[0.06] overflow-hidden ${isRight ? 'text-left pl-6 pr-28' : 'text-right pr-6 pl-28'} py-5 backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300`}>
      {/* Cutouts to match the design's slanted slashes */}
      <div className={`absolute top-0 ${isRight ? 'right-[4.5rem] -skew-x-[18deg]' : 'left-[4.5rem] skew-x-[18deg]'} w-4 h-full bg-[#542e3a] z-10 shadow-inner`}></div>
      <div className={`absolute top-0 ${isRight ? '-right-3 -skew-x-[18deg]' : '-left-3 skew-x-[18deg]'} w-6 h-full bg-[#542e3a] z-10`}></div>
      
      {/* Text */}
      <p className="relative z-20 text-white/90 text-[0.85rem] md:text-sm font-medium leading-relaxed m-0 w-full">
        {item}
      </p>
      
      {/* Number */}
      <span className={`absolute top-1/2 -translate-y-1/2 ${isRight ? 'right-5' : 'left-5'} text-[#fff7c2] text-5xl md:text-6xl font-normal font-['Montserrat'] z-20`}>
        {String(index).padStart(2, '0')}
      </span>
    </div>
  );
};

const Chronicle = () => {
  return (
    <section id="mission" className="bg-[#542e3a] py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-[2.5rem] font-bold uppercase tracking-widest mb-6 font-['Montserrat'] text-[#fff7c2]">
           Our Mission
        </h2>
        <p className="max-w-[800px] mx-auto text-[#fff7c2]/80 text-[0.95rem] md:text-base font-medium leading-relaxed mb-14">
          When Prabhupada began the International Society for Krishna Consciousness (in New York City in 1966),
          he formulated a clear mission statement. Thus the 7 Purposes of ISKCON are as follows:
        </p>

        {/* Use auto-rows-[1fr] to force every row to have the same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 auto-rows-[1fr] mb-4 md:mb-6 lg:mb-8">
          {/* Order items so they appear 1,2,3 on the left and 4,5,6 on the right on larger screens */}
          <div className="md:col-start-1 md:row-start-1 h-full"><MissionCard item={purposes[0]} index={1} numberPos="right" /></div>
          <div className="md:col-start-2 md:row-start-1 h-full"><MissionCard item={purposes[3]} index={4} numberPos="right" /></div>
          <div className="md:col-start-1 md:row-start-2 h-full"><MissionCard item={purposes[1]} index={2} numberPos="left" /></div>
          <div className="md:col-start-2 md:row-start-2 h-full"><MissionCard item={purposes[4]} index={5} numberPos="left" /></div>
          <div className="md:col-start-1 md:row-start-3 h-full"><MissionCard item={purposes[2]} index={3} numberPos="right" /></div>
          <div className="md:col-start-2 md:row-start-3 h-full"><MissionCard item={purposes[5]} index={6} numberPos="right" /></div>
        </div>
        
        {/* Full width bottom (07th card) */}
        <div className="w-full h-full">
          <MissionCard item={purposes[6]} index={7} numberPos="right" isFullWidth={true} />
        </div>
      </div>
    </section>
  );
};

export default Chronicle;
