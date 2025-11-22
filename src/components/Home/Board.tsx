import React from 'react';
import { Users, Award, Heart, Briefcase } from 'lucide-react';
import { BoardMember } from '../../types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const boardMembers: BoardMember[] = [
  {
    name: 'Otoniel Bermúdez',
    position: 'Presidente',
  },
  {
    name: 'Dolores González',
    position: 'Vicepresidente',
  },
  {
    name: 'Adriana Cabrera',
    position: 'Secretaria',
  },
  {
    name: 'Miguel Modeste',
    position: 'Tesorero',
  },
  {
    name: 'Lucrecia González',
    position: 'Vocal',
  },
];

const Board: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 sm:py-32 bg-brand-light text-brand-navy"
      aria-labelledby="board-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'text-center mb-12 lg:mb-20 transition-opacity duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <h4 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Junta Directiva
          </h4>
          <h2 id="board-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Nuestro Consejo Directivo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-3xl mx-auto leading-relaxed px-4">
            La Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada (FUNDAPRODES) 
            está constituida por un grupo de personas que sienten la necesidad de aglutinar sus 
            capacidades y esfuerzos para de manera mancomunada conformar un Consejo Directivo 
            comprometido con la transformación social.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {boardMembers.map((member, index) => (
            <article
              key={index}
              className={cn(
                'bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100',
                'focus-within:ring-2 focus-within:ring-brand-gold focus-within:shadow-lg',
                'transition-opacity duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              tabIndex={0}
              aria-label={`${member.name}, ${member.position}`}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-1 break-words">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-brand-gold uppercase tracking-wider">
                    {member.position}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Equipo de Asesores */}
        <div className={cn(
          'bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-sm border border-gray-100 transition-opacity duration-1000 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-brand-gold" aria-hidden="true" />
                Nuestro Equipo
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-3 sm:mb-4">
                Además del Consejo Directivo, FUNDAPRODES cuenta con un grupo de asesores, 
                consultores y planificadores de proyectos que han sido en parte responsables, 
                con su participación relevante, en el desarrollo y continuidad de la labor social 
                de la fundación en sus 29 años de existencia.
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold inline-block mr-2" aria-hidden="true" />
                <strong className="text-brand-navy">Todos realizan sus funciones ad-honorem</strong> y su rol principal 
                es colaborar con ideas, acciones, aportes, asistencia técnica y planificación en la 
                elaboración de los proyectos especiales que constituyen el eje estratégico de acción 
                y el motor transformador de estos sectores vulnerables de la sociedad dominicana.
              </p>
            </div>
          </div>
        </div>

        {/* Lema */}
        <div className={cn(
          'mt-8 sm:mt-12 text-center transition-opacity duration-1000 delay-700 px-4',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-brand-navy">
            "Fomentando el derecho de la mujer dominicana a vivir con dignidad"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Board;

