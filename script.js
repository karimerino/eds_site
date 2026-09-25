/* =========================
   SMOOTH CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        threshold: 0.35
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-number, .section-title, .about-text, .coursework-intro, .project, .future-work"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});