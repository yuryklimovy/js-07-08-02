$(function(){
  var input = $('input');

  input.mouseenter(function(){
    $(this).parent().find('.title').animate(
      {
        opacity : '1',
        height: '22px',
        width: '250px',
    },
     500);
  });

  input.mouseleave(function(){
    $(this).parent().find('.title').animate(
      {
        opacity : '0',
        height: '0',
        width: '0',
    },
     500);
  });
})
