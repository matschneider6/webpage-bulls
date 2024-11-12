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
document.getElementById('form-contact').addEventListener('submit', function(e) {
    e.preventDefault(); // ee

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    

    localStorage.setItem('contact', JSON.stringify(contact));

    alert('Contato salvo com sucesso no LocalStorage!');
    document.getElementById('form-contact').reset();
});

