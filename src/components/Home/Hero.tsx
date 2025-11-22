import React, { useCallback } from 'react';
import LazyImage from '../common/LazyImage';
import Clock from '../common/Clock';
import VisitStats from '../common/VisitStats';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
      role="banner"
    >
      {/* Cinematic Dark Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <LazyImage
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.4]"
          style={{ position: 'absolute', inset: 0 }}
        />
      </div>
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent z-[1]" aria-hidden="true"></div>

      <div className={cn(
        'relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        <span className="inline-block py-1 px-3 border border-white/20 text-white/60 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-6 md:mb-8">
          Fundación Dominicana • Est. 1996
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight px-4">
          DIGNIDAD <br/>
          <span className="text-gold-gradient">HUMANA</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
          Transformando capital en infraestructura social tangible. 
          Una iniciativa respaldada por activos reales y un legado de 29 años.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a 
            href="#crypto" 
            className="w-full sm:w-auto sm:min-w-[200px] py-3 sm:py-4 px-6 bg-brand-gold hover:bg-brand-goldlight text-brand-navy font-bold text-xs tracking-[0.15em] uppercase transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy rounded text-center"
            onClick={(e) => handleLinkClick(e, '#crypto')}
            aria-label="Ir a la sección de inversión en PRODES"
          >
            Invertir en PRODES
          </a>
          <a 
            href="#nosotros" 
            className="w-full sm:w-auto sm:min-w-[200px] py-3 sm:py-4 px-6 border border-white/20 hover:bg-white hover:text-brand-navy text-white font-bold text-xs tracking-[0.15em] uppercase transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-navy rounded text-center"
            onClick={(e) => handleLinkClick(e, '#nosotros')}
            aria-label="Conocer nuestra historia"
          >
            Nuestra Historia
          </a>
        </div>
      </div>
      
      {/* Premium Widgets - Top Right (Desktop only) */}
      <div className="absolute top-20 right-4 sm:right-6 lg:right-8 z-20 flex flex-col gap-3 hidden xl:flex">
        <Clock />
        <VisitStats />
      </div>

      {/* Financial Ticker aesthetic at bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-brand-navy/50 backdrop-blur-sm py-4 hidden md:flex justify-between px-4 sm:px-6 lg:px-8 text-xs text-gray-400 font-mono" aria-label="Información del mercado">
        <div className="flex gap-4 lg:gap-8 flex-wrap">
            <span>PDS/USDT <span className="text-green-400" aria-label="Precio actual">0.85</span></span>
            <span>24H VOL <span className="text-white" aria-label="Volumen 24 horas">$1.2M</span></span>
            <span>MARKET CAP <span className="text-white" aria-label="Capitalización de mercado">$17.8M</span></span>
        </div>
        <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
            <span>SYSTEM OPERATIONAL</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
