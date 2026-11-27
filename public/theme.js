(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let chosen;
  try { chosen = localStorage.getItem('sigi-theme'); } catch {}
  if (chosen !== 'dark' && chosen !== 'light') chosen = null;
  function apply(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro');
      button.title = theme === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro';
    });
  }
  apply(chosen || (system.matches ? 'dark' : 'light'));
  system.addEventListener('change', event => {
    if (!chosen) apply(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        chosen = root.dataset.theme === 'dark' ? 'light' : 'dark';
        apply(chosen);
        try { localStorage.setItem('sigi-theme', chosen); } catch {}
      });
    });
  });
})();
