
$(document).ready(function(){

	$(".boardHolder").mouseenter(function(){
		
		$(document).bind("contextmenu",function(e){
			return false;
		});
	});
	
	$(".boardHolder").mouseenter(function(){
		
		var cells = $(".innerCell");

		var i;
		for (i = 0; i < cells.length; ++i) {
			$(cells[i]).prop("class", "cellOff");
		}
		
		var randNum = Math.floor(Math.random() * 300) + 250  
		
		var randomCells = getRandomArrayElements(cells, randNum);
		
		var j;
		for (j = 0; j < randomCells.length; ++j) {
			$(randomCells[j]).prop("class", "cellOn");
		}
		
		$(".debug").text("Total cells: " + cells.length + " Randomly Set On: " + randNum);
		
		//$('.innerCell').prop("class", "cellOff");
	});
	
	$(".boardHolder").mouseleave(function(){
		
		var cells2 = $(".cellOff, .cellOn");

		var k;
		for (k = 0; k < cells2.length; ++k) {
			$(cells2[k]).prop("class", "cellOff");
		}
		
		var randNum2 = Math.floor(Math.random() * 300) + 250  
		
		var randomCells2 = getRandomArrayElements(cells2, randNum2);
		
		var l;
		for (l = 0; l < randomCells2.length; ++l) {
			$(randomCells2[l]).prop("class", "cellOn");
		}
		
		$(".debug").text("Total cells2: " + cells2.length + " Randomly2 Set On: " + randNum2);
		
		//$('.innerCell').prop("class", "cellOff");
	});
	
	
	
	$(".innerCell").mouseenter(function(){
		
		var thisClass = $(this).prop("class");
		
		if (thisClass == "cellOff")
		{
			$(this).prop("class", "cellOn");
		}
		else if (thisClass == "cellOn")
		{
			$(this).prop("class", "cellOff");
		}
		
	});
	
	//$(".button").click(Shuffle());
	
	$(".innerCell").click(function(){
		return false;			// to do: disable left click? The game can be cheated with quick click + drag
	});
	
});

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}