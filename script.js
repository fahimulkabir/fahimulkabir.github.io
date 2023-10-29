// const bar = document.getElementById("bar");
// const nav = document.getElementById("navbar");

// if (bar) {
//   bar.addEventListener("click", () => {
//     if (nav.classList.contains("active")) {
//       nav.classList.remove("active");
//     } else {
//       nav.classList.add("active");
//     }
//   });
// }

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

// Function to handle clicks outside the nav list
function handleClickOutside(event) {
  if (!nav.contains(event.target) && !bar.contains(event.target)) {
    nav.classList.remove("active");
    // Remove the event listener to prevent further clicks from closing the menu
    document.body.removeEventListener("click", handleClickOutside);
  }
}

if (bar) {
  bar.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
      // Add the event listener to detect clicks outside the nav list
      document.body.addEventListener("click", handleClickOutside);
    }
  });
}
