import React from 'react';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ theme = 'light', className = '' }) => {
  const isLight = theme === 'light';
  
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Abstract Architectural Monogram */}
      <div className={`w-10 h-10 border-[3px] ${isLight ? 'border-brand-gold' : 'border-brand-navy'} flex items-center justify-center relative`}>
         <div className={`absolute w-full h-[3px] top-1/3 ${isLight ? 'bg-white' : 'bg-brand-navy'} z-10`}></div>
         <span className={`font-bold text-xl ${isLight ? 'text-white' : 'text-brand-navy'}`}>F</span>
      </div>
      
      <div className="flex flex-col justify-center h-full">
        <span className={`text-lg font-bold tracking-[0.15em] leading-none ${isLight ? 'text-white' : 'text-brand-navy'}`}>
          FUNDAPRODES
        </span>
        <span className={`text-[10px] uppercase tracking-[0.3em] mt-1 ${isLight ? 'text-brand-gold' : 'text-brand-slate'}`}>
          EST. 1996
        </span>
      </div>
    </div>
  );
};

export default Logo;
