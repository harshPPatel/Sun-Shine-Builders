$(document).ready(function() {

  //  Function    : jQuery Function
  //  Arguments   : index (index for all calsses with name of 'skill-functions')
  //  Variables   : fillAmount   => fetch the fill up value from the attribut in the HTML document.
  //  Description : fetch the fill up amaount, apply css rule to the skill-fill class

  $('.skill-fill').each(function(index) {
    var fillAmount = $(this).attr("data-fill");
    $(this).css("width", fillAmount + "%");
  });

  $('.--js-testimonial-img').each(function(index) {
    var event = $(this).attr('onClick', 'getTestimonials(' + (index + 1) + ')');
  });

  $('.--js-testimonial-img').click(function() {
    $('.--js-testimonial-img').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $(this).addClass('active');
    }
  });

  $('.--js-testimonial-img').first().click();

});

//  Function    : onLoadFunctions
//  Arguments   : none
//  Variables  :  none
//  Description : List of function to be load when page is loaded
function onLoadFunctions () {
  //JSON Functions
  getProjectData();
  getUpcomingProjectData();
}
// Running onLoadFunctions while page loads

window.onload = onLoadFunctions;
