const imagens = document.querySelectorAll('.carrossel-image')
let currentIndex = 0;

function proxImagem(){
    imagens[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % imagens.length;
    imagens[currentIndex].classList.add('active');
}

imagens[currentIndex].classList.add('active');

setInterval(proxImagem, 3000);