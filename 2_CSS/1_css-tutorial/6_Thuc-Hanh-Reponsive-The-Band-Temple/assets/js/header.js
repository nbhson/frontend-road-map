let header = document.getElementById("header");
let navMenuIcon = document.getElementById("nav-menu-icon");
let headerHeight = header.clientHeight;
// Dong/mo menu
navMenuIcon.addEventListener("click", () => {
  let isClosed = header.clientHeight === headerHeight;

  if (isClosed) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
});


let listItems = document.querySelectorAll('#header .nav li a[href*="#"]');
// Auto close menu
for (let i = 0; i < listItems.length; i++) {
  let menuItem = listItems[i];
  
  menuItem.addEventListener("click", (event) => {
    let parentMenu =
      menuItem.nextElementSibling &&
      menuItem.nextElementSibling.classList.contains("sub-nav");

    if (parentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  });
}
