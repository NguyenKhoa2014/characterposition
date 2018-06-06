function countLetters(input){
  var characterCount = {};
  var characterPosition = {}
  for(var i = 0; i < input.length; i++){
    var character = input.charAt(i);

    if (!characterPosition[character]) {
      characterPosition[character] = i;
    } else {
      characterPosition[character] += ',' + i;
    }
 

   // console.log(character);
  }
  //console.log(characterCount);
  console.log(characterPosition)
}

countLetters('lighthouse in the house');