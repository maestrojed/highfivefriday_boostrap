(function ($, Drupal, once) {
  console.log('flexslider debug0');
  Drupal.behaviors.flexslider = {
    attach: function attach(context) {
      console.log('flexslider debug1');
      // Can also be used with $(document).ready()
      $(document).ready(function () {
        console.log('flexslider debug2');
        $('.flexslider').flexslider({
          animation: "fade",
          slideshowSpeed: 4242,
          randomize: true,
          controlNav: false,
          directionNav: false,
        });
      });
    }
  };
})(jQuery, Drupal, once);
