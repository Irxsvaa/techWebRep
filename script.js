

function toggleDescription(className) {
    var desH = document.getElementsByClassName(className)[0];
    if (desH.style.display === "none") {
        desH.style.display = "block";
    } else {
        desH.style.display = "none";
    }
}

const prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.item');
let index = 0;


window.addEventListener("DOMContentLoaded", (event) => {
    const next = document.getElementById('next');

    if (next) {
        next.addEventListener('click', function() {
            index = (index + 1) % items.length;
            carousel.style.transform = `translateX(${-index * 100}%)`;
        });
    }
});


next.addEventListener('click', function() {
    index = (index + 1) % items.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
});

prev.addEventListener('click', function() {
    index = (index - 1 + items.length) % items.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
});