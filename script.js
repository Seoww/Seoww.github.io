var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,()'.split('');
var rangeLength = alphabet.length -1;
$('#encryption-submit').click(function(e){
	e.preventDefault(); //prevent submit button default
	$("#encryption .error-message").hide();	//clear error message
		// generateCipheredText();

	if(checkErrors("#encryption")){ //if no errors
		generateCipheredText();
	}else{ // append error message
		appendErrors("#encryption")
	}
})

$('#dencryption-submit').click(function(e){
	e.preventDefault(); //prevent submit button default
	$("#decryption .error-message").hide(); //clear error message	
	if(checkErrors("#decryption")){ // if no errors
		generateDecipheredText();
	}else{ // append error message
		appendErrors("#decryption")
	}	
})

function checkErrors(method){
	var counter = 0; //initialize counter 
	var length = $( method + ' .cipher-input').length //ammount of inputs  
	var mustBeNumber = "<p class='error-message'> This input must be a number! </p>"
	var outOfRange = "<p class='error-message'> This number must be between 1 - " + rangeLength + "</p>"

	var letterShiftInput = $( method +' .letter-shift-wrap .cipher-input').val(); 
	if (isNaN(letterShiftInput)) { // check if letter shift is a int
		$(method + ' .letter-shift-wrap .label-wrap').append(mustBeNumber)
	}else if ( letterShiftInput > rangeLength){ // check in letter shift is within range
		$(method + ' .letter-shift-wrap .label-wrap').append(outOfRange)	
	}else{	
		$( method + ' .cipher-input').each(function(){
			if ($(this).val() != "") { // if input is not empty
				counter += 1 //add one to counter
			}
		}) 
	}

	if(counter == length){ //if ammount of inputs == counter return true else return false
		return true
	}else{
		return false
	}
}

function appendErrors(method){
	var empty = "<p class='error-message'> this field is required! </p>" 
	$( method + ' .cipher-input').each(function(){ 
		if ($(this).val() == "") {	//only append error message to empty inputs
			$(this).siblings('.label-wrap').append(empty)
		}
	})
}


function generateCipheredText(){
	console.log('generateCipheredText');
	var cleanText = $('.text-encrypt').val().split(''); //get clean text, turn it into array
	var ceaserCipher = generateCeaserCipher('#encryption');
	var letterIndex =[]
	for (var i = 0; i < cleanText.length; i++) { //loop through cleanText
		for (var j = 0; j < alphabet.length; j++) { //loop through alphabet
			if(alphabet[j] === cleanText[i]){ //if match, get index from alphabet
				letterIndex.push(j)
			}else if(cleanText[i] ===" "){ //detect if its a space
				letterIndex.push(" ") //push space in
			}
		}
	}

	var encryptedText = []
	for (var i = 0; i < letterIndex.length; i++) { //loop through letterIndex
		if (letterIndex[i] === " ") {//push space in
			encryptedText.push(" ")
		}else{ //use letterIndex as index for ceaserCipher, push to encrypted text 
			encryptedText.push(ceaserCipher[letterIndex[i]])
		}
	}

	// console.log(encryptedText)
	encryptedText = encryptedText.flat() //flatten encrypted text array to output
	$('.ciphered-text').html(encryptedText) //push to DOM
}

function generateDecipheredText(){
	var encryptedText = $('.encrypted-text').val().split(''); //get ciphered text, turn it into array
	var ceaserCipher = generateCeaserCipher('#decryption');

	var letterIndex =[]
	for (var i = 0; i < encryptedText.length; i++) {
		for (var j = 0; j < ceaserCipher.length; j++) { //loop through ceaserCipher
			if(ceaserCipher[j] === encryptedText[i]){ //if match, get index from ceaserCipher
				letterIndex.push(j)
			}else if(encryptedText[i] === " "){ //detect if its a space
				letterIndex.push(" ") //push space in
			}
		}
	}

	var dencryptedText = []
	for (var i = 0; i < letterIndex.length; i++) { //loop through letterIndex
		if (letterIndex[i] === " ") {//push space in
			dencryptedText.push(" ")
		}else{ //use letterIndex as index for ceaserCipher, push to encrypted text 
			dencryptedText.push(alphabet[letterIndex[i]])
		}
	}

	dencryptedText = dencryptedText.flat() //flatten dencrypted text array to output
	$('.deciphered-text').html(dencryptedText) //push to DOM	
}

function generateCeaserCipher(method){
	var shiftNumber = $(method + ' .letter-shift').val()
	var ceaserCipher = alphabet.slice(); //clone original alphabet array 
	var slicedLetters = ceaserCipher.slice(0, shiftNumber); //get letters according to shift number 

	ceaserCipher.splice(0, shiftNumber); //delete elements starting from index 0, using shiftNumber as ammount
	ceaserCipher.push(slicedLetters) //push slicedLetters in, they will end up at the back
	ceaserCipher = ceaserCipher.flat() // flatten array because sliceLetters is an array
	return ceaserCipher;
}
