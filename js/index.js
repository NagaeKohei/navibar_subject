$(function(){
  var navPos = $("nav").offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > navPos){
      $("nav").css("position", "fixed");
      $("nav").css("background-color", "#dd6236");
    }else {
      $("nav").css("position", "static")
      $("nav").css("background-color", "#926b6a");

    }
  });
});

$(function(){
  $(".ac-menu .label").on("click", function() {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});