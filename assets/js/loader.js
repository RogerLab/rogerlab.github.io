function loadHTML(selector, file) {
    fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
        })
        .then(data => {
            const container = document.querySelector(selector);
            if (container) container.innerHTML = data;
        })
        .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#nav-container", "components/nav.html");
    loadHTML("#footer-container", "components/footer.html")
});