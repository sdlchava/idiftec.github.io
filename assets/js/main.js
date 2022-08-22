// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// HERO__CONTENT
sr.reveal('.hero__content',{})
sr.reveal('.hero__logo',{delay: 200})
sr.reveal('.hero__button',{delay: 300})

// ACADEMY__STUDENT
sr.reveal('.student__icon',{interval: 200});


