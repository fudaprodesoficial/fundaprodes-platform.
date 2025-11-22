import React from 'react';
import { ValueItem } from '../../types';

const values: ValueItem[] = [
  { id: 1, title: 'DIGNIDAD', description: 'Valor supremo e innegociable.' },
  { id: 2, title: 'SOLIDARIDAD', description: 'Compromiso activo con el bienestar ajeno.' },
  { id: 3, title: 'JUSTICIA', description: 'Equidad económica y social.' },
  { id: 4, title: 'TRANSPARENCIA', description: 'Gestión de recursos auditable.' },
  { id: 5, title: 'SOSTENIBILIDAD', description: 'Impacto duradero a largo plazo.' },
  { id: 6, title: 'INTEGRIDAD', description: 'Ética profesional inquebrantable.' },
];

const Values: React.FC = () => {
  return (
    <section className="py-32 bg-brand-navy text-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="text-4xl font-bold">VALORES FUNDAMENTALES</h2>
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase mt-4 md:mt-0">Código de Ética</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {values.map((value) => (
            <div key={value.id} className="group">
              <span className="block text-xs text-brand-gold mb-4 font-mono">0{value.id}</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-gold transition-colors">{value.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-brand-gold transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
