import React from 'react';
import { ValueItem } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const values: ValueItem[] = [
  { id: 1, title: 'DIGNIDAD', description: 'El Derecho a la Vida Digna como valor supremo de nuestra inspiración.' },
  { id: 2, title: 'SOLIDARIDAD', description: 'Valor que nos mueve a ayudar siempre al necesitado.' },
  { id: 3, title: 'JUSTICIA', description: 'Justicia económica y social como móvil de nuestra labor comunitaria.' },
  { id: 4, title: 'TRANSPARENCIA', description: 'Valor de honestidad en el uso de los recursos.' },
  { id: 5, title: 'TRABAJO EN EQUIPO', description: 'Valor que une nuestros esfuerzos y capacidades.' },
  { id: 6, title: 'SOSTENIBILIDAD', description: 'Valor que garantiza un mejoramiento social duradero.' },
  { id: 7, title: 'COMPROMISO', description: 'Valor que nos lleva a lograr los objetivos trazados.' },
  { id: 8, title: 'FLEXIBILIDAD', description: 'Valor que nos permite adaptarnos a los cambios.' },
  { id: 9, title: 'INTEGRIDAD', description: 'Valor que nos impulsa a hacer lo correcto siempre.' },
  { id: 10, title: 'RESPONSABILIDAD', description: 'Valor que nos dicta asumir consecuencias.' },
  { id: 11, title: 'TOLERANCIA', description: 'Valor de respeto a las opiniones o actitudes ajenas.' },
  { id: 12, title: 'PARTICIPACIÓN', description: 'Valor de integración de todos los involucrados.' },
];

const Values: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 sm:py-32 bg-brand-navy text-white"
      aria-labelledby="values-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-20 border-b border-white/10 pb-8 transition-opacity duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <h2 id="values-heading" className="text-4xl font-bold">
            VALORES FUNDAMENTALES
          </h2>
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase mt-4 md:mt-0">
            Código de Ética
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16">
          {values.map((value, index) => (
            <article
              key={value.id}
              className={cn(
                'group transition-opacity duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                'focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2 focus-within:ring-offset-brand-navy rounded p-2'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              tabIndex={0}
              aria-label={`Valor: ${value.title}`}
            >
              <span className="block text-xs text-brand-gold mb-4 font-mono" aria-hidden="true">
                0{value.id}
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-gold transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-brand-gold transition-colors">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
