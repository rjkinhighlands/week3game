window.onload = function(){

//Variable Declarations//
	var songs = ["truckin", "touch of greyl", "sugar magnolia", "casey jones", "uncle johns band", "friend of the devil", "franklin tower", "estimated prophet", "eyes of the world", "box of rain", "us blues", "the golden road", "one more saturday night", "fire on the mountain", "the music never stopped", "hell in a bucket", "ripple"];
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var hiddensong = [];
	var guessed = [];
	var guesses = 0;  
	var word = songs [Math.floor(Math.random()*songs.length)]

//Arrays// 
		populateHidden(word, hiddensong);
		listArray(hiddensong, '#hidden');
		listArray(alphabet, '#available');

//KEYUP and FUNCTIONALITY?// 
document.onkeyup = function(event){
			 	var keyPress = String.fromCharCode(event.keyCode).toLowerCase();
				for(var i = 0; i < word.length; i++){
					if(keyPress == word[i]){
						hiddensong[i] = keyPress+" ";
						repopArray(hiddensong, '#hidden');
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
			 }
			winner(word, hiddensong);
			}
		
}

//FUNCTION DECLARATIONS//

//Populates the hidden array// 
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

//Function to print DOM//
	function listArray( arr, id ){
		var newArray = [];
		for(var i = 0; i < arr.length; i++){
			newArray.push(arr[i]);
			$(id).html(newArray.join(""));
		}
	}
	
//Prints the guessed array DOM//
	function listGuesses( arr, count ){
			$('#guessesList').html(" "+arr[count - 1]);
	}

//Function to print an array//
	function repopArray(arr, id){
		$(id).html(" ");
			for(var i = 0; i < arr.length; i++){
				$(id).html(arr[i]);
			}	
	}

