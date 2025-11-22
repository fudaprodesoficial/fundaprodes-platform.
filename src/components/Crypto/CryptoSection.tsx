import React, { useState, useCallback } from 'react';
import { ShieldCheck, Wallet, Copy, Lock, Activity, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const CryptoSection: React.FC = () => {
  const [amount, setAmount] = useState('5000');
  const [copied, setCopied] = useState(false);
  const PRICE = 0.85;
  const CONTRACT_ADDRESS = '0x742d...4438f810';

  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleCopyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(Number(value)) && Number(value) >= 0)) {
      setAmount(value);
    }
  }, []);

  const calculatedAmount = amount ? (parseFloat(amount) / PRICE).toFixed(2) : '0.00';

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="bg-white text-brand-navy py-20 sm:py-32 border-t border-gray-200 overflow-hidden"
      aria-labelledby="crypto-heading"
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-20 items-center">
          {/* Left: Editorial Info */}
          <div className="xl:w-1/3 relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-brand-gold"></div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-gold">Finanzas de Impacto</span>
            </div>
            
            <h2 id="crypto-heading" className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              PRODES <br/>
              <span className="text-gold-metallic">TOKEN $PDS</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-light mb-10 leading-relaxed">
              Un instrumento financiero diseñado para la preservación de capital y el desarrollo social. Respaldado por activos inmobiliarios y auditoría blockchain en tiempo real.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy/5 rounded-full">
                    <ShieldCheck className="text-brand-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Seguridad Institucional</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Contratos auditados bajo estándares ISO/IEC 27001 y OpenZeppelin.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-navy/5 rounded-full">
                    <Activity className="text-brand-navy w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Rendimiento RWA</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Valor vinculado a proyectos de infraestructura física ejecutables.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                 <button 
                   className="px-8 py-4 bg-brand-navy text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 rounded"
                   aria-label="Descargar Whitepaper versión 2.0"
                 >
                    Whitepaper V.2.0
                 </button>
                 <div className="px-8 py-4 border border-slate-200 text-slate-500 text-xs font-mono flex items-center gap-3" role="status" aria-label="Auditoría aprobada">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                    <span>Audit Passed</span>
                 </div>
            </div>
          </div>

          {/* Right: Premium Dark Terminal */}
          <div className="xl:w-2/3 w-full">
            <div className="bg-brand-navy rounded-sm p-1 border border-slate-700 shadow-2xl relative overflow-hidden group">
              
              {/* Glass Reflection Effect */}
              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10"></div>

              <div className="bg-[#0B1120] p-8 md:p-12 relative z-0">
                {/* Terminal Header */}
                <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
                   <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                      </div>
                      <span className="text-xs text-slate-400 font-mono ml-4">terminal://fundaprodes/swap_ui</span>
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded text-[10px] font-bold text-brand-gold uppercase tracking-wider animate-pulse">
                      <Zap size={12} /> Live Market
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* THE TOKEN VISUALIZATION (Replacing generic white space) */}
                    <div className="relative flex flex-col items-center justify-center order-2 md:order-1">
                         {/* 3D Coin Container */}
                         <div className="relative w-64 h-64 md:w-72 md:h-72 coin-float perspective-1000 cursor-pointer">
                            
                            {/* Ambient Glow behind coin */}
                            <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl scale-110"></div>

                            {/* Coin Structure */}
                            <div className="relative w-full h-full rounded-full bg-gradient-to-b from-[#FCD34D] via-[#B45309] to-[#78350F] p-[2px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                {/* Dark Inner Face */}
                                <div className="w-full h-full rounded-full bg-[#0F172A] p-4 relative overflow-hidden">
                                    
                                    {/* Metallic texture/noise */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                                    
                                    {/* Rotating Ring Text */}
                                    <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                            <defs>
                                                <path id="textCircle" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
                                            </defs>
                                            <text fontSize="4.5" fontWeight="bold" fill="#C5A059" letterSpacing="1.4" className="font-mono">
                                                <textPath href="#textCircle" className="uppercase fill-[#C5A059]">
                                                   • Fundaprodes Network • Real World Assets • Verified •
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>

                                    {/* Inner Gold Border */}
                                    <div className="absolute inset-4 rounded-full border border-brand-gold/20"></div>
                                    <div className="absolute inset-5 rounded-full border border-brand-gold/10"></div>

                                    {/* Center Logo */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                        <div className="relative">
                                            <h3 className="text-6xl font-serif font-bold text-gold-metallic drop-shadow-lg tracking-tighter">PDS</h3>
                                            {/* Shine passing through text */}
                                            <div className="absolute inset-0 coin-shine opacity-50 mix-blend-overlay pointer-events-none"></div>
                                        </div>
                                        <div className="w-12 h-[1px] bg-brand-gold/50 my-3"></div>
                                        <span className="text-[10px] text-brand-gold/80 font-bold tracking-[0.3em] uppercase">Est. 1996</span>
                                    </div>
                                    
                                    {/* Reflection Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-full pointer-events-none"></div>
                                </div>
                            </div>
                         </div>

                         {/* Token Data below coin */}
                         <div className="mt-8 grid grid-cols-3 gap-4 text-center w-full border-t border-white/5 pt-6">
                             <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Price</p>
                                <p className="text-white font-mono">${PRICE}</p>
                             </div>
                             <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Supply</p>
                                <p className="text-brand-gold font-mono">21M</p>
                             </div>
                             <div>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Network</p>
                                <p className="text-white font-mono">BSC</p>
                             </div>
                         </div>
                    </div>

                    {/* Swap Interface */}
                    <div className="order-1 md:order-2">
                        <div className="mb-8">
                            <h3 className="text-xl text-white font-light mb-2">Panel de Adquisición</h3>
                            <p className="text-slate-400 text-xs font-light">Intercambio directo sin intermediarios bancarios.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-slate-800/50 p-4 rounded border border-white/5 hover:border-brand-gold/30 transition-colors">
                                <div className="flex justify-between text-xs text-slate-400 mb-2 uppercase tracking-wider">
                                    <span>Enviar (USDT)</span>
                                    <span>Balance: 0.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <input 
                                      type="text" 
                                      inputMode="decimal"
                                      value={amount}
                                      onChange={handleAmountChange}
                                      className="bg-transparent text-2xl text-white font-mono w-full outline-none focus:ring-2 focus:ring-brand-gold rounded px-2"
                                      aria-label="Cantidad en USDT"
                                      placeholder="0"
                                    />
                                    <span className="bg-[#26A17B] text-white text-[10px] font-bold px-2 py-1 rounded">USDT</span>
                                </div>
                            </div>

                            <div className="flex justify-center -my-2 relative z-10">
                                <div className="bg-brand-navy border border-slate-600 p-1 rounded-full">
                                   <Activity size={16} className="text-brand-gold" />
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded border border-white/5">
                                <div className="flex justify-between text-xs text-slate-400 mb-2 uppercase tracking-wider">
                                    <span>Recibir (PDS)</span>
                                    <span>Tax: 0.5%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl text-brand-gold font-mono" aria-label={`Recibirás ${calculatedAmount} PDS`}>
                                      {calculatedAmount}
                                    </span>
                                    <span className="bg-brand-gold text-brand-navy text-[10px] font-bold px-2 py-1 rounded border border-brand-gold">PDS</span>
                                </div>
                            </div>

                            <button 
                              className="w-full mt-6 py-4 bg-gradient-to-r from-[#C5A059] to-[#B45309] hover:brightness-110 text-white font-bold tracking-[0.15em] uppercase transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-[#0B1120] rounded"
                              aria-label="Ejecutar intercambio de USDT a PDS"
                            >
                                <Wallet size={16} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                                Ejecutar Swap
                            </button>

                             <div className="pt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono border-t border-white/5 mt-4">
                                <span>Slippage: Auto (0.5%)</span>
                                <span>Route: USDT &gt; PDS</span>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Contract Footer */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                   <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Lock size={12} />
                      <span className="uppercase tracking-wider">Liquidez Bloqueada 5 Años</span>
                   </div>
                   <button
                     onClick={handleCopyAddress}
                     className="bg-black/30 px-4 py-2 rounded border border-white/5 flex items-center gap-3 text-slate-400 font-mono text-xs hover:text-brand-gold hover:border-brand-gold/50 cursor-pointer transition-all group focus:outline-none focus:ring-2 focus:ring-brand-gold"
                     aria-label={copied ? 'Dirección copiada' : 'Copiar dirección del contrato'}
                     aria-live="polite"
                   >
                      <span>{CONTRACT_ADDRESS}</span>
                      <Copy size={12} className={cn('group-hover:text-white transition-colors', copied && 'text-green-400')} aria-hidden="true" />
                   </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CryptoSection;
