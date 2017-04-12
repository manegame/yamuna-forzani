(function () {

    "use strict";

    window.$      = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require('./_shop.js');
    require('./_insta.js');
    require('./_letters.js');

    $(function () {

      $('body').on('mousemove', instaShow);

      var els = ['p', 'h1', 'h2', 'h3'];

      $(document).on('ready', setLetters(els));

      $('.thumb').on('mouseover', function(){
        $(this).find('.title').fadeIn(500);
      }).on('mouseleave', function(){
        $('.title').hide();
      });

    });


}());
