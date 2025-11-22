@echo off
echo ========================================
echo   PUSH A GITHUB CON TOKEN
echo ========================================
echo.

set /p GITHUB_TOKEN="Ingresa tu token de GitHub: "

if "%GITHUB_TOKEN%"=="" (
    echo ERROR: No ingresaste el token
    pause
    exit /b 1
)

echo.
echo Configurando remote con token...
git remote set-url origin https://%GITHUB_TOKEN%@github.com/fudaprodesoficial/fundaprodes-platform.git

echo.
echo Haciendo push...
git push origin main

if errorlevel 1 (
    echo.
    echo ERROR: El push fallo
    echo Verifica que el token sea correcto y tenga permisos
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo   PUSH EXITOSO!
    echo ========================================
    echo.
    echo Vercel deberia desplegar automaticamente ahora
    echo.
    pause
)

