let header = document.querySelector('.header');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    header.classList.toggle('menu-open');
})