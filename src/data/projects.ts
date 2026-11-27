// Añade aquí más proyectos. androidUrl admite una ruta local o una URL pública.
export const projects = [{
  id: 'sigi', name: 'SIGI', category: 'Gestión de inventario',
  description: 'Herramientas en orden. Préstamos bajo control.',
  webUrl: 'https://sigi-uleam-frontend.vercel.app/login',
  androidUrl: import.meta.env.PUBLIC_SIGI_ANDROID_URL || (import.meta.env.DEV ? '/downloads/application-37702ee4-f0d0-4f51-9a61-6c0817bd8d25.apk' : ''),
}];
