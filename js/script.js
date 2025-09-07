// ---------------- Sidebar toggle ----------------
const btn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

// Toggle sidebar open/close on button click
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

// Update icon based on window resize
window.addEventListener('resize', () => {
  if (sidebar.classList.contains('open')) {
    if (window.innerWidth < 575) btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_up';
    else btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_left';
  } else {
    if (window.innerWidth < 575) btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_down';
    else btn.querySelector('.material-symbols-outlined').textContent = 'keyboard_double_arrow_right';
  }
});



// ---------------- Modals ---------------- //
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

// Opens the modal when a card is clicked
cards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

// Closes the modal when the close button is clicked
closes.forEach(close => {
  close.addEventListener("click", () => {
    close.closest(".modal").style.display = "none";
  });
});

// Closes the modal if user clicks outside of it
window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});


// ---------------- Git Basics Accordion ---------------- //
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".gitbasics");

  accordions.forEach(acc => {
    const header = acc.querySelector(".gitbasics-header");
    const content = acc.querySelector(".gitbasics-content");

    header.addEventListener("click", () => {
  acc.classList.toggle("open");
  content.classList.toggle("open");
  header.classList.toggle("open");
    });
  });
});


// ---------------- Övriga Accordions ---------------- //
document.addEventListener("DOMContentLoaded", () => {
  const gitCategory = document.querySelectorAll(".gitcategory");
  gitCategory.forEach(acc => {
    const categoryHeader = acc.querySelector(".gitcategory-header");
    const categoryContent = acc.querySelector(".gitcategory-content");
    const categoryGrid = document.getElementById("categoryGrid");
    const id = acc.id;

    categoryHeader.addEventListener("click", () => {
      acc.classList.toggle("open");
      console.log(id);

      


      categoryContent.classList.toggle("open");
      categoryHeader.classList.toggle("open");
      categoryGrid.classList.toggle("expanded");
    });
  });
});