# FUNDAPRODES Web Platform

Plataforma web oficial de la Fundación Dominicana Pro-Ayuda y Desarrollo a la Mujer Desamparada (FUNDAPRODES). Una aplicación moderna construida con React, TypeScript y Tailwind CSS que presenta el ecosistema de inversión social y tokenización de activos reales (RWA).

## 🚀 Características Principales

- **Diseño Premium**: UI moderna y elegante con animaciones suaves
- **Performance Optimizado**: Lazy loading, code splitting y optimizaciones avanzadas
- **Accesibilidad**: Cumple con estándares WCAG 2.1, navegación por teclado y ARIA labels
- **SEO Optimizado**: Meta tags completos, Schema.org markup y estructura semántica
- **Responsive Design**: Diseño adaptativo para todos los dispositivos
- **TypeScript**: Código type-safe y mantenible

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca UI moderna
- **TypeScript** - Type safety y mejor DX
- **Vite** - Build tool rápido y eficiente
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Iconos modernos y ligeros
- **Recharts** - Visualización de datos (preparado)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🚀 Deploy en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel:

1. **Conectar con GitHub**: Si el repositorio está en GitHub, Vercel detectará automáticamente los cambios
2. **Deploy manual**: Puedes hacer deploy desde el dashboard de Vercel o usando la CLI:
   ```bash
   npm i -g vercel
   vercel
   ```
3. **Variables de entorno**: Si necesitas variables de entorno, configúralas en el dashboard de Vercel

El archivo `vercel.json` está configurado con:
- ✅ Build optimizado para Vite
- ✅ Rewrites para SPA (Single Page Application)
- ✅ Headers de seguridad
- ✅ Cache optimizado para assets estáticos

## ✨ Mejoras Implementadas

### Performance
- ✅ Lazy loading de componentes con React.lazy()
- ✅ Code splitting automático por rutas
- ✅ Lazy loading de imágenes con Intersection Observer
- ✅ Memoización de callbacks con useCallback
- ✅ Optimización de re-renders
- ✅ Chunk splitting optimizado en Vite

### Accesibilidad
- ✅ ARIA labels en todos los elementos interactivos
- ✅ Navegación por teclado completa
- ✅ Focus management mejorado
- ✅ Contraste de colores optimizado
- ✅ Estructura semántica HTML5
- ✅ Roles ARIA apropiados

### SEO
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Schema.org structured data (JSON-LD)
- ✅ Títulos y descripciones optimizados
- ✅ URLs semánticas
- ✅ Sitemap ready

### Código
- ✅ Hooks personalizados reutilizables
- ✅ TypeScript estricto
- ✅ Error boundaries para manejo de errores
- ✅ Componentes modulares y reutilizables
- ✅ Utilidades compartidas (cn helper)

### UX
- ✅ Animaciones al scroll con Intersection Observer
- ✅ Loading states en componentes lazy
- ✅ Scroll to top button
- ✅ Transiciones suaves
- ✅ Estados de hover mejorados
- ✅ Feedback visual en interacciones

### Responsive Design
- ✅ Breakpoints optimizados
- ✅ Mobile-first approach
- ✅ Menú móvil mejorado
- ✅ Imágenes responsivas
- ✅ Tipografía escalable

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   │   ├── ErrorBoundary.tsx
│   │   ├── LazyImage.tsx
│   │   └── ScrollToTop.tsx
│   ├── Crypto/          # Sección de cripto
│   ├── Home/            # Secciones principales
│   └── Layout/          # Componentes de layout
├── hooks/               # Custom hooks
│   ├── useScroll.ts
│   ├── useIntersectionObserver.ts
│   └── useWallet.ts
├── utils/               # Utilidades
│   └── cn.ts
└── types.ts             # TypeScript types
```

## 🎨 Componentes Principales

### Layout
- **Navbar**: Navegación principal con soporte móvil
- **Footer**: Información de contacto y enlaces
- **Logo**: Componente de logo reutilizable

### Secciones
- **Hero**: Sección principal con CTA
- **About**: Información sobre la fundación
- **Values**: Valores fundamentales
- **Programs**: Áreas de intervención
- **Crypto**: Sección de tokenización
- **Ecosystem**: Ecosistema integral

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` para configuraciones específicas:

```env
VITE_API_URL=https://api.fundaprodes.org
VITE_CONTRACT_ADDRESS=0x...
```

### Tailwind CSS
Los colores de marca están definidos en `tailwind.config.js`:
- `brand-navy`: #0F172A
- `brand-gold`: #C5A059
- `brand-goldlight`: #E5C585
- `brand-slate`: #334155
- `brand-light`: #F8FAFC

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta el linter

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📄 Licencia

© 1996 - 2024 FUNDAPRODES. Todos los derechos reservados.

## 🤝 Contribuir

Este es un proyecto privado de FUNDAPRODES. Para contribuciones, contactar a info@fundaprodes.org

---

**Desarrollado con ❤️ para FUNDAPRODES**
