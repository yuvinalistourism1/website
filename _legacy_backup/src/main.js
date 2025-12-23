import './style.css'
import { createIcons, Menu, ArrowLeft, ArrowRight, Instagram, Facebook, Mail } from 'lucide';
import { animate, inView, stagger, scroll } from "motion";

// Initialize Lucide Icons
createIcons({
    icons: {
        Menu,
        ArrowLeft,
        ArrowRight,
        Instagram,
        Facebook,
        Mail
    }
});

// Text Reveal Animations on Scroll
inView(".overflow-invisible h2, .overflow-invisible h1", ({ target }) => {
    animate(
        target,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
    );
}, { amount: 0.3 });

// Section Fade-ins
inView("section", ({ target }) => {
    const elements = target.querySelectorAll("p, span, a, img, .package-card");
    if (elements.length > 0) {
        animate(
            elements,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.6, delay: stagger(0.05), easing: "ease-out" }
        );
    }
}, { amount: 0.2 });

console.log('Yuvinalis Tourism Premium Redesign Initialized');
