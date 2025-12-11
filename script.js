document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth Scroll for Anchor Links (optional, as CSS scroll-behavior: smooth is often enough, but this adds more control)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            });

        // Initial simple animation setup if needed (can be expanded)
    });

    // NUCLEAR OPTION: FORCE VLIBRAS GOLD
    function forceGold() {
        const widgets = document.querySelectorAll('[vw-access-button], .vw-access-button, [class*="vw-access-button"]');
        widgets.forEach(w => {
            w.style.setProperty('background-color', '#c4ac44', 'important');
            w.style.setProperty('background', '#c4ac44', 'important');
            w.style.setProperty('box-shadow', '0 4px 10px rgba(196, 172, 68, 0.3)', 'important');
        });

        const svgs = document.querySelectorAll('[vw-access-button] svg path, .vw-access-button svg path');
        svgs.forEach(path => {
            path.style.setProperty('fill', 'white', 'important');
            path.style.setProperty('stroke', 'white', 'important');
        });
    }

    // 1. Run repeatedly
    setInterval(forceGold, 500);

    // 2. Observer for DOM changes
    const observer = new MutationObserver(forceGold);
    observer.observe(document.body, { childList: true, subtree: true });
});
