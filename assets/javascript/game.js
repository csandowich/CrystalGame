var Wins = 0;
var Losses = 0;
var totalScore = 0;


var image1 = Math.floor((Math.random() * 12 + 1));
var image2 = Math.floor((Math.random() * 12 + 1));
var image3 = Math.floor((Math.random() * 12 + 1));
var image4 = Math.floor((Math.random() * 12 + 1)); 



console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);

var randomNumber = [
19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
   50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
     70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
       90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
        100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
         110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];



$(document).ready(function(){

	console.log("ready");
var targetNumber = randomNumber [Math.floor(Math.random() * randomNumber.length)];
console.log(targetNumber);
$("#ranNum").html(targetNumber);

$(".img1").on("click", function(){

	$(".img1").data("imageValue", image1);

	totalScore += image1;
	
	$("#totalScore").html("Total Score: " + totalScore);
		if(totalScore === targetNumber){
			Wins++
			$("#wins").html("Wins: " + Wins);
		}

		if(totalScore === targetNumber) {
			alert("You Win!");
		}
		if (totalScore === targetNumber){
			
			totalScore = 0;
		}
		else if( totalScore > targetNumber){
			alert("You are a loser!");
			Losses++
			$("#losses").html("Losses: " + Losses);
			totalScore = 0;
		}

	});
	
	$(".img2").on("click", function(){

	$(".img2").data("imageValue", image2);

	totalScore += image2;
	
	$("#totalScore").html("Total Score: " + totalScore);
		
		if(totalScore === targetNumber){
			Wins++
			$("#wins").html("Wins: " + Wins);
		}

		if(totalScore === targetNumber) {
			alert("You Win!");
		}
		if (totalScore === targetNumber){
			
			totalScore = 0;
		}
		else if( totalScore > targetNumber){
			alert("You are a loser!");
			Losses++
			$("#losses").html("Losses: " + Losses);
			totalScore = 0;
		}
	});


$(".img3").on("click", function(){

	$(".img3").data("imageValue", image3);

	totalScore += image3;
	
	$("#totalScore").html("Total Score: " + totalScore);
	
	if(totalScore === targetNumber){
			Wins++
			$("#wins").html("Wins: " + Wins);
		}

		if(totalScore === targetNumber) {
			alert("You Win!");
		}
		if (totalScore === targetNumber){
			
			totalScore = 0;
		}
		else if( totalScore > targetNumber){
			alert("You are a loser!");
			Losses++
			$("#losses").html("Losses: " + Losses);
			totalScore = 0;
		}
	});


$(".img4").on("click", function(){

	$(".img4").data("imageValue", image4);

	totalScore += image4;
	
	$("#totalScore").html("Total Score: " + totalScore);
	
	if(totalScore === targetNumber){
			Wins++
			$("#wins").html("Wins: " + Wins);
		}

		if(totalScore === targetNumber) {
			alert("You Win!");
		}
		if (totalScore === targetNumber){
			
			totalScore = 0;
		}
		else if( totalScore > targetNumber){
			alert("You are a loser!");
			Losses++
			$("#losses").html("Losses: " + Losses);
			totalScore = 0;
		}
	});
		$("#button").on("click", function(){
			location.reload();
		});

		
});