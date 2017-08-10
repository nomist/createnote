$(document).ready(function() {
  var $line = $('.steps__progress-line'),
      $window = $(window),
      $circles = $('.steps__circle'),
      circleActive = 'steps__circle--active',
      circlePassed = 'steps__circle--passed',
      circleWidth = $circles.eq(0).width();

  $(window).on('scroll resize', function(){

    // line draw
    var destination = $line.offset().top,
        departure = $(document).scrollTop(),
        windowHeight = $window.height(),
        windowWidth = $window.width(),
        animation = destination - windowHeight;

    if (animation <= departure && destination >= departure) {
      length = ((departure - animation)/windowHeight)*100;
    }

    $line.css('width', length + '%');

    // active circle
    $circles.each(function(i, item) {
      var left = $(item).offset().left;
      if ( left <= $line.width() ) {
        $(item).addClass(circlePassed);
        if ( $line.width() <= left + circleWidth ) {
          $(item).addClass(circleActive);
        } else {
          $(item).removeClass(circleActive);
        }
      } else {
        $(item).removeClass(circlePassed + ' ' + circleActive);
      }
    });
  });
});
