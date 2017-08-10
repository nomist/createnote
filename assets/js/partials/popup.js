$(document).ready(function() {
  $('.show_popup').click(function() {
    $('#popup, #overlay').fadeIn(300);
    $("html,body").css("overflow","hidden");
  });
  $('#close_popup, #overlay', 'body').click(function(e) {
    if($(e.target).closest(".popup").length==0) {
      $('#popup, #overlay').fadeOut(300);
      $("html,body").css("overflow","auto");
    }
  });
});
