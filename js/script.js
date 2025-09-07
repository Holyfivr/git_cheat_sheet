// ---------------- Sidebar toggle ----------------
const btn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

if (btn && sidebar) {
  const icon = btn.querySelector('.material-symbols-outlined');
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  
    if (sidebar.classList.contains('open')) {

      if (window.innerWidth < 575) icon.textContent = 'keyboard_double_arrow_up';
      else icon.textContent = 'keyboard_double_arrow_left';

    } else {
      if (window.innerWidth < 575) icon.textContent = 'keyboard_double_arrow_down';
      else icon.textContent = 'keyboard_double_arrow_right';
    }
  });
}

window.addEventListener('resize', () => {
  if (sidebar.classList.contains('open')) {
    if (window.innerWidth < 575) btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_up';
    else btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_left';
  } else {
    if (window.innerWidth < 575) btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_down';
    else btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_right';
  }
});

// ---------------- Accordion ----------------
const accordionBtns = document.querySelectorAll('.accordion-item');
const accordionBodies = document.querySelectorAll('.accordion-body');
const accordionIcons = document.querySelectorAll('.accordion-button .material-symbols-outlined');

accordionBtns.forEach((btn, index) => {
  const body = accordionBodies[index];
  const icon = accordionIcons[index];

  btn.addEventListener('click', () => {
    if (body.classList.contains('open')) {
      // Stäng
      body.style.height = body.scrollHeight + "px"; // sätt först till full höjd
      requestAnimationFrame(() => {
        body.style.height = "1rem"; // sedan till 1 (triggar transition)
      });
      body.classList.remove('open');
      icon.textContent = 'keyboard_double_arrow_down';
    } else {
      // Öppna
      body.classList.add('open');
      body.style.height = body.scrollHeight + "px";

      // efter transition, sätt height:auto så den anpassar sig dynamiskt
      body.addEventListener('transitionend', function handler() {
        if (body.classList.contains('open')) {
          body.style.height = "auto";
        }
        body.removeEventListener('transitionend', handler);
      });

      icon.textContent = 'keyboard_double_arrow_up';
    }
  });
});