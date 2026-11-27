// Añade aquí más proyectos. androidUrl admite una ruta local o una URL pública.
export const projects = [{
  id: 'sigi', name: 'SIGI', category: 'Gestión de inventario',
  description: 'Herramientas en orden. Préstamos bajo control.',
  webUrl: import.meta.env.PUBLIC_SIGI_WEB_URL || '',
  androidUrl: import.meta.env.PUBLIC_SIGI_ANDROID_URL || '',
}];
