import { lazy, Suspense } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import { useScroll } from './hooks/useScroll';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Home/Hero'));
const About = lazy(() => import('./components/Home/About'));
const Board = lazy(() => import('./components/Home/Board'));
const Programs = lazy(() => import('./components/Home/Programs'));
const Values = lazy(() => import('./components/Home/Values'));
const CryptoSection = lazy(() => import('./components/Crypto/CryptoSection'));
const Ecosystem = lazy(() => import('./components/Home/Ecosystem'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-light">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-slate-600 font-light">Cargando...</p>
    </div>
  </div>
);

export default function App() {
  const isScrolled = useScroll(50);

  return (
    <ErrorBoundary>
      <div className="min-h-screen text-slate-800">
        <Navbar isScrolled={isScrolled} />
        
        <main role="main">
          <section id="inicio" aria-label="Inicio">
            <Suspense fallback={<LoadingFallback />}>
              <Hero />
            </Suspense>
          </section>
          
          <section id="nosotros" aria-label="Sobre nosotros">
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          </section>

          <section id="junta-directiva" aria-label="Junta Directiva">
            <Suspense fallback={<LoadingFallback />}>
              <Board />
            </Suspense>
          </section>

          <section id="valores" aria-label="Valores fundamentales">
            <Suspense fallback={<LoadingFallback />}>
              <Values />
            </Suspense>
          </section>
          
          <section id="areas" aria-label="Áreas de intervención">
            <Suspense fallback={<LoadingFallback />}>
              <Programs />
            </Suspense>
          </section>

          <section id="crypto" aria-label="Token PRODES">
            <Suspense fallback={<LoadingFallback />}>
              <CryptoSection />
            </Suspense>
          </section>

          <section id="ecosistema" aria-label="Ecosistema integral">
            <Suspense fallback={<LoadingFallback />}>
              <Ecosystem />
            </Suspense>
          </section>
        </main>

        <footer id="contacto" role="contentinfo" aria-label="Contacto">
          <Footer />
        </footer>

        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
