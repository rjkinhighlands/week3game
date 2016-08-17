window.onload = function(){

//Variable Declarations for game:
	var song = ["truckin", "touch of greyl", "sugar magnolia", "casey jones", "uncle johns band", "friend of the devil", "franklin tower", "estimated prophet", "eyes of the world", "box of rain", "us blues", "the golden road", "one more saturday night", "fire on the mountain", "the music never stopped", "hell in a bucket", "ripple"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var hiddenSong = [];
	var guessed = [];
	var guesses = 0;  
	var word = rapper[Math.floor(Math.random()*song.length)]

//Initializes the game by populating and displaying arrays. 
	populateHidden(word, hiddenSong);
	listArray(hiddenRapper, '#hidden');
	listArray(alphabet, '#available');

//Listens for a keyup event and provides for the core functionality of the game. 
document.onkeyup = function(event){
			 	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
				for(var i = 0; i < word.length; i++){
					if(keyPress == word[i]){
						hiddenRapper[i] = keyPress+" ";
						repopArray(hiddenSong, '#hidden');
					}
					else if (keyPress != word[i]){
						guessed.push(keyPress);
						console.log(guessed);
						guesses++; 
					}
				}
				listGuesses(guessed, guesses);

				for(var i = 0; i < alphabet.length; i++){
						if(keyPress == alphabet[i]){
							alphabet[i] = "\xa0";
						}
						repopArray(alphabet, '#available');
				}
			 winner(word, hiddenSong);
			 }
}
//FUNCTION DECLARATIONS//
//Populates the hidden array based on the word chosen and it's length. *WORKING*
	function populateHidden( word, arr2){
		for(var i = 0; i < word.length; i++){
			if(word[i] == " "){
				arr2.push("\xa0")
			}
			else if(word[i] == "-"){
				arr2.push("-")
			}
			else{
				arr2.push("_ ")
			}
		}
	}

//Function to print an array to the DOM. *WORKING WITH JQUERY*
	function listArray( arr, id ){
		var newArray = [];
		for(var i = 0; i < arr.length; i++){
			newArray.push(arr[i]);
			$(id).html(newArray.join(""));
		}
	}
	
//Prints the guessed array out to the DOM. Variabele passing is set up wrong. *NOT WORKING*
	function listGuesses( arr, count ){

			$('#guessesList').html(" "+arr[count - 1]);
	}

//Function to print an array on screen *WORKING*
	function repopArray(arr, id){
		$(id).html(" ");
			for(var i = 0; i < arr.length; i++){
				$(id).html(arr[i]);
			}	
	}

//Function to test if player has won or not yet. Not yet working BECAUSE we do not have the guessed words letters broken out into an array. *NOT WORKING*
	//NEEDS TO BE DONE