# 🚀 Guía de Deploy en Vercel

## Configuración Lista ✅

El proyecto está completamente configurado para desplegarse en Vercel con:
- ✅ `vercel.json` - Configuración de Vercel optimizada
- ✅ Headers de seguridad configurados
- ✅ Rewrites para SPA (Single Page Application)
- ✅ Cache optimizado para assets estáticos
- ✅ Build optimizado para producción

## Opciones de Deploy

### Opción 1: Deploy Automático desde GitHub (Recomendado)

1. **Conectar repositorio en Vercel:**
   - Ve a tu proyecto en Vercel: https://vercel.com/fundaprodes-platform-s-projects/fundaprodesplatform
   - Si no está conectado, haz clic en "Connect Git"
   - Selecciona tu repositorio de GitHub

2. **Configuración automática:**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Usará la configuración de `vercel.json`
   - Cada push a `main` desplegará automáticamente

3. **Hacer commit y push:**
   ```bash
   git add .
   git commit -m "feat: mejoras completas - performance, accesibilidad, SEO"
   git push origin main
   ```

### Opción 2: Deploy Manual con Vercel CLI

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login en Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy a producción:**
   ```bash
   vercel --prod
   ```

### Opción 3: Deploy desde Dashboard de Vercel

1. Ve a tu proyecto: https://vercel.com/fundaprodes-platform-s-projects/fundaprodesplatform
2. Haz clic en "Deployments" → "Create Deployment"
3. Sube la carpeta `dist` después de hacer `npm run build`

## Configuración del Proyecto en Vercel

### Build Settings (ya configurado en vercel.json):
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Variables de Entorno (si las necesitas):
Si necesitas variables de entorno:
1. Ve a Settings → Environment Variables
2. Agrega las variables necesarias (ej: `VITE_API_URL`)

## Verificación Post-Deploy

Después del deploy, verifica:
- ✅ La página carga correctamente
- ✅ Las rutas funcionan (SPA routing)
- ✅ Los assets se cargan (CSS, JS, imágenes)
- ✅ El SEO funciona (meta tags)
- ✅ Performance (Lighthouse score)

## URLs del Deploy

Una vez desplegado, tendrás:
- **Production:** `https://fundaprodesplatform.vercel.app` (o tu dominio personalizado)
- **Preview:** Cada PR tendrá su propia URL de preview

## Troubleshooting

Si hay problemas:
1. Revisa los logs en Vercel Dashboard → Deployments → Logs
2. Verifica que `vercel.json` esté en la raíz del proyecto
3. Asegúrate de que `package.json` tenga el script `build`
4. Verifica que no haya errores en el build local: `npm run build`

## Próximos Pasos

1. ✅ Hacer commit de todos los cambios
2. ✅ Push a GitHub
3. ✅ Vercel desplegará automáticamente
4. ✅ Verificar el deploy en producción

