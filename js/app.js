$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('li.panel').children('.sub-menu').on('click', function(e){
  e.stopPropagation();
});

$('li.panel').on('click', function(){
  if ($(this).hasClass('panel-active')) {
    $(this).removeClass('panel-active');
  } else {
    $('nav li.panel').removeClass('panel-active');
    $(this).addClass('panel-active');
  }
});
