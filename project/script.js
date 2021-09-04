$(window).on("load",function(){
  $(".loaderContainer").fadeOut(500,function(){
    $(this).remove();
  });
})


new WOW().init();
$('.venobox').venobox(); 

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".addCartButton").mouseover(function(){
  $(this).find("i").css("display","flex");
})


$(".pageNumber").click(function(){
  $(".active").removeClass("active");
  $(this).addClass("active");
})


let windowHeight = $(window).height();
$(".closeIcon").css("display","none");


$(window).scroll(function(){
  currentPosition = $(this).scrollTop();
  if(currentPosition >= windowHeight-200){
   $('#siteNav').addClass("siteNav");
   $('.brandLogo').addClass("brandLogoControl");
  }else{
    $('#siteNav').removeClass("siteNav");
    $('.brandLogo').removeClass("brandLogoControl");
  }
})

$(".navMenu").click(function(){
  $(this).toggleClass("show");
  let result = $(this).hasClass("show");
  if(result == true){
    $(".menuIcon").css("display","none");
    $(".closeIcon").css("display","block");
  }else{
    $(".menuIcon").css("display","block");
    $(".closeIcon").css("display","none");
  }
})

function setActive(current){

  $(".customActive").removeClass("customActive");
  $(`.nav-link[href='#${current}']`).addClass("customActive");
  $('.activeParent').removeClass("activeParent");
  $('.customActive').parent().addClass("activeParent");

}

function navScroll(){
  let currentSection = $("section[id]");

  currentSection.waypoint(function(direction){

    if(direction == "down" ){
      let currentSection = $(this.element).attr('id');
      setActive(currentSection);
    }

  }, {
    offset: "75%"
  })
  currentSection.waypoint(function(direction){

    if(direction == "up" ){
      let currentSection = $(this.element).attr('id');
      setActive(currentSection);
    }

  },{
    offset: "-25%"
  })
}
navScroll();

$(".navMenuItems").click(function(){
  $(".show").removeClass("show");
  $(".closeIcon").hide();
  $(".menuIcon").show();
})