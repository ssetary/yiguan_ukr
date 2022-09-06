(function(){
    const slides = [
        '<div class="slide"><img src="img/gallery/gallery_1.jpg" alt="Gallery 1"></div>',
        '<div class="slide"><img src="img/gallery/gallery_2.jpg" alt="Gallery 2"></div>',
        '<div class="slide"><img src="img/gallery/gallery_3.jpg" alt="Gallery 3"></div>',
        '<div class="slide"><img src="img/gallery/gallery_4.jpg" alt="Gallery 4"></div>',
        '<div class="slide"><img src="img/gallery/gallery_5.jpg" alt="Gallery 5"></div>',
        '<div class="slide"><img src="img/gallery/gallery_6.jpg" alt="Gallery 6"></div>',
        '<div class="slide"><img src="img/gallery/gallery_7.jpg" alt="Gallery 7"></div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.our-gallery-carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide]; 

            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    // setInterval(nextSlide, 5000);
    
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel()
    }

    renderCarousel();

    const buttonForward = document.querySelector('.our-gallery-carousel .forward');
    buttonForward.addEventListener('click', nextSlide);

    const buttonBackward = document.querySelector('.our-gallery-carousel .backward');
    buttonBackward.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

})();