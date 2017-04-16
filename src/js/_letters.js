function returnLetters (el, letters, size) {
  console.log(el, letters, size);
  for( var i = 0; i < letters.length; i ++ ) {
    el.append('<span class="'+ size[Math.floor(Math.random() * 2)] +'">'+letters[i]+'</span>');
  }
}

function splitLetters (el) {

  var small = ["hobo", "nimbus"];
  var medium = ["hobo m", "nimbus m"];
  var large = ["hobo l", "nimbus l"];

  // Save letters, split characters
  var letters = el.text().split("");
  // to be able to check
  var elName = el[0].localName;

  el.empty();

  if (elName === 'h3') { returnLetters(el, letters, medium) }
  if (elName === 'h1') { returnLetters(el, letters, large) }

}

setLetters = function(els){

  $(els).each(function(index) {

    $(els[index]).each( function () {
      if($(this).hasClass('exception')) {
        return;
      } else {
        splitLetters( $(this) );
      }

    });

  });

}





    // makeWords();


// function makeWords() {
//     $('.letter.space').each(function(){
//         $(this).nextUntil('.letter.space').wrapAll("<span class='word' />");
//     });
// }
