$(function() {
  var input = $('.input');
  var button = $('.button');

  input.mouseenter(function() {
    $(this).parent().find('.title').addClass('animate');
  });

  input.mouseleave(function() {
    $(this).parent().find('.title').removeClass('animate');
  });

  button.click(function() {
    var title = $('.title');
    $(title).toggleClass('animate');
  });
});
