# SIGI Projects

Landing estática con Astro y Tailwind CSS. Los proyectos se definen en `src/data/projects.ts`.

## Ejecutar

```sh
npm install
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

El resultado se genera en `dist/` y puede publicarse en Vercel, Netlify o cualquier hosting estático.

## Descarga Android

Los APK se excluyen de Git por su tamaño. El archivo en `public/downloads/` se conserva para pruebas locales.

Para publicar la descarga:
1. En GitHub abre Releases → Draft a new release.
2. Crea una etiqueta, por ejemplo `v1.0.0`, adjunta el APK y publica la release.
3. Copia el enlace público del archivo APK.
4. En Vercel configura `PUBLIC_SIGI_ANDROID_URL` con ese enlace y vuelve a desplegar.

En desarrollo se usa el APK local como alternativa. En producción, si falta la URL, la tarjeta muestra Próximamente y no ofrece una descarga inexistente. El QR usa la URL configurada.

Para configurar la URL localmente, copia `.env.example` a `.env` y completa su valor.

Para iOS se necesita un enlace de TestFlight o App Store. Expo Go sirve para desarrollo y no sustituye una distribución independiente.

Las pantallas del hero son ilustraciones en HTML/CSS, identificadas como vistas ilustrativas. Reemplázalas por capturas reales cuando estén disponibles.
