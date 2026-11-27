(() => {
  const title = document.querySelector('[data-typewriter]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!title || motion.matches) return;
  const parts = Array.from(title.querySelectorAll('[data-type-text]'));
  const texts = parts.map(part => part.textContent);
  let segment = 0, character = 0, timer;
  function finish() {
    clearTimeout(timer);
    parts.forEach((part, index) => { part.textContent = texts[index]; });
    title.querySelectorAll('.is-typing').forEach(line => line.classList.remove('is-typing'));
  }
  parts.forEach(part => { part.textContent = ''; });
  function type() {
    if (motion.matches) { finish(); return; }
    title.querySelectorAll('.is-typing').forEach(line => line.classList.remove('is-typing'));
    const part = parts[segment];
    part.parentElement.classList.add('is-typing');
    part.textContent = texts[segment].slice(0, ++character);
    if (character === texts[segment].length) {
      segment++;
      character = 0;
    }
    timer = setTimeout(segment < parts.length ? type : finish, segment < parts.length ? 85 : 450);
  }
  timer = setTimeout(type, 350);
  motion.addEventListener('change', event => { if (event.matches) finish(); });
})();
