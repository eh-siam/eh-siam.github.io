
/* =========================================
   SIAM PORTFOLIO — SCROLL REVEAL
========================================= */

(() => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Keep content visible when reduced motion is preferred.
    if (reduceMotion) return;

    document.documentElement.classList.add("js");

    const revealSelector = [
        "#about .container",
        "#skills .container",
        "#projects .container",
        "#experience .container",
        "#contact .container",
        ".skill-card",
        ".project-card",
        ".experience-card"
    ].join(",");

    const elements = document.querySelectorAll(revealSelector);

    // Add reveal attributes without changing the HTML structure.
    elements.forEach((element) => {
        element.setAttribute("data-reveal", "");

        // Slight stagger for cards in the same grid or list.
        if (
            element.matches(
                ".skill-card, .project-card, .experience-card"
            )
        ) {
            const siblings = Array.from(
                element.parentElement.children
            ).filter((sibling) =>
                sibling.matches(
                    ".skill-card, .project-card, .experience-card"
                )
            );

            const index = siblings.indexOf(element);
            element.style.setProperty(
                "--reveal-delay",
                `${Math.max(index, 0) * 85}ms`
            );
        }
    });

    // Fallback for browsers without IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    elements.forEach((element) => observer.observe(element));

    
})();


/* ===== Premium Scroll Reveal ===== */

(() => {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const selectors = [
        "#about .container",
        "#skills .container",
        "#projects .container",
        "#experience .container",
        "#contact .container",
        ".skills-grid .skill-card",
        ".projects-grid .project-card",
        ".showcase-grid .showcase-card",
        "#experience .experience-card"
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    if (!elements.length) return;

    document.documentElement.classList.add("premium-motion");

    elements.forEach((element) => {
        element.classList.add("premium-reveal");
    });

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => {
            element.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    elements.forEach((element, index) => {
        if (
            element.matches(
                ".skill-card, .project-card, .showcase-card, .experience-card"
            )
        ) {
            const siblings = Array.from(element.parentElement.children);
            const cardIndex = siblings.indexOf(element);

            element.style.setProperty(
                "--reveal-delay",
                `${Math.max(cardIndex, 0) * 90}ms`
            );
        }

        observer.observe(element);
    });
})();



