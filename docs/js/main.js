jQuery(function ($) {
  $('.burger-menu-icon').click(function () {
    $('.main-menu').fadeToggle(150);
  })

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

  $(".main-filter__arrow").click(function () {
    // $('.main-filter__links').show();
    $(this).next().fadeToggle(150);
  })

  $('.menu-dots').click(function () {
    $(this).children('.menu-dots__list').fadeToggle(150);
  })

  $('.filter-icon').click(function () {
    $('.content-body__col-3').fadeToggle(150);
    $('body').attr('style', 'overflow: hidden');
  })

  $('.filter-btn').click(function () {
    $('.content-body__col-3').fadeToggle(150);
    $('body').attr('style', 'overflow: hidden');
  })

  $('.close-btn').click(function () {
    $('.content-body__col-3').attr('style', '');
    $('body').attr('style', 'overflow: auto');
  })

  $('.eye').click(function () {
    $(this).siblings('.main-item__body-tel').attr('style', 'cursor: pointer');
    $(this).siblings('.main-item__body-tel').children('.tel-number').show();
    $(this).siblings('.no-answer').show();
    $(this).siblings('.tel-dots').hide();
    $(this).hide();
  })

  $('.up-btn').click(function () {
    $('html').animate({ scrollTop: 0 }, 600);
  })

  //show more links
  let $bodyLinks = $('.main-item__body-links');
  let $showMore = $('.main-item__show-more');

  $($bodyLinks).each(function () {
    if ($(this).height() >= 56) {
      $(this).attr('style', 'height: 56px');
      $(this).next($showMore).show();
    }

    $(this).next($showMore).click(function () {
      $(this).prev($bodyLinks).attr('style', 'height: 100%; max-height: 100%');
      $(this).hide();
    })
  })


  // magnificPopup
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 300,
  });

  //   $.magnificPopup.open({
  //     items: {
  //       src: $('#popup-get-price-2')
  //     }
  //   });



  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 2500,
    values: [600, 2000],
    step: 1,
    slide: function (event, ui) {
      $("#amount-minus-1").val(ui.values[0]);
      $("#amount-plus-1").val(ui.values[1]);
    }
  });
  $("#amount-minus-1").val($("#slider-range").slider("values", 0));
  $("#amount-plus-1").val($("#slider-range").slider("values", 1));

  $("#slider-range-1").slider({
    range: true,
    min: 0,
    max: 2500,
    values: [600, 2000],
    step: 1,
    slide: function (event, ui) {
      $("#amount-minus-2").val(ui.values[0]);
      $("#amount-plus-2").val(ui.values[1]);
    }
  });
  $("#amount-minus-2").val($("#slider-range-1").slider("values", 0));
  $("#amount-plus-2").val($("#slider-range-1").slider("values", 1));

});


document.addEventListener('DOMContentLoaded', () => {
  let sliders = document.querySelectorAll('.swiper-container');

  sliders.forEach((el) => {
    new Swiper(el, {
      slidesPerView: 3,
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      navigation: {
        prevEl: el.querySelector('.swiper-button-prev'),
        nextEl: el.querySelector('.swiper-button-next')
      },

      breakpoints: {
        540: {
          slidesPerView: 6,
          spaceBetween: 5,
          centeredSlides: false
        },
      }
    });
  })

  const windowSwiper = new Swiper('.finished-windows-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });



  let accordeonTitle = document.querySelectorAll('.accordeon__title');

  accordeonTitle.forEach((section) => {
    section.addEventListener('click', (event) => {
      // accordeonTitle.forEach((section) => {
      //     section.nextElementSibling.classList.add('hidden');
      //     section.classList.remove('active-bg');
      //     section.classList.remove('accordeon__title--active');

      // })
      event.target.nextElementSibling.classList.toggle('hidden');
      event.target.classList.toggle('active-bg');
      event.target.classList.toggle('accordeon__title--active');
    })
  })
});


