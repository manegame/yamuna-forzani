(function () {

    "use strict";

    window.$      = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require('./_shop.js');
    require('./_insta.js');

    $(function () {

      $('body').on('mousemove', instaShow);

      $('.thumb').on('mouseover', function(){
        $(this).find('.title').fadeIn(500);
      }).on('mouseleave', function(){
        $('.title').hide();
      });

      // $(window).on('scroll', function() {
      //   if ( $(window).scrollTop() > $('main').scrollHeight ) {
      //       $(window).scrollTop(1);
      //   } else if ( $(window).scrollTop() == 0 ) {
      //       $(window).scrollTop($('main').scrollHeight);
      //   }
      // });

    });


}());
