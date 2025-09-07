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


// // ---------------- Övriga Accordions ---------------- //
// document.addEventListener("DOMContentLoaded", () => {
//   const gitCategory = document.querySelectorAll(".gitcategory");
//   gitCategory.forEach(acc => {
//     const categoryHeader = acc.querySelector(".gitcategory-header");
//     const categoryContent = acc.querySelector(".gitcategory-content");
//     const categoryGrid = document.getElementById("categoryGrid");
//     const id = acc.id;
//     const headerContent = id + "-header";
//     const contentContent = id + "-content";
//     categoryHeader.addEventListener("click", () => {
//       acc.classList.toggle("open");
//       console.log(id);
//       console.log(headerContent);
//       console.log(contentContent);
//       categoryHeader.classList.toggle("open");  
//       const gitpresenter = document.getElementById("gitpresenter");
//       const gitpresenterHeader = document.getElementById("gitpresenter-header");
//       const gitpresenterContent = document.getElementById("gitpresenter-content");
//       gitpresenter.classList.add("open"); //öppnar gitpresenter
//       gitpresenterContent.classList.add("open");
//       gitpresenterHeader.classList.add("open");
//       gitpresenterHeader.innerHTML = document.getElementById(headerContent).innerHTML;
//       gitpresenterContent.innerHTML = document.getElementById(contentContent).innerHTML;
//       categoryGrid.style.maxHeight = "0px"; //gömmer categorygrid
//       categoryGrid.style.overflow = "hidden"; //gömmer categorygrid
//     });
//   });
// });

// Togglar gitpresenter om man klickar på den (så att man kan stänga den)
document.addEventListener("DOMContentLoaded", () => {
  const gitpresenter = document.getElementById("gitpresenter");
  const gitpresenterHeader = document.getElementById("gitpresenter-header");
  const gitpresenterContent = document.getElementById("gitpresenter-content");
  const categoryGrid = document.getElementById("categoryGrid");
  const gitCategory = document.querySelectorAll(".gitcategory");

  // Hjälpfunktion: vänta tills transition är klar
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

    // fallback om transition inte körs (t.ex. inga ändringar)
    setTimeout(() => {
      if (!done) {
        done = true;
        callback();
      }
    }, 800); // samma som din transition-tid i CSS
  }

  // Klick på en kategori
  gitCategory.forEach((category) => {
    category.addEventListener("click", () => {
      // stäng kategorigrid först
      categoryGrid.classList.toggle("open");

      waitForTransition(categoryGrid, () => {
        // öppna presenter
        gitpresenter.classList.toggle("open");

        // fyll innehållet
        gitpresenterHeader.innerHTML =
          document.getElementById(category.id + "-header").innerHTML + " <span class='material-symbols-outlined right'>close</span>";
        gitpresenterContent.innerHTML =
          document.getElementById(category.id + "-content").innerHTML;
        gitpresenterContent.classList.add("open");
      });
    });
  });

  // Klick på presenter-header → stäng presenter, öppna grid
  gitpresenterHeader.addEventListener("click", () => {
    gitpresenter.classList.toggle("open");

    waitForTransition(gitpresenter, () => {
      categoryGrid.classList.toggle("open");
    });
  });
});
