
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
        ".skill-card",
        ".project-card",
        ".showcase-card",
        ".experience-card"
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    if (!elements.length) return;

    document.documentElement.classList.add("premium-motion");

    elements.forEach((element, index) => {
        element.classList.add("premium-reveal");

        if (
            element.matches(
                ".skill-card, .project-card, .showcase-card, .experience-card"
            )
        ) {
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 4) * 90}ms`
            );
        }
    });

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => {
            element.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach(entry => {
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

    elements.forEach(element => observer.observe(element));
})();
