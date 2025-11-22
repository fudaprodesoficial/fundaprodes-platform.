import React, { useCallback } from 'react';
import { CreditCard, Bot, ArrowRight, Shield, Cpu, Send, Wifi } from 'lucide-react';
import Logo from '../Layout/Logo';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const Ecosystem: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleTelegramClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // En producción, aquí se abriría el enlace real de Telegram
    window.open('#', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 sm:py-32 bg-slate-50 border-t border-gray-200 overflow-hidden"
      aria-labelledby="ecosystem-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={cn(
          'text-center mb-12 lg:mb-20 max-w-4xl mx-auto transition-opacity duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Ecosistema Integral
          </span>
          <h2 id="ecosystem-heading" className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
            Más que una Fundación. <br className="hidden md:block"/>
            Una <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-slate-500">Economía Digital Autónoma.</span>
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Hemos integrado soluciones fintech y gobernanza automatizada para escalar nuestro impacto. 
            Desde la emisión de tarjetas para distribución de ayuda hasta la gestión comunitaria por IA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: THE CARD (Visual Impact) */}
          <div className="relative group perspective-1000">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-brand-navy/5 rounded-3xl blur-3xl transform -rotate-6 scale-90"></div>
             
             {/* The Card CSS */}
             <div className="relative w-full aspect-[1.586/1] rounded-2xl bg-[#0F172A] p-8 md:p-12 shadow-2xl text-white overflow-hidden transition-transform duration-700 hover:rotate-y-6 hover:scale-105 border border-slate-700">
                
                {/* Texture */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                   <div className="flex justify-between items-start">
                      <Logo theme="dark" className="scale-75 origin-top-left opacity-90" />
                      <Wifi className="text-brand-gold/50 rotate-90" />
                   </div>

                   <div className="flex items-center gap-4 my-8">
                      <div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-200 to-yellow-600 shadow-inner border border-yellow-700/50 flex items-center justify-center">
                        <div className="w-8 h-px bg-black/20"></div>
                      </div>
                      <Wifi className="text-white/20 w-6 h-6 rotate-90" />
                   </div>

                   <div className="space-y-6">
                      <div className="font-mono text-xl md:text-2xl tracking-[0.15em] text-brand-gold shadow-black drop-shadow-md">
                         •••• •••• •••• 1996
                      </div>
                      
                      <div className="flex justify-between items-end">
                         <div>
                            <span className="block text-[8px] uppercase tracking-widest text-gray-400 mb-1">Card Holder</span>
                            <span className="font-mono text-sm uppercase tracking-widest text-gray-200">MIEMBRO FUNDADOR</span>
                         </div>
                         <div className="flex flex-col items-end">
                            <span className="text-[8px] font-bold text-white/50 mb-1">VALID THRU</span>
                            <span className="font-mono text-sm">12/30</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-8 flex justify-center gap-8">
                <div className="flex items-center gap-3 text-slate-500 text-sm font-light">
                   <CreditCard size={18} className="text-brand-gold" />
                   <span>Uso Global</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm font-light">
                   <Shield size={18} className="text-brand-gold" />
                   <span>Seguridad Biométrica</span>
                </div>
             </div>
          </div>

          {/* RIGHT: TECH & COMMUNITY */}
          <div className="space-y-12">
             
             {/* Feature 1: AI Bots */}
             <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-lg shadow-brand-navy/20">
                   <Bot className="text-white w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-brand-navy mb-2">Fundabot AI™ v2.0</h3>
                   <p className="text-slate-500 font-light leading-relaxed mb-4">
                      Nuestra red neuronal opera 24/7 gestionando dudas de donantes, auditando transacciones en tiempo real y coordinando logística de proyectos.
                   </p>
                   <ul className="text-sm text-brand-slate space-y-2 font-mono">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Atención al Inversor Instantánea</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Auditoría de Fondos Automatizada</li>
                   </ul>
                </div>
             </div>

             {/* Feature 2: Telegram DAO */}
             <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-[#229ED9] flex items-center justify-center shrink-0 shadow-lg shadow-blue-400/20">
                   <Send className="text-white w-7 h-7 ml-1" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-brand-navy mb-2">Comunidad & Gobernanza</h3>
                   <p className="text-slate-500 font-light leading-relaxed mb-6">
                      Únete a nuestro canal oficial de Telegram. Acceso directo a la directiva, votaciones DAO sobre nuevos proyectos y actualizaciones exclusivas.
                   </p>
                   <a 
                     href="#" 
                     onClick={handleTelegramClick}
                     className="inline-flex items-center gap-3 px-6 py-3 bg-brand-navy hover:bg-slate-800 text-white text-xs font-bold tracking-[0.15em] uppercase transition-all rounded-sm group focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2"
                     aria-label="Unirse al canal de Telegram de FUNDAPRODES"
                   >
                      Unirme al Canal
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                   </a>
                </div>
             </div>

             {/* Stat Box */}
             <div className="bg-white border border-gray-200 p-6 flex justify-between items-center shadow-sm">
                <div>
                   <span className="block text-3xl font-bold text-brand-navy">12,450+</span>
                   <span className="text-xs text-slate-400 uppercase tracking-widest">Miembros Activos</span>
                </div>
                <div className="h-10 w-px bg-gray-200"></div>
                <div>
                   <span className="block text-3xl font-bold text-brand-navy">1.2M</span>
                   <span className="text-xs text-slate-400 uppercase tracking-widest">Mensajes Procesados</span>
                </div>
                <Cpu className="text-brand-gold/20 w-12 h-12" />
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
