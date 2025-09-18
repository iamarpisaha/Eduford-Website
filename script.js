const navLinks = document.getElementById("nav-links");
const header = document.getElementById("header");

function showMenu(e) {
  e.stopPropagation();
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

document.addEventListener("click", hideMenu);

document.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > 80) {
    header.classList.add("bg-color");
  } else {
    header.classList.remove("bg-color");
  }
});
