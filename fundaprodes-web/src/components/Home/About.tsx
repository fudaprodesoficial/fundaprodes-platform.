import React from 'react';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white text-brand-navy">
      <div className="container mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
             <h4 className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Sobre Nosotros</h4>
             <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
               Veintiocho años construyendo <br/>infraestructura social.
             </h2>
             <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed text-justify">
               <p>
                 La Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada (FUNDAPRODES) se constituye no solo como una organización benéfica, sino como un vehículo de transformación estructural.
               </p>
               <p>
                 Desde nuestra fundación en 1996 bajo el Decreto Ejecutivo No. 145-96, hemos operado con la precisión de una corporación y el corazón de una familia, focalizando recursos en la erradicación sistémica de la pobreza extrema en el Distrito Nacional.
               </p>
             </div>
          </div>
          <div className="relative h-[600px] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
              alt="Impacto Social" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute -bottom-10 -left-10 bg-brand-navy p-10 text-white max-w-xs hidden lg:block">
                <p className="font-serif text-2xl italic">
                  "El derecho a vivir con dignidad no es negociable."
                </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars - Minimalist */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          <div className="bg-brand-light p-16 hover:bg-white transition-colors">
            <Target className="w-12 h-12 text-brand-gold mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">Misión Corporativa</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Ejecutar proyectos de alto impacto en hábitat y saneamiento, gestionando recursos con transparencia financiera para maximizar el retorno social de cada inversión.
            </p>
          </div>
          <div className="bg-brand-light p-16 hover:bg-white transition-colors">
            <Eye className="w-12 h-12 text-brand-gold mb-8" strokeWidth={1} />
            <h3 className="text-2xl font-bold mb-4">Visión Estratégica</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Establecer un nuevo estándar en el desarrollo humanitario, integrando tecnología blockchain para garantizar la trazabilidad y eficiencia en la ayuda humanitaria.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
