window.onload = function(){

//Variable Declarations for game:
	var songs = ["truckin", "touch of greyl", "sugar magnolia", "casey jones", "uncle johns band", "friend of the devil", "franklin tower", "estimated prophet", "eyes of the world", "box of rain", "us blues", "the golden road", "one more saturday night", "fire on the mountain", "the music never stopped", "hell in a bucket", "ripple"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var hiddensong = [];
	var guessed = [];
	var guesses = 0;  
	var word = songs [Math.floor(Math.random()*songs.length)]

//Initializes the game by populating and displaying arrays. 
		populateHidden(word, hiddensong);
		listArray(hiddensong, 'hidden');
		listArray(alphabet, 'available');

//Listens for a keyup event and provides for the core functionality of the game. 
document.onkeyup = function(event){
			 	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
			 	guessed.push(keyPress);
				guesses++; 
				listGuesses(guessed, guesses);

				for(var i = 0; i < word.length; i++){
					if(keyPress == word[i]){
						hiddensong[i] = keyPress+" ";
						repopArray(hiddensong, 'hidden');
					}
				}

				for(var i = 0; i < alphabet.length; i++){
						if(keyPress == alphabet[i]){
							alphabet[i] = "\xa0";
						}
						repopArray(alphabet, 'available');
				}
			 }
		
}

//FUNCTION DECLARATIONS -------------------------------------------------------------------

//Populates the hidden array based on the word chosen and it's length. 
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

//Function to print initialize an array to the DOM.
	function listArray( arr, id ){
		for(var i = 0; i < arr.length; i++){
			var printThis = document.getElementById(id)
			printThis.innerHTML += arr[i];
		}
	}
	
//Prints the guessed array out to the DOM. *WORKING*
	function listGuesses( arr, count ){
		var printThis = document.getElementById('guessesList');
			printThis.innerHTML += " "+arr[count - 1];
	}

//Function to print an array on screen *WORKING*
	function repopArray(arr, id){
		document.getElementById(id).innerHTML = " ";
			for(var i = 0; i < arr.length; i++){
				document.getElementById(id).innerHTML += arr[i];
			}	
	}

