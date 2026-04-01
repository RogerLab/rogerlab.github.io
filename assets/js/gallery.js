document.addEventListener("DOMContentLoaded", () => {
    const slides = [
        {
            src: "/images/group_photos/2025_sep.jpeg",
            caption: "Roger Lab 2025 September"
        },
        {
            src: "/images/group_photos/2024_oct.jpeg",
            caption: "Roger Lab 2024 October"
        },
        {
            src: "/images/group_photos/2017_sep.jpeg",
            caption: "Roger Lab 2017 September"
        },
        {
            src: "/images/group_photos/2014_may.jpeg",
            caption: "Roger Lab 2014 May"
        },
        {
            src: "/images/group_photos/2012.jpeg",
            caption: "Roger Lab 2012"
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