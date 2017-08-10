$(document).ready(function() {
  var linksList = [];

  $('.menu__item').each(function(i, item) {
    var elemId = $(item).attr('href');
    linksList.push($(elemId).offset().top);
  });

  linksList.push($(document).height());

  $('.menu__item').click(function(e) {
    e.preventDefault();
    var href = $(this).attr("href"),
        destination = $(href).offset().top,
        departure = $(document).scrollTop(),
        duration = Math.abs(destination - departure) * .3;
    $("html, body").stop().animate({scrollTop: destination}, duration, 'linear');
  });

  var setActiveLink = function() {
    var cur = $(document).scrollTop();
    $.each(linksList, function(i, item) {
      var order = (i || 1) - 1;
      if (cur < item) {
        $('.menu__item').removeClass('menu__item--active');
        $($('.menu__item')[order]).addClass('menu__item--active');
        return false;
      }
    });
    return this;
  };
  setActiveLink();

  $(window).scroll(setActiveLink);

  var $window = $(window),
      $header = $('.header'),
      alpha = 0;

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if ( top < $(window).height()) {
      alpha = top / $(window).height();
    } else {
      alpha = 1;
    }
    $header.css('background-color','rgba(0,0,0,'+alpha+')');
  });
});
