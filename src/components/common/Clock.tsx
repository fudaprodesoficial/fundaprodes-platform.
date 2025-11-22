import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-DO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-DO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-brand-navy/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <ClockIcon className="w-5 h-5 text-brand-gold" aria-hidden="true" />
        <span className="text-xs font-bold tracking-wider text-brand-gold uppercase">
          Hora Local
        </span>
      </div>
      <div className="font-mono text-3xl font-bold text-white mb-2 tabular-nums">
        {formatTime(time)}
      </div>
      <div className="text-xs text-gray-400 font-light capitalize">
        {formatDate(time)}
      </div>
    </div>
  );
};

export default Clock;

