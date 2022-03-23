const pulse = document.querySelector('.pulse');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('.box-main');

pulse.addEventListener('click', clicou);


function clicou() {
    header.style.transform = 'translate3d(0, -1000px, 0)';
    footer.style.transform = 'translate3d(0, 1000px, 0)';
    pulse.style.opacity = '0';
    nav.style.zIndex = '1';
    nav.style.position = 'none';
}

