import React from 'react';
import { Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo theme="light" />
            <p className="mt-8 text-gray-400 text-sm max-w-md leading-relaxed font-light">
              Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada. 
              Entidad sin fines de lucro registrada bajo el RNC 4-01-51387-2 y Decreto 145-96.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-8">Ecosistema</h5>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Solicitar Tarjeta PDS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal de Donaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidad Telegram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Auditoría Blockchain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos Legales</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-gold mb-8">Contacto Oficial</h5>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-brand-gold" />
                <span>Santo Domingo, DN<br/>República Dominicana</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:info@fundaprodes.org" className="hover:text-brand-gold transition-colors">info@fundaprodes.org</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-gold" />
                <span>+1 (809) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between text-[10px] text-gray-500 uppercase tracking-widest font-mono">
          <p>&copy; 1996 - {new Date().getFullYear()} FUNDAPRODES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>Security Level: High</span>
             <span>Server: DO-SDQ-01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
