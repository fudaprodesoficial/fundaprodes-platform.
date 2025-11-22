@echo off
echo ========================================
echo   DEPLOY A VERCEL - FUNDAPRODES
echo ========================================
echo.

echo Paso 1: Verificando build...
call npm run build
if errorlevel 1 (
    echo ERROR: El build fallo
    pause
    exit /b 1
)

echo.
echo Paso 2: Build completado exitosamente!
echo.
echo Paso 3: Iniciando deploy a Vercel...
echo.
echo IMPORTANTE: Si te pide login, sigue estos pasos:
echo 1. Se abrira tu navegador
echo 2. Inicia sesion con tu cuenta de Vercel
echo 3. Autoriza la aplicacion
echo 4. Vuelve aqui y presiona ENTER
echo.

vercel --prod

if errorlevel 1 (
    echo.
    echo ========================================
    echo   ALTERNATIVA: Deploy Manual
    echo ========================================
    echo.
    echo Si el deploy automatico fallo, puedes:
    echo 1. Ir a: https://vercel.com/fundaprodes-platform-s-projects/fundaprodesplatform
    echo 2. Ir a "Deployments" -^> "Create Deployment"
    echo 3. Subir la carpeta "dist" que ya esta lista
    echo.
    pause
) else (
    echo.
    echo ========================================
    echo   DEPLOY EXITOSO!
    echo ========================================
    echo.
    pause
)

