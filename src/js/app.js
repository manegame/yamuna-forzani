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
        $(this).find('.title').hide();
      }).on('mouseleave', function(){
        $('.title').fadeIn(500);
      });

    });

}());
