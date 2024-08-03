document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        alert("Thank you for your feedback!");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    document.querySelector('.prev').addEventListener('click', () => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        images[currentIndex].classList.add('visible');
    });

    document.querySelector('.next').addEventListener('click', () => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        images[currentIndex].classList.add('visible');
    });

    // Initialize the first image
    images[currentIndex].classList.add('visible');
});

