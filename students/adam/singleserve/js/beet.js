//in order for any jQuery to work you need to add the code to call the jQuery library and add the tag to call your js file. Reference the bottom two tags before the close of the body on the Day 6 notes file.

$(document).ready(function() {
	beetclick();

    // run function on initial page load
    // call your function by writing yourFunctionName(); below
});

//change your function name to something that makes sense. Use that name to call it above.

function beetclick() {
	 var obj = document.createElement("audio");
  obj.src = "sound/drum.wav";
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $(".playSound").click(function() {
    obj.play();
    // obj.pause();
  });

}