import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Cinematic Dark Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(1.1) brightness(0.4)' 
        }}
      ></div>
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-8 text-center">
        <span className="inline-block py-1 px-3 border border-white/20 text-white/60 text-[10px] tracking-[0.3em] uppercase mb-8">
          Fundación Dominicana • Est. 1996
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          DIGNIDAD <br/>
          <span className="text-gold-gradient">HUMANA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Transformando capital en infraestructura social tangible. 
          Una iniciativa respaldada por activos reales y un legado de 28 años.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#crypto" 
            className="min-w-[200px] py-4 bg-brand-gold hover:bg-brand-goldlight text-brand-navy font-bold text-xs tracking-[0.15em] uppercase transition-all"
          >
            Invertir en PRODES
          </a>
          <a 
            href="#nosotros" 
            className="min-w-[200px] py-4 border border-white/20 hover:bg-white hover:text-brand-navy text-white font-bold text-xs tracking-[0.15em] uppercase transition-all"
          >
            Nuestra Historia
          </a>
        </div>
      </div>
      
      {/* Financial Ticker aesthetic at bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-brand-navy/50 backdrop-blur-sm py-4 hidden md:flex justify-between px-8 text-xs text-gray-400 font-mono">
        <div className="flex gap-8">
            <span>PDS/USDT <span className="text-green-400">0.85</span></span>
            <span>24H VOL <span className="text-white">$1.2M</span></span>
            <span>MARKET CAP <span className="text-white">$17.8M</span></span>
        </div>
        <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            SYSTEM OPERATIONAL
        </div>
      </div>
    </div>
  );
};

export default Hero;
