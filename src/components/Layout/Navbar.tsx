import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';
import Logo from './Logo';
import { useWallet } from '../../hooks/useWallet';
import LanguageSelector from '../common/LanguageSelector';
import QRCode from '../common/QRCode';
import { cn } from '../../utils/cn';

interface NavbarProps {
  isScrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'FUNDACIÓN', href: '#nosotros' },
  { label: 'JUNTA DIRECTIVA', href: '#junta-directiva' },
  { label: 'IMPACTO', href: '#areas' },
  { label: 'INVERSIONISTAS', href: '#crypto' },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, isLoading, connectWallet, disconnectWallet } = useWallet();

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleWalletClick = useCallback(async () => {
    if (isConnected) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
    setIsOpen(false);
  }, [isConnected, connectWallet, disconnectWallet]);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500 border-b',
        isScrolled || isOpen
          ? 'bg-brand-navy border-white/10 py-4 backdrop-blur-sm'
          : 'bg-transparent border-transparent py-6'
      )}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#inicio" 
          className="group focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy rounded"
          aria-label="Ir al inicio"
          onClick={(e) => handleLinkClick(e, '#inicio')}
        >
          <Logo theme="light" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-[0.1em] text-white/80 hover:text-brand-gold transition-colors uppercase focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy rounded px-2 py-1"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          
          <LanguageSelector />
          
          <QRCode className="hidden lg:flex" />
          
          <button
            onClick={handleWalletClick}
            disabled={isLoading}
            className={cn(
              'px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all border',
              'focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              isConnected
                ? 'bg-white/10 text-brand-gold border-brand-gold hover:bg-white/20' 
                : 'bg-brand-gold text-brand-navy border-brand-gold hover:bg-brand-goldlight'
            )}
            aria-label={isConnected ? 'Desconectar wallet' : 'Conectar wallet'}
            aria-busy={isLoading}
          >
            {isLoading ? 'CONECTANDO...' : isConnected ? 'WALLET ACTIVE' : 'CONNECT WALLET'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-navy rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden bg-brand-navy border-t border-white/10 absolute w-full left-0 top-full transition-all duration-300',
          isOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 overflow-hidden'
        )}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col p-6 sm:p-8 space-y-4 sm:space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg sm:text-xl font-light text-white hover:text-brand-gold tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-brand-gold rounded px-2 py-1"
              onClick={(e) => {
                handleLinkClick(e, item.href);
              }}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <LanguageSelector />
            <QRCode className="w-full" />
          </div>
          <button
            onClick={handleWalletClick}
            disabled={isLoading}
            className="mt-4 w-full py-3 sm:py-4 bg-brand-gold text-brand-navy font-bold tracking-widest uppercase hover:bg-brand-goldlight transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            role="menuitem"
            aria-label={isConnected ? 'Desconectar wallet' : 'Conectar wallet'}
            aria-busy={isLoading}
          >
            {isLoading ? 'Conectando...' : isConnected ? 'Desconectar Wallet' : 'Conectar Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
