

function toggleDescription(className) {
    var desH = document.getElementsByClassName(className)[0];
    if (desH.style.display === "none") {
        desH.style.display = "block";
    } else {
        desH.style.display = "none";
    }
}






window.addEventListener("DOMContentLoaded", (event) => {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.item');
    let index = 0;
    if (next) {
        next.addEventListener('click', function() {
            index = (index + 1) % items.length;
            carousel.style.transform = `translateX(${-index * 100}%)`;
        });
    }

    if (next) {
        prev.addEventListener('click', function() {
            index = (index - 1 + items.length) % items.length;
            carousel.style.transform = `translateX(${-index * 100}%)`;
        });
    }
});

