$(document).ready(function () {
  var gallery = $('.gallery a').simpleLightbox({
    overlay: true,
  });

  $('#gioi-thieu').attr('data-animate', 'fadeInLeft');
  $('#tong-quan').attr('data-animate', 'bounceIn');
  $('#vi-tri').attr('data-animate', 'bounceInRight');
  $('#tien-ich').attr('data-animate', 'bounceInLeft');
  $('#mat-bang').attr('data-animate', 'bounceIn');
  $('#chinh-sach-ban-hang-va-tien-do-thanh-toan').attr('data-animate', 'bounceInDown');
  $('#lien-he').attr('data-animate', 'bounceIn');

  $('.gallery a').attr('data-animate', 'bounceInRight');
  // $('.tien-ich-img').attr('data-animate', 'bounceIn');

  function isVisible($el) {
    var top_of_element = $el.offset().top;
    var bottom_of_element = $el.offset().top + $el.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
      return true;
    } else {
      return false;
    }
  }

  function scrollAction() {
    $('.has-effect [data-animate]').each(function () {
      if (isVisible($(this))) {
        $(this).attr('data-animated', 'true');
      }
    });

    var buttonScrollTop = jQuery('.upToScroll');
    var scrollPositions = jQuery(window).scrollTop();
    var topMenuHeight   = jQuery('header').height();

    if (scrollPositions > topMenuHeight) {
      buttonScrollTop.addClass('buttonShow');
    } else {
      buttonScrollTop.removeClass('buttonShow');
    }
    
  }

  $(window).scroll(scrollAction);
  scrollAction();

  // $(".has-effect [data-animate]").attr('data-animated', 'true');

  $('.upToScroll .scrollToTop').click(function(e) {
		"use strict";
		jQuery('html, body').animate({
			scrollTop: 0
		}, 'fast');
		e.preventDefault();
		return false;
	});
});
