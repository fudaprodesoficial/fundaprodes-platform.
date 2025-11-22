import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, X, QrCode } from 'lucide-react';
import Logo from '../Layout/Logo';
import { cn } from '../../utils/cn';

interface QRCodeProps {
  url?: string;
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ 
  url = 'https://fundaprodesplatform.vercel.app',
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoDataUrl, setLogoDataUrl] = useState<string>('');

  useEffect(() => {
    // Cargar el logo como data URL para el QR
    const loadLogo = async () => {
      try {
        const response = await fetch('/favicon.svg');
        const svgText = await response.text();
        const blob = new Blob([svgText], { type: 'image/svg+xml' });
        const reader = new FileReader();
        reader.onloadend = () => {
          setLogoDataUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error loading logo:', error);
      }
    };
    loadLogo();
  }, []);

  const downloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width * 2; // High resolution
      canvas.height = img.height * 2;
      ctx?.scale(2, 2);
      ctx?.drawImage(img, 0, 0);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'fundaprodes-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'flex items-center gap-2 px-3 sm:px-4 py-2 bg-brand-navy/95 backdrop-blur-sm',
          'border border-white/10 rounded-lg shadow-xl',
          'hover:bg-brand-navy hover:border-brand-gold/50',
          'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold',
          'group',
          className
        )}
        aria-label="Mostrar código QR"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors shrink-0">
          <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" aria-hidden="true" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-white hidden sm:inline">
          QR Code
        </span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Código QR"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="mb-4 flex justify-center">
                <Logo theme="dark" className="justify-center" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">
                Código QR Premium
              </h3>
              <p className="text-sm text-gray-500">
                Escanea para acceder directamente a nuestra plataforma
              </p>
            </div>

            {/* QR Code Container */}
            <div className="relative bg-gradient-to-br from-brand-light via-white to-brand-light p-8 rounded-2xl border-2 border-brand-gold/30 mb-6 flex items-center justify-center shadow-inner">
              {/* Premium Decorative Elements */}
              <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-brand-gold/30 rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-brand-gold/30 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-brand-gold/30 rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-brand-gold/30 rounded-br-lg"></div>
              
              {/* QR Code with Logo */}
              <div className="relative z-10">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <QRCodeSVG
                    id="qr-code-svg"
                    value={url}
                    size={280}
                    level="H"
                    includeMargin={true}
                    fgColor="#0F172A"
                    bgColor="#FFFFFF"
                    imageSettings={logoDataUrl ? {
                      src: logoDataUrl,
                      height: 50,
                      width: 50,
                      excavate: true,
                    } : undefined}
                  />
                </div>
                
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-brand-gold/10 rounded-xl pointer-events-none blur-xl"></div>
              </div>
              
              {/* Logo Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-navy px-4 py-2 rounded-full shadow-lg border-2 border-brand-gold">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-brand-gold flex items-center justify-center rounded">
                    <span className="text-xs font-bold text-brand-gold">F</span>
                  </div>
                  <span className="text-xs font-bold text-white tracking-wider">FUNDAPRODES</span>
                </div>
              </div>
            </div>

            {/* URL Display */}
            <div className="bg-brand-light rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-500 mb-1 text-center">URL</p>
              <p className="text-sm font-mono text-brand-navy text-center break-all">
                {url}
              </p>
            </div>

            {/* Download Button */}
            <button
              onClick={downloadQR}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-gold to-brand-goldlight hover:from-brand-goldlight hover:to-brand-gold text-brand-navy font-bold text-sm tracking-wider uppercase transition-all rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 group"
            >
              <Download size={18} className="group-hover:animate-bounce" aria-hidden="true" />
              Descargar QR Code Premium
            </button>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-4">
              Comparte este código para acceso rápido
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default QRCode;

