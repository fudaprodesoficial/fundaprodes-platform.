# 🚀 Instrucciones para Deploy en Vercel

## Situación Actual
- ✅ Código optimizado y mejorado
- ✅ Build exitoso (carpeta `dist/` lista)
- ✅ Configuración de Vercel (`vercel.json`) lista
- ⚠️ Necesitas hacer login con la cuenta correcta de Vercel

## Opción 1: Deploy desde Dashboard de Vercel (MÁS FÁCIL)

### Paso 1: Ve al Dashboard
1. Abre: https://vercel.com/fundaprodes-platform-s-projects/fundaprodesplatform
2. Asegúrate de estar logueado con la cuenta correcta

### Paso 2: Conectar Repositorio (si no está conectado)
1. Ve a "Settings" → "Git"
2. Si no hay repositorio conectado, haz clic en "Connect Git Repository"
3. Selecciona GitHub y autoriza Vercel
4. Busca y selecciona: `fudaprodesoficial/fundaprodes-platform`

### Paso 3: Configurar Build Settings
1. Ve a "Settings" → "General"
2. En "Build & Development Settings":
   - **Framework Preset:** Vite
   - **Root Directory:** `fundaprodes-web` (si está en subcarpeta) o `.` (si está en raíz)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Paso 4: Deploy Manual (si no está conectado a Git)
1. Ve a "Deployments"
2. Haz clic en "Create Deployment"
3. Arrastra la carpeta `dist` o súbela
4. Espera a que se complete el deploy

## Opción 2: Usar Vercel CLI (Requiere Login)

### Paso 1: Login Manual
```bash
vercel login
```
- Se abrirá el navegador
- Selecciona la cuenta correcta: `fundaprodes-platform-s-projects`
- Autoriza la aplicación

### Paso 2: Conectar Proyecto
```bash
vercel link
```
- Selecciona tu proyecto: `fundaprodesplatform`
- Confirma la configuración

### Paso 3: Deploy
```bash
vercel --prod
```

## Opción 3: Crear Repositorio en GitHub Primero

Si el repositorio no existe en GitHub:

1. Ve a: https://github.com/new
2. Crea un nuevo repositorio: `fundaprodes-platform`
3. Haz push del código:
   ```bash
   git remote add origin https://github.com/fudaprodesoficial/fundaprodes-platform.git
   git push -u origin main
   ```
4. Luego conecta el repositorio en Vercel

## Verificación Post-Deploy

Después del deploy:
- ✅ La URL será: `https://fundaprodesplatform.vercel.app` (o tu dominio)
- ✅ Verifica que la página carga correctamente
- ✅ Prueba las rutas (navegación SPA)
- ✅ Revisa el performance

## Archivos Listos para Deploy

- ✅ `dist/` - Build de producción completo
- ✅ `vercel.json` - Configuración optimizada
- ✅ Todos los archivos mejorados y optimizados

