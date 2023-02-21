jQuery(document).ready(function($) {
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    
    function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href')); 
      $('html, body').animate({
        scrollTop: $section.offset().top - $("#nav").height()
      }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);

    $('a').click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.scroll-to-this').offset().top - $("#nav").height()
        }, 1000);
    });
    }
  (jQuery));