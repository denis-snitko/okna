
let sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
    new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        navigation: {
            prevEl: el.querySelector('.swiper-button-prev'),
            nextEl: el.querySelector('.swiper-button-next')
        },
        
        breakpoints: {
            548: {
                slidesPerView: 6,
                spaceBetween: 5,
                centeredSlides: false,
            },
        }
    });

})
