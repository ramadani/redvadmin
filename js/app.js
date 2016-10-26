$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('[data-toggle="tooltip"]').tooltip();

$('li.panel').children('.sub-menu').on('click', function(e){
  e.stopPropagation();
});

$('li.card').on('click', function(){
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $('nav li.card').removeClass('active');
    $(this).addClass('active');
  }
});
