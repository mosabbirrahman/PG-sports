// Function to toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");

// let index = 0;

// function showSlide(i) {
//   index = (i + slides.length) % slides.length;
//   slider.style.transform = translateX(-${index * 100}%);
// }

// prevBtn.addEventListener("click", () => showSlide(index - 1));
// nextBtn.addEventListener("click", () => showSlide(index + 1));