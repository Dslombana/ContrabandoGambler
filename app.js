console.log("app.js cargado");

// ----- HELPERS -----
function safeQuery(selector) {
  try { return document.querySelector(selector); }
  catch(e) { return null; }
}
function safeQueryAll(selector) {
  try { return Array.from(document.querySelectorAll(selector)); }
  catch(e) { return []; }
}

// ----- REVEAL ON SCROLL (simple y seguro) -----
function revealOnScroll() {
  const reveals = safeQueryAll('.reveal');
  const windowH = window.innerHeight;
  for (const el of reveals) {
    const r = el.getBoundingClientRect();
    if (r.top < windowH - 100) el.classList.add('active'); else el.classList.remove('active');
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// ----- CUPOS (si existe) -----
document.addEventListener("DOMContentLoaded", () => {
  const cuposNumEl = safeQuery('#cupos-num');
  const cuposBox = safeQuery('#cupos-box');
  if (!cuposNumEl || !cuposBox) return; // nada que hacer si no existe

  let cupos = 88;
  function disminuirCupos() {
    if (cupos > 5) cupos -= Math.floor(Math.random() * 3) + 1;
    else if (cupos > 0) cupos -= 1;
    if (cupos < 0) cupos = 0;

    cuposNumEl.textContent = cupos;
    cuposBox.classList.remove('cupos-medio','cupos-bajo');
    if (cupos <= 5) cuposBox.classList.add('cupos-bajo');
    else if (cupos <= 20) cuposBox.classList.add('cupos-medio');
  }

  // reduzco solo si la pestaña está visible
  const intervalId = setInterval(() => {
    if (document.visibilityState === 'visible') disminuirCupos();
  }, 4000);

  // click seguro
  cuposBox.addEventListener('click', () => {
    window.open("https://t.me/+XoTRgKcR52I0NzYx", "_blank");
  });
});

// ----- CARRUSEL (seguro si existen controles/imagenes) -----
document.addEventListener("DOMContentLoaded", () => {
  const images = safeQueryAll('.carousel-images img');
  const prev = safeQuery('.prev');
  const next = safeQuery('.next');

  if (images.length === 0 || !prev || !next) return;

  let idx = 0;
  function show(i){
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');
  }
  next.addEventListener('click', () => { idx = (idx+1) % images.length; show(idx); });
  prev.addEventListener('click', () => { idx = (idx-1+images.length) % images.length; show(idx); });
});

