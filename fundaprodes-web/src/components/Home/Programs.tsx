import React from 'react';
import { ProjectArea } from '../../types';
import { ArrowUpRight } from 'lucide-react';

const programs: ProjectArea[] = [
  { title: 'Desarrollo Habitacional', icon: null, description: 'Reconstrucción estructural de viviendas en zonas de riesgo.' },
  { title: 'Infraestructura Sanitaria', icon: null, description: 'Sistemas de agua potable y drenaje pluvial.' },
  { title: 'Seguridad Alimentaria', icon: null, description: 'Programas de nutrición infantil y geriátrica.' },
  { title: 'Gestión Ambiental', icon: null, description: 'Saneamiento urbano y reforestación comunitaria.' },
  { title: 'Electrificación', icon: null, description: 'Iluminación pública solar para seguridad ciudadana.' },
  { title: 'Conectividad', icon: null, description: 'Infraestructura peatonal y accesibilidad urbana.' },
];

const Programs: React.FC = () => {
  return (
    <section className="py-32 bg-brand-light">
      <div className="container mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">ÁREAS DE INTERVENCIÓN</h2>
          <p className="text-slate-500 max-w-xl text-lg font-light">
            Nuestros proyectos están diseñados para atacar las causas raíz de la pobreza, no solo sus síntomas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Proyecto</span>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-brand-gold transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:translate-x-2 transition-transform">
                {program.title}
              </h3>
              <p className="text-slate-500 font-light leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
