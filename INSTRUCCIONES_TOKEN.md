# 🔐 Usar Token de GitHub para Push

## Método Rápido: Script Automático

1. **Ejecuta el script:**
   ```bash
   push-con-token.bat
   ```

2. **Ingresa tu token cuando se solicite**
   - El token se usará solo para este push
   - No se guardará permanentemente

## Método Manual: Configurar Remote con Token

### Opción 1: Token en la URL (Una vez)
```bash
git remote set-url origin https://TU_TOKEN_AQUI@github.com/fudaprodesoficial/fundaprodes-platform.git
git push origin main
```

### Opción 2: Usar Token como Contraseña
```bash
git push origin main
```
Cuando te pida:
- **Usuario:** `fudaprodesoficial`
- **Contraseña:** `TU_TOKEN_AQUI`

### Opción 3: Variable de Entorno (Windows)
```powershell
$env:GITHUB_TOKEN="TU_TOKEN_AQUI"
git remote set-url origin https://$env:GITHUB_TOKEN@github.com/fudaprodesoficial/fundaprodes-platform.git
git push origin main
```

## Crear Token de GitHub (si no lo tienes)

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. Selecciona permisos:
   - ✅ `repo` (acceso completo a repositorios)
4. Genera y copia el token
5. **IMPORTANTE:** Guárdalo en un lugar seguro, no se mostrará de nuevo

## Después del Push

Una vez que hagas push exitosamente:
- ✅ Vercel detectará automáticamente el cambio
- ✅ Desplegará automáticamente la nueva versión
- ✅ Verás el deploy en: https://vercel.com/fundaprodes-platform-s-projects/fundaprodesplatform

