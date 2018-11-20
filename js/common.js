$(function() {
// Выпадающее меню
	$(".header-menu").click(function(){
	setTimeout(function(){
    $('.menu-overlay').css('transform', 'translateY(0)');
  },370);
}); 
$(".menu-close").click(function(){
  setTimeout(function(){
    $('.menu-overlay').css('transform', 'translateY(-110%');
  },100);
});

// Маска ввода номера телефона (плагин maskedinput)
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
/* TABS "BUYERS PAGE" */
$('ul.js-tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.js-tabs').find('div.js-tabs__content').fadeOut(300).removeClass('active').eq($(this).index()).delay(200).fadeIn(300).addClass('active');
  });

/* POPUP "INFRASTRUCTURE PAGE" */
$('.show-popup').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
/* POPUP "COMMENT PAGE" */
$('.show-popup-comment').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

/* OWL.CAROUSEL SLIDER "INFRASTRUCTURE PAGE" */
  $(".infrastructure-popup").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoHeight: true,
  });
/* OWL.CAROUSEL SLIDER "CREDIT PAGE" */
  $(".credit-slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,

  });
/* OWL.CAROUSEL SLIDER "BUYER PAGE" */
  $('.s-buyers-content').owlCarousel({
        items:1,
        loop:false,
        center:true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

});
