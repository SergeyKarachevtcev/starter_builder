const swiper = new Swiper('.swiper', {
    /* slides */
    slidesPerView: 4,
    spaceBetween: 42,
    // Optional parameters
    /*     direction: 'horizontal', */
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '#sliberNext',
        prevEl: '#sliderPrew',
    },
});

export default swiper;