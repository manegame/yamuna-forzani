(function(){

  $(function(){
    $('.alternative').on('click', function(){
      var swapImg = $(this).find('img');
      var withImg = $(this).siblings('.original');
      var swapSrc = swapImg.attr('src');
      var withSrc = withImg.attr('src');

      swapImg.attr('src', withSrc);
      withImg.attr('src', swapSrc);
    });

    // $(document).on('click', function () {
    //   $('.sock-vid').toggleClass('small');
    // });
  });

}());
