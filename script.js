document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll("nav a[href^='#']");

    for (let link of smoothScrollLinks) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // Fade-in effect for sections
    const fadeInSections = document.querySelectorAll(".fade-in");
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});
