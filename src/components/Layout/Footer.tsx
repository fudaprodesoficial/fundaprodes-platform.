import React from 'react';
import { Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white py-16 sm:py-20 border-t border-white/10" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo theme="light" />
            <p className="mt-6 lg:mt-8 text-gray-400 text-sm max-w-md leading-relaxed font-light">
              Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada. 
              Entidad sin fines de lucro registrada bajo el RNC 4-01-51387-2 y Decreto 145-96.
            </p>
            <nav className="flex gap-4 mt-6 lg:mt-8" aria-label="Redes sociales">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Telegram"
              >
                <Send size={18} aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Twitter"
              >
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="Instagram"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </nav>
          </div>
          
          <nav aria-label="Enlaces del ecosistema">
            <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6 lg:mb-8">
              Ecosistema
            </h5>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1">
                  Solicitar Tarjeta PDS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1">
                  Portal de Donaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1">
                  Comunidad Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1">
                  Auditoría Blockchain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1">
                  Términos Legales
                </a>
              </li>
            </ul>
          </nav>

          <address className="not-italic">
            <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-6 lg:mb-8">
              Contacto Oficial
            </h5>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-brand-gold shrink-0" aria-hidden="true" />
                <span>
                  Santo Domingo, DN<br/>República Dominicana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:info@fundaprodes.org" 
                  className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1"
                >
                  info@fundaprodes.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+18095550123" 
                  className="hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-1"
                >
                  +1 (809) 555-0123
                </a>
              </li>
            </ul>
          </address>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
          <p>&copy; 1996 - {currentYear} FUNDAPRODES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4 lg:gap-8 flex-wrap justify-center">
             <span>Security Level: High</span>
             <span>Server: DO-SDQ-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
