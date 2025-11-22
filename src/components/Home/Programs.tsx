import React from 'react';
import { ProjectArea } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const programs: ProjectArea[] = [
  { title: 'Salud Comunitaria', icon: null, description: 'Proyectos de salud orientados a mejorar las condiciones sanitarias de las comunidades vulnerables.' },
  { title: 'Vivienda Social', icon: null, description: 'Reconstrucción estructural de viviendas en zonas de riesgo y mejoramiento habitacional.' },
  { title: 'Seguridad Alimentaria', icon: null, description: 'Programas de nutrición infantil y geriátrica para garantizar alimentación adecuada.' },
  { title: 'Medio Ambiente', icon: null, description: 'Saneamiento urbano, reforestación comunitaria y gestión de áreas verdes.' },
  { title: 'Infraestructuras Urbanas', icon: null, description: 'Desarrollo de infraestructura básica para mejorar la calidad de vida urbana.' },
  { title: 'Drenaje Pluvial', icon: null, description: 'Sistemas de drenaje para prevenir inundaciones y mejorar el saneamiento.' },
  { title: 'Seguridad Ciudadana', icon: null, description: 'Proyectos orientados a mejorar la seguridad en las comunidades.' },
  { title: 'Agua Potable', icon: null, description: 'Sistemas de agua potable para garantizar acceso a agua limpia.' },
  { title: 'Iluminación Pública', icon: null, description: 'Iluminación pública solar para seguridad ciudadana y mejoramiento urbano.' },
  { title: 'Conectividad Peatonal', icon: null, description: 'Infraestructura peatonal y accesibilidad urbana para movilidad segura.' },
  { title: 'Áreas Verdes', icon: null, description: 'Creación y mantenimiento de espacios verdes comunitarios.' },
  { title: 'Desechos Sólidos', icon: null, description: 'Gestión y manejo adecuado de desechos sólidos en las comunidades.' },
];

const Programs: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 sm:py-32 bg-brand-light"
      aria-labelledby="programs-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'mb-12 lg:mb-20 transition-opacity duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <h2 id="programs-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 sm:mb-6">
            ÁREAS DE INTERVENCIÓN
          </h2>
          <p className="text-slate-500 max-w-xl text-base sm:text-lg font-light">
            Nuestros proyectos están diseñados para atacar las causas raíz de la pobreza, no solo sus síntomas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className={cn(
                'bg-white p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group',
                'focus-within:ring-2 focus-within:ring-brand-gold focus-within:shadow-xl',
                'transition-opacity duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              tabIndex={0}
              role="article"
              aria-label={`Proyecto: ${program.title}`}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6 md:mb-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                  Proyecto
                </span>
                <ArrowUpRight 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 group-hover:text-brand-gold transition-colors shrink-0" 
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform">
                {program.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
