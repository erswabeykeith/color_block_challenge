//DOM:
$(document).ready(function() {
  $('.square').on("click",function() {
    console.log(randomColor)
    if($(this).attr('id') == randomColor) {
      $('#responseAnswer').text("That's correct!");
      repeatColorGenerator()
    }
    else{
      $('#responseAnswer').text("Try again!");
    }
  })
  // var pickedColor
  var colors = ["cyan", "purple", "orange", "pink", "yellow"];
  var randomNumberCreated = randomNumber(0,4);
  var randomColor = colors[randomNumberCreated];
  $('#randomNumber').text("Find the " + randomColor + " square!");
  //Given Function:
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
  function repeatColorGenerator() {
    randomNumberCreated = randomNumber(0,4);
    randomColor = colors[randomNumberCreated];
    $('#randomNumber').text("Find the " + randomColor + " square!");

  }

});
