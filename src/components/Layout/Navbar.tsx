import React, { useState } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { NavItem } from '../../types';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'FUNDACIÓN', href: '#nosotros' },
  { label: 'IMPACTO', href: '#areas' },
  { label: 'INVERSIONISTAS', href: '#crypto' },
];

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = () => {
    setWalletAddress('0x71...3A9');
  };
  
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled || isOpen
          ? 'bg-brand-navy border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href="#inicio" className="group">
          <Logo theme="light" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-[0.1em] text-white/80 hover:text-brand-gold transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          
          <button
            onClick={connectWallet}
            className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all border ${
              walletAddress 
                ? 'bg-white/10 text-brand-gold border-brand-gold' 
                : 'bg-brand-gold text-brand-navy border-brand-gold hover:bg-brand-goldlight'
            }`}
          >
            {walletAddress ? 'WALLET ACTIVE' : 'CONNECT WALLET'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 absolute w-full left-0 top-full h-screen">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-light text-white hover:text-brand-gold tracking-widest uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { connectWallet(); setIsOpen(false); }}
              className="mt-8 w-full py-4 bg-brand-gold text-brand-navy font-bold tracking-widest uppercase"
            >
              {walletAddress ? 'Conectado' : 'Conectar Wallet'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
