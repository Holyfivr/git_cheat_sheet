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


// - Git basics - //
document.addEventListener("DOMContentLoaded", () => {

  const gitbasics = document.getElementById("gitbasics");
  const gitbasicsHeader = document.getElementById("gitbasics-header");

  if (gitbasics && gitbasicsHeader) {
    gitbasics.addEventListener("click", () => {
      gitbasicsHeader.classList.remove("pulse-bg");
    });
  }

  const gitpresenter = document.getElementById("gitpresenter");
  const gitpresenterHeader = document.getElementById("gitpresenter-header");
  const gitpresenterContent = document.getElementById("gitpresenter-content");
  const categoryGrid = document.getElementById("categoryGrid");
  const gitCategory = document.querySelectorAll(".gitcategory");

  function waitForTransition(element, callback) {
    let done = false;
    const handler = (e) => {
      if (e.propertyName === "max-height") {
        element.removeEventListener("transitionend", handler);
        if (!done) {
          done = true;
          callback();
        }
      }
    };
    element.addEventListener("transitionend", handler);

    setTimeout(() => {
      if (!done) {
        done = true;
        callback();
      }
    }, 800); 
  }

  
  gitCategory.forEach((category) => {
    category.addEventListener("click", () => {
      if (category.id === "category19") {
        document.getElementById(category.id + "-header").classList.remove("pulse-bg");
      }
      categoryGrid.classList.toggle("open");

      waitForTransition(categoryGrid, () => {
        gitpresenter.classList.toggle("open");

        gitpresenterHeader.innerHTML =
          document.getElementById(category.id + "-header").innerHTML + " <span class='material-symbols-outlined right'>close</span>";
        gitpresenterContent.innerHTML =
          document.getElementById(category.id + "-content").innerHTML;
        gitpresenterContent.classList.add("open");
      });
    });
  });

  gitpresenterHeader.addEventListener("click", () => {
    gitpresenter.classList.toggle("open");

    waitForTransition(gitpresenter, () => {
      categoryGrid.classList.toggle("open");
    });
  });
});
