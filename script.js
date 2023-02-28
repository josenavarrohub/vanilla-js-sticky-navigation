'use strict';

/* Sticky Navigation Component */

// Elements
const nav = document.querySelector('nav');
const targetElement = document.getElementById('section1');

// Callback
const observerCallback = (entries) => {
    // Objects that represent the intersection changes that occurred.
    const entry = entries.at(0);

    // Debug
    console.clear();
    console.log('Intersection ratio:', entry.intersectionRatio.toFixed(2));
    console.log('Is intersecting?', entry.isIntersecting);
    
    // When the target element is not intersecting, we add a sticky class.
    (!entry.isIntersecting)
        ? nav.classList.add('c-nav--sticky')
        : nav.classList.remove('c-nav--sticky')
};

// Options
const observerOptions = {
    // Parent element that the target element is intersecting (null = viewport).
    root: null,

    // Margin around the root (= navigation height).
    rootMargin: `-${nav.getBoundingClientRect().height}px`,

    /**
     * Number or array to indicate at what percentage of the visibility of
     * the target element the callback will be executed.
     * 
     * 0 = The target element is 0% visible.
     * 0.5 = The target element is 50% visible.
     * 1 = The target element is 100% visible
     */
    threshold: 0,
};

// Intersection observer object
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Target element to be watched
observer.observe(targetElement);
