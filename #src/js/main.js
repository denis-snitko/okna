jQuery(function ($) {
    $(".tab__content").hide();
    $(".tab__content:first").show();

    $("ul.tabs__nav li").click(function () {
        let activeTab = $(this).attr("data-tab");

        $(".tab__content").hide();
        $("#" + activeTab).fadeIn();

        $("ul.tabs__nav li").removeClass("tabs__nav--active");
        $(this).addClass("tabs__nav--active");

        $(".tab-accordeon").removeClass("tab-accordeon--active");
        $(".tab-accordeon[data-tab^='" + activeTab + "']").addClass("tab-accordeon--active");
    });

    $(".main-filter__item-title").click(function () {
        $(this).next().fadeToggle(150);
    })
});


document.addEventListener('DOMContentLoaded', () => {
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


    let accordeonTitle = document.querySelectorAll('.accordeon__title');

    accordeonTitle.forEach((section) => {
        section.addEventListener('click', (event) => {
            accordeonTitle.forEach((section) => {
                section.nextElementSibling.classList.add('hidden');
                section.classList.remove('active-bg');
                section.classList.remove('accordeon__title--active');

            })
            event.target.nextElementSibling.classList.toggle('hidden');
            event.target.classList.toggle('active-bg');
            event.target.classList.toggle('accordeon__title--active');
        })
    })
});


