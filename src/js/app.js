(function () {

    "use strict";

    window.$      = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("jquery-ui-touch-punch");

    require('./_shop.js');
    require('./_insta.js');
    require('./_letters.js');

    $(function () {

      var els = ['h1', 'h3', 'h5'];
      $(document).on('ready', setLetters(els));

      $('.navbar > li').on('hover', function () {
        $('.glow').toggleClass('small');
      });

      $('#enter').draggable();
      $('#enter').on('dragstart', function(event, ui) {
        $(this).removeClass('initial');
      });
      $('#enter').on('dragstop', function(event, ui) {
        $('.glow').addClass('small');
      });
      $('#enter').on('mousedown', function () {
        $(this).addClass('pink');
      });
      $('#enter').on('mouseup', function () {
        $(this).removeClass('pink');
      });
      $('#click').on('click', function () {
        $('.glow').hideClass('small');
      });

      $('img.two').on('click', function(){
        var swapImg = $(this);
        var withImg = $(this).siblings('.one');
        var swapSrc = swapImg.attr('src');
        var withSrc = withImg.attr('src');

        swapImg.attr('src', withSrc).toggleClass('active');
        withImg.attr('src', swapSrc).toggleClass('active');
      });

      $('body').on('mousemove', instaShow);

      $('.thumb').on('mouseover', function(){
        $(this).find('.title').show();
      }).on('mouseleave', function(){
        $('.title').hide();
      });

    });


}());
