// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

// returns 0 to 'limit'
var limit = 3;
var numRand = Math.floor(Math.random()*limit);


		var msg1 = 'HELLO';
		var msg2 = 'HOLA';
		var msg3 = 'BONJOUR';
		var msg4 = 'NI HAO';



	$('h1').text('msg' + numRand);

	console.log(numRand);

}); 
