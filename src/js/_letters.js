setLetters = function(els){

  var small = ["hobo", "nimbus"];
  var medium = ["hobo m", "nimbus m"];
  var large = ["hobo l", "nimbus l"];

  console.log(els);

  for(i = 0; i < els.length; i ++) {

    // Save letters, split characters
    var letters = $(els[i]).text().split("");
    $(els[i]).empty();


    if (els[i] === 'p') {
      $(letters).each(function(index){
        $(els[i]).append('<span class="'+ small[Math.floor(Math.random() * 2)] +'">'+letters[index]+'</span>');
      });
    } else if (els[i] === 'h1') {
      $(letters).each(function(index){
        $(els[i]).append('<span class="'+ large[Math.floor(Math.random() * 2)] +'">'+letters[index]+'</span>');
      });
    } else if (els[i] === 'h3') {
      $(letters).each(function(index){
        $(els[i]).append('<span class="'+ large[Math.floor(Math.random() * 2)] +'">'+letters[index]+'</span>');
      });
    }

  }

}





    // makeWords();


// function makeWords() {
//     $('.letter.space').each(function(){
//         $(this).nextUntil('.letter.space').wrapAll("<span class='word' />");
//     });
// }
