console.log("JS funcionando…");

// Fade in reversible
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    const revealPoint = 150;

    // Si el elemento está dentro de la pantalla → activar
    if (elementTop < windowHeight - revealPoint && elementBottom > revealPoint) {
      el.classList.add('active');
    } 
    // Si sale de la pantalla → desactivar
    else {
      el.classList.remove('active');
    }
  });
}
// --- REVEAL ON SCROLL ---
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// --- CONTADOR DE CUPOS ---
document.addEventListener("DOMContentLoaded", () => {

    let cupos = 88;

    function disminuirCupos() {
        if (cupos > 5) {
            let restar = Math.floor(Math.random() * 3) + 1;
            cupos -= restar;
        } else if (cupos > 0) {
            cupos -= 1;
        }

        if (cupos < 0) cupos = 0;

        document.getElementById("cupos-num").textContent = cupos;

        const box = document.getElementById("cupos-box");
        box.classList.remove("cupos-medio", "cupos-bajo");

        if (cupos <= 5) {
            box.classList.add("cupos-bajo");
        } else if (cupos <= 20) {
            box.classList.add("cupos-medio");
        }
    }

    setInterval(disminuirCupos, 4000);

    // CLICK FUNCIONAL REAL
    document.getElementById("cupos-box").addEventListener("click", () => {
        window.location.href = "https://t.me/+XoTRgKcR52I0NzYx";
    });

});
function irAlCanal() {
    window.location.href = "https://t.me/+XoTRgKcR52I0NzYx";
}
const images = document.querySelectorAll('.carousel-images img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showImage(i) {
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');
}

next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});
