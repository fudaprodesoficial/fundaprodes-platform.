import React from 'react';
import { Target, Eye } from 'lucide-react';
import LazyImage from '../common/LazyImage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

const About: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 sm:py-32 bg-white text-brand-navy"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          <div className={cn(
            'transition-opacity duration-1000 delay-100',
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}>
             <h4 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
               Sobre Nosotros
             </h4>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Veintinueve años construyendo <br className="hidden md:block"/>infraestructura social.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                La Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada (FUNDAPRODES) fue creada el 10 de enero del año 1996, en la ciudad de Santo Domingo, Distrito Nacional, República Dominicana, con registro No. 771, dotada del Registro Nacional de Contribuyente (RNC) no. 4-01-51387-2, obteniendo su personalidad jurídica en fecha 31 de mayo del año 1996, mediante el Decreto del Poder Ejecutivo No. 145-96.
              </p>
              <p>
                Se constituye no solo como una organización benéfica, sino como un vehículo de transformación estructural, operando con la precisión de una corporación y el corazón de una familia, focalizando recursos en la erradicación sistémica de la pobreza extrema en el Distrito Nacional.
              </p>
              <p className="font-serif italic text-brand-navy">
                "Fomentando el derecho de la mujer dominicana a vivir con dignidad"
              </p>
            </div>
          </div>
          <div className={cn(
            'relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 transition-opacity duration-1000 delay-200',
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}>
            <LazyImage 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
              alt="Impacto social de FUNDAPRODES en comunidades del Distrito Nacional" 
              className="w-full h-full object-cover grayscale contrast-[1.25]"
            />
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-brand-navy p-6 lg:p-10 text-white max-w-xs hidden lg:block shadow-xl" aria-hidden="true">
                <p className="font-serif text-xl lg:text-2xl italic">
                  "El derecho a vivir con dignidad no es negociable."
                </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars - Minimalist */}
        <div 
          ref={pillarsRef as React.RefObject<HTMLDivElement>}
          className={cn(
            'grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 transition-opacity duration-1000 delay-300',
            pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <article className="bg-brand-light p-12 lg:p-16 hover:bg-white transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold">
            <Target className="w-12 h-12 text-brand-gold mb-8" strokeWidth={1} aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Misión</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Concebir, Formular, elaborar, lograr financiar y desarrollar proyectos sociales que vayan al auxilio, rescate, mejoramiento, fomento y transformación de las precarias condiciones que limitan el espectro de salud, educación, medio ambiente, hábitat, servicios públicos e infraestructura urbana de las zonas vulnerables del territorio nacional expuestas a fenómenos naturales donde habitan sectores de mínimos recursos sometidos a un escenario social de hacinamiento, exclusión social y extrema pobreza.
            </p>
            <p className="text-slate-600 font-light leading-relaxed">
              Construir una sociedad más solidaria y servir de apoyo a los estratos de la población mas necesitados que necesiten asistencia para la solución de sus problemas comunitarios y colectivos mas apremiantes, sobre todo en la inserción laboral y en el emprendimiento comercial.
            </p>
          </article>
          <article className="bg-brand-light p-12 lg:p-16 hover:bg-white transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-gold">
            <Eye className="w-12 h-12 text-brand-gold mb-8" strokeWidth={1} aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Visión</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Ser una organización referente en el ámbito nacional por la creación de proyectos innovadores que garanticen que podamos lograr, al mediano plazo, transformar nuestro país en una sociedad mas justa, humana y equitativa, donde cada persona tenga el derecho a una vida digna y a tener sus necesidades básicas cubiertas.
            </p>
            <p className="text-slate-600 font-light leading-relaxed">
              Apostar por un esfuerzo y trabajo de calidad en un entorno solidario desarrollado sobre la base de un equipo humano altamente competente y motivado, articulado desde una organización moderna en su gestión y profesional en su funcionamiento, para desde la iniciativa y fuerza de voluntad necesarias lograr cambiar el rostro de la actual sociedad dominicana.
            </p>
          </article>
        </div>

      </div>
    </section>
  );
};

export default About;
