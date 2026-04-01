document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            src: "/images/backgrounds/cape_north_1.jpeg",
            alt: "",
            caption: "Cape North at sunset."
        },
        {
            src: "/images/backgrounds/cape_north_2.jpeg",
            alt: "",
            caption: "Waves breaking along the shore."
        },
        {
            src: "/images/backgrounds/cape_north_3.jpeg",
            alt: "",
            caption: "Evening light over the Atlantic."
        }
    ];

    let currentIndex = 0;

    const image = document.getElementById("carousel-image");
    const caption = document.getElementById("carousel-caption");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const indicators = document.querySelectorAll(".carousel-indicator");

    function renderSlide(index) {
        currentIndex = index;
        image.src = slides[currentIndex].src;
        image.alt = slides[currentIndex].alt;
        if (caption) {
            caption.textContent = slides[currentIndex].caption;
        }

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === currentIndex);
        });
    }

    prevButton.addEventListener("click", () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        renderSlide(newIndex);
    });

    nextButton.addEventListener("click", () => {
        const newIndex = (currentIndex + 1) % slides.length;
        renderSlide(newIndex);
    });

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            renderSlide(Number(indicator.dataset.slide));
        });
    });

    renderSlide(currentIndex);
});