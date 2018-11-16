$(function() {
// Выпадающее меню
	$(".header-menu").click(function(){
	setTimeout(function(){
    $('.menu-overlay').css('transform', 'translateY(0)');
  },370);
}); 
$(".menu-close").click(function(){
  $('.menu-overlay').css('transform', 'translateY(-100%');
  setTimeout(function(){
    $('.elFullWidthMenu').css('top', '');
    $('.elFullWidthMenu').removeClass('elFullWidthMenu-open');
    $('.elFullWidthMenu__close').show();
  },600);
});

$('a[rel=external]').attr('target','_blank');
// Маска ввода номера телефона (плагин maskedinput)
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
/* TABS "BUYERS PAGE" */
$('ul.js-tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.js-tabs').find('div.js-tabs__content').fadeOut(300).removeClass('active').eq($(this).index()).delay(200).fadeIn(300).addClass('active');
  });

/* Высота карты "CONTACTS" */

/* SWIPER SLIDER "INFRASTRUCTURE PAGE" */
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

});
