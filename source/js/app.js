$(document).ready(function() {

  /**
   *  Function    :   jQuery Function
   *  Arguments   :   index       =>  index for all calsses with name of 'skill-functions'
   *  Variables   :   fillAmount  =>  fetch the fill up value from the attribut in the HTML document.
   *  Description :   fetch the fill up amaount, apply css rule to the skill-fill class
   */
  $('.skill-fill').each(function(index) {
    var fillAmount = $(this).attr("data-fill");
    $(this).css("width", fillAmount + "%");
  });

  /**
   *  Function    :   jQuery Function
   *  Arguments   :   index       =>  index for all calsses with name of '--js-testimonial-img'
   *  Variables   :   event       =>  add attribute to the class element
   *  Description :   fetch the class elements and add a onClick attribut for getTestimonials() function.
   */
  $('.--js-testimonial-img').each(function(index) {
    var event = $(this).attr('onClick', 'getTestimonials(' + (index + 1) + ')');
  });

  /**
   *  Function    :   jQuery Function
   *  Arguments   :   none
   *  Variables   :   $this       =>  refers to the class elements
   *  Description :   toggle activate class on testimonial images
   */
  $('.--js-testimonial-img').click(function() {
    $('.--js-testimonial-img').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $(this).addClass('active');
    }
  });

  /**
   *  Click the first image when page loads
   */
  $('.--js-testimonial-img').first().click();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("nav").addClass("sticky");
        $("#toggle").addClass("sticky-toggle");

    } else {
        $("nav").removeClass("sticky");
        $("#toggle").removeClass("sticky-toggle");
    }
  });

  $('.js--mobile-navlinks').click(function () {
    $('#resize').removeClass('active');
    $('#toggle').removeClass('on');
    $('html').toggleClass("--js-html-overflow");
  });

  $("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
    $('html').toggleClass("--js-html-overflow");
  });

});

/**
 *  Function    :   onLoadFunctions
 *  Arguments   :   none
 *  Variables   :   none
 *  Description :   List of function to be load when page is loaded
 */
function onLoadFunctions () {
  /**
   *  JSON Functions
   */
  getProjectData();
  getUpcomingProjectData();
}

/**
 *  Start Animation On Scroll Function for desktop.
 */
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
if (width < 775 || height < 600){
  AOS.init({disable: true, offset: 150});
}
else {
  AOS.init();
}
/**
 *  Runs onLoadFunctions while page loads
 */
window.onload = onLoadFunctions;
