const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

const pageLink = window.location.href.split("/");
const currentPage = pageLink[pageLink.length-1];
let homeLink = document.querySelector("#nav-link1");

if (currentPage == "Home.html" || "Home.html#") {
    homeLink.classList.add("CurrentPage");
}
// asldj]satisfiess
// s
// s
// s
// //s
// s