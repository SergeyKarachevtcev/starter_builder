'use strict';
const slider = () => {
    const swiper = new Swiper('.swiper', {
        /* slides */
        slidesPerView: 1,
        spaceBetween: 42,
        // Optional parameters
        loop: true,
        freeMode: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '#sliberNext',
            prevEl: '#sliderPrew',
        },
    });
};
export default slider;
