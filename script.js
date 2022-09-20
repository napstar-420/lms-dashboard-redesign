const nav = document.querySelector('.nav-wrapper');
const hammBurger = document.getElementById('ham-burger');

hammBurger.addEventListener('click', ()=> {
    nav.classList.toggle('showNav')
})