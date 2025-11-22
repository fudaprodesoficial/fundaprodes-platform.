# Configurar Git con Token

Para usar tu token de GitHub directamente, puedes hacerlo de dos formas:

## Opción 1: Usar Token en la URL (Temporal)
```bash
git remote set-url origin https://TU_TOKEN@github.com/fudaprodesoficial/fundaprodes-platform.git
```

## Opción 2: Usar Credential Helper (Recomendado)
```bash
git config --global credential.helper store
```
Luego cuando hagas push, usa tu token como contraseña.

## Opción 3: Usar GITHUB_TOKEN como variable de entorno
Puedo configurarlo para que use tu token automáticamente.

