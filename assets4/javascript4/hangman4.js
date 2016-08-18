	var wins = 0;
	var losses = 0;

window.onload = function(){

//Game Start//
$('#start').one('click', function(){

});
 
$('#start').click(function() {
 	playGame(); 

});
}

//FUNCTION DECLARATIONS//
function playGame(){
 	$('#gameinfo').show();
 	$('lives').show();

//Intializes//
	var song = ["truckin", "touch of grey", "sugar magnolia", "casey jones", "uncle johns band", "friend of the devil", "franklin tower", "estimated prophet", "eyes of the world", "box of rain", "us blues", "the golden road", "one more saturday night", "fire on the mountain", "the music never stopped", "hell in a bucket", "ripple"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var hiddenSong = [];
	var guessed = [];
	var wins = [];
	var losses =[];	 
	var word = song[Math.floor(Math.random()*song.length)] 
		populateHidden(word, hiddenSong);
			listArray(hiddenSong, '#hidden');
			listArray(alphabet, '#available');
			listArray(guessed, '#guessed');

//Keyup Event//
document.onkeyup = function(event){
	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
	var indexTest = word.indexOf(keyPress);
	var alphaIndex = alphabet.indexOf(keyPress);
		letterTest(keyPress, word, hiddenSong);
		alphaTest(keyPress, alphabet);
		loser(indexTest, alphaIndex, keyPress, guessed, guesses);
		listArray(guessed, '#guessed');
		listArray(alphabet, '#available');
		isOver(guessed, song);
		winner(word, hiddenSong, wins, song);
	}
}

///Populates Array//
	function populateHidden( word, arr2){
		for(var i = 0; i < word.length; i++){
		if(word[i] == "\xa0"){
				arr2.push("\xa0")
			}
		else if(word[i] == "-"){
				arr2.push("-")
			}
		else{
				arr2.push("_")
			}
		}
	}

//Print Array to DOM// JQuery//
	function listArray( arr, id ){
	var newArray = [];
		if (arr == []){
			newArray == [];
		}
		else{
			for(var i = 0; i < arr.length; i++){
				newArray.push(arr[i]+ " ");
			}
		}
		$(id).html(newArray.join("")); 		
	}
	
//Letters not Found//
	function loser(indexTest, alphaIndex, keyPress, arr, guesses){
		for(var i = 0; i < arr.length; i++){
			if(keyPress == arr[i]){
			indexTest = 0; 
		}
	}
		if (indexTest == -1 && alphaIndex > -1){
				arr.push(keyPress);
		}
	}
	
//Tests Game Letters//
	function letterTest(keyPress, word, hiddenSong){
		for(var i = 0; i < word.length; i++){
			if(keyPress == word[i]){
				hiddenSong[i] = keyPress;
	listArray(hiddenSong, '#hidden');
			}
		}
	}

//Removes Letters//
	function alphaTest(keyPress, alphabet){
		for(var i = 0; i < alphabet.length; i++){
			if(keyPress == alphabet[i]){
				alphabet[i] = "\xa0";
			}
		}
	}

//Function Win or Lose//
	function winner(comparisonString, arr, song){

	var stringSong= arr.join("");
		if( stringSong == comparisonString){
			wins++;
			$('#song').show();
			$('#wins').html("Wins: "+wins);
	playGame();
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == " " || arr[i] == "\xa0"){
						arr.splice(i, 1);
				}
			}
	var noSpacesSong = arr.join("");
	console.log(noSpacesSong);
			
		$('#songtTitle').html("Right On! U Guessed "+stringSong+" correctly! Now fire up the next GREATEST HIT!");			
		}
	}

//Function Game Over//
	function isOver(arr, song){
		if (arr.length > 10){
	var loser = new Audio(webidyougoodnight.mp3);
	alert("We Bid You Goodnight");
		loser.play();
		$('#losses').append(losses);
		$('#artist').show();
	playGame();
		}
	}
	function startagain(){

	window.location.reload(true);
}
