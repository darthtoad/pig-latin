function pigLatin(input) {
  var array = input.split(" ");
//  console.log(array);
  var re = /\b[A-Z]/gi;
  var anyNonLetter = /[^A-Z]/gi;
  var reVowel = /\b[aeiou]/gi;
  var reQu = /\b(qu)/gi;
  var newArray = [];
  var nonLetter = [];
  array.forEach(function(value){
    //debugger;
    console.log(value.replace(anyNonLetter, ''));
    if (value.length === 1 && value.search(anyNonLetter) !== -1) {
      newArray.push(value);
    } else {
      value = value.replace(anyNonLetter, '');
      if (value.search(reVowel) !== -1) {
        value = value + "way";
        newArray.push(value);
      } else if (value.search(reVowel) === -1) {
        if (value.search(reQu) !== -1) {
          value = value.substr(2) + "quay";
          newArray.push(value);
        } else if (value.substr(1).search(reVowel) === -1) {
          var consonants = [];
          for (var i = 0; i <= value.length; i++) {
            console.log(value[i].search(reVowel));
            if (value[i].search(reVowel) === -1) {
              consonants.push(value[i]);//all values from 0 to i
              //console.log(consonants)
            } else {
              var endConsonants = consonants.join("");
              //console.log(endConsonants);
              value = value.substr(i) + endConsonants + "ay";
              i = value.length + 1;
              newArray.push(value);
            }
          }
        //  newArray.push();
        } else {
          var first = value[0];
          value = value.substr(1) + first + "ay";
          newArray.push(value);
        }
      } else {
        newArray.push(value);
      }
    } //else if (value.search(anyNonLetter) !== -1) {
    //}
      /*
      var valueArray = value.split("");
      valueArray.forEach(function(valueInArray) {
        if (value.search(anyNonLetter) !== -1) {
          valueArray.splice(valueInArray);
        }
        value = valueArray.join("");
      }
    )
  }*/ // console.log(value);
  })
  console.log(nonLetter);
  var final = newArray.join(" ") + nonLetter.join("");
  return final;
}

$(document).ready(function(){
  $(".pigTrans").submit(function(event){
    event.preventDefault();
    var input = $("#engEntry").val();
    $("#result").empty();
    var result = pigLatin(input);
    $("#result").append(result);
  })
})
