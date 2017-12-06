function pigLatin(input) {
  var array = input.split(" ");
  console.log(array);
  var re = /\b[A-Z]/gi;
  var reVowel = /\b[aeiou]/gi;
  var reFirstLetter
  var newArray = [];
  array.forEach(function(value){
    if (value.search(re) !== -1 && value.search(reVowel) !== -1) {
      value = value + "way";
      newArray.push(value);
    } else if (value.search(re) !== -1 && value.search(reVowel) === -1) {
      var first = value[0];
      value = value + first + "ay";
      value.replace(/\b[.]/, "");
      newArray.push(value);
    } else {
      newArray.push(value);
    } console.log(value);
  })
  var final = newArray.join(" ");
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
