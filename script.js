let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}


const carousel = document.getElementById('carousel');
let currentIndex = 0;

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3; // 3 es el número de imágenes
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}