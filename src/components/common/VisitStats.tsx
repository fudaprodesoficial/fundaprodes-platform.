import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Eye } from 'lucide-react';
import { cn } from '../../utils/cn';

interface VisitStatsProps {
  className?: string;
}

const VisitStats: React.FC<VisitStatsProps> = ({ className }) => {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    online: 0,
  });

  useEffect(() => {
    // Obtener estadísticas del localStorage
    const storedTotal = localStorage.getItem('fundaprodes_total_visits');
    const storedToday = localStorage.getItem('fundaprodes_today_visits');
    const lastVisitDate = localStorage.getItem('fundaprodes_last_visit_date');
    const today = new Date().toDateString();

    let total = storedTotal ? parseInt(storedTotal) : 0;
    let todayCount = storedToday ? parseInt(storedToday) : 0;

    // Si es un nuevo día, resetear contador del día
    if (lastVisitDate !== today) {
      todayCount = 0;
      localStorage.setItem('fundaprodes_last_visit_date', today);
    }

    // Incrementar visitas
    total += 1;
    todayCount += 1;

    // Guardar en localStorage
    localStorage.setItem('fundaprodes_total_visits', total.toString());
    localStorage.setItem('fundaprodes_today_visits', todayCount.toString());

    // Simular usuarios en línea (entre 5 y 25)
    const online = Math.floor(Math.random() * 20) + 5;

    setStats({
      total,
      today: todayCount,
      online,
    });

    // Animación de conteo
    const animateCount = (target: number, setter: (val: number) => void, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    animateCount(total, (val) => setStats((s) => ({ ...s, total: val })));
    animateCount(todayCount, (val) => setStats((s) => ({ ...s, today: val })));
  }, []);

  return (
    <div className={cn('bg-brand-navy/95 backdrop-blur-sm border border-white/10 rounded-lg p-3 sm:p-4 shadow-xl w-full sm:w-auto', className)}>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" aria-hidden="true" />
        <span className="text-[10px] sm:text-xs font-bold tracking-wider text-brand-gold uppercase">
          Estadísticas
        </span>
      </div>
      
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs text-gray-400 font-light">Total Visitas</span>
          </div>
          <span className="font-mono text-base sm:text-lg font-bold text-white tabular-nums">
            {stats.total.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs text-gray-400 font-light">Hoy</span>
          </div>
          <span className="font-mono text-base sm:text-lg font-bold text-brand-gold tabular-nums">
            {stats.today.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs text-gray-400 font-light">En Línea</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="font-mono text-base sm:text-lg font-bold text-green-400 tabular-nums">
              {stats.online}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitStats;

