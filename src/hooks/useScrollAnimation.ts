import { useEffect } from 'react';

export const useScrollAnimation = () => {
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all elements with fade-in class
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((element) => observer.observe(element));

        return () => {
            fadeElements.forEach((element) => observer.unobserve(element));
        };
    }, []);
};