const menu = document.querySelector('.nav-header')

function ativarScroll() {
    menu.classList.toggle('ativo', scrollY > 250);
}

window.addEventListener('scroll', ativarScroll);