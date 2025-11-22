import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', nativeName: 'Deutsch', flag: '🇩🇪' },
];

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('fundaprodes_language');
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) setSelectedLang(lang);
    }

    // Cerrar dropdown al hacer click fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLang(lang);
    localStorage.setItem('fundaprodes_language', lang.code);
    setIsOpen(false);
    
    // Aquí puedes agregar la lógica de traducción real
    // Por ahora solo guardamos la preferencia
    console.log('Idioma seleccionado:', lang.code);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-4 py-2 bg-brand-navy/95 backdrop-blur-sm',
          'border border-white/10 rounded-lg shadow-xl',
          'hover:bg-brand-navy hover:border-brand-gold/50',
          'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold',
          'group'
        )}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-5 h-5 text-brand-gold group-hover:rotate-12 transition-transform" aria-hidden="true" />
        <span className="text-xl">{selectedLang.flag}</span>
        <span className="text-sm font-medium text-white hidden sm:inline">
          {selectedLang.code.toUpperCase()}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-gray-400 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full right-0 mt-2 w-56 bg-brand-navy/98 backdrop-blur-md',
            'border border-white/10 rounded-lg shadow-2xl z-50',
            'overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200'
          )}
          role="menu"
        >
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 text-left',
                  'hover:bg-white/5 transition-colors',
                  'focus:outline-none focus:bg-white/5',
                  selectedLang.code === lang.code && 'bg-brand-gold/10 border-l-2 border-brand-gold'
                )}
                role="menuitem"
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{lang.nativeName}</div>
                  <div className="text-xs text-gray-400">{lang.name}</div>
                </div>
                {selectedLang.code === lang.code && (
                  <div className="w-2 h-2 bg-brand-gold rounded-full" aria-hidden="true"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

