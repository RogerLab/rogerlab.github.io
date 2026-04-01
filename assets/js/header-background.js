document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "/images/backgrounds/cape_north_1.jpeg",
        "/images/backgrounds/cape_north_2.jpeg",
        "/images/backgrounds/cape_north_3.jpeg"
    ];

    const header = document.getElementById("header");
    if (!header) return;

    let index;
    const lastIndex = parseInt(localStorage.getItem("headerImageIndex") || "-1", 10);

    if (images.length === 1) {
        index = 0;
    } else {
        do {
            index = Math.floor(Math.random() * images.length);
        } while (index === lastIndex);
    }

    header.style.backgroundImage = `url("${images[index]}")`;
    localStorage.setItem("headerImageIndex", String(index));
});