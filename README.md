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

El enlace se configura con `PUBLIC_SIGI_ANDROID_URL`.

- Local: copia `.env.example` a `.env` y coloca el enlace público al APK. Reinicia el servidor después de cambiarlo.
- Vercel: agrega `PUBLIC_SIGI_ANDROID_URL` en Settings → Environment Variables, asigna el mismo enlace de `.env` y vuelve a desplegar.

El botón y el QR usan esa variable. Sin valor, la tarjeta muestra Próximamente. `.env` está excluido de Git; `.env.example` documenta la variable sin incluir el enlace.

Los APK locales se excluyen de Git por su tamaño. No es necesario incluirlos en el despliegue.

Para iOS se necesita un enlace de TestFlight o App Store. Expo Go sirve para desarrollo y no sustituye una distribución independiente.

Las pantallas del hero son ilustraciones en HTML/CSS, identificadas como vistas ilustrativas. Reemplázalas por capturas reales cuando estén disponibles.

## Acceso web

Configura `PUBLIC_SIGI_WEB_URL` en `.env` con la dirección del frontend. En Vercel agrega la misma variable y vuelve a desplegar. El acceso y su QR usan este valor; sin él, la tarjeta muestra Próximamente.
