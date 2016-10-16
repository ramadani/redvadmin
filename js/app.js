$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('nav').on('click', 'li.panel', function(){
  if ($(this).hasClass('panel-active')) {
    $(this).removeClass('panel-active');
  } else {
    $('nav li.panel').removeClass('panel-active');
    $(this).addClass('panel-active');
  }
});
