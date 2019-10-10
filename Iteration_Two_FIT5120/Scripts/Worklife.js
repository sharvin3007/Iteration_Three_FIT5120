// JavaScript Document

/*
 * Tallies and prints score to HTML page for Workplace Balance quiz.
 * language - the language the quiz is being viewed in (i.e., values are "en" for English and "fr" for French).
 */
function balance_tally(language) {
	var score = 0;// respondent's quiz score
	var j = 0; // initially, the number of selected radio buttons
	var total = 0;
	var num = 0; // number of questions in quiz
	
	var output = "";

	total = document.stress.length - 1;// Number of form elements: 31 - 1 (Submit button). Each radio button is counted as well as submit button
	
 	for (var k=0; k < total; k++){ // Count number of selected radio buttons and tally up score.
		if (document.stress.elements[k].checked){ // Radio button is selected.
			j++;
			score = score + parseInt(document.stress.elements[k].value);
		}
	}
	
	j = j * 2;
	
	if (j < total){ // Not all questions have an answer selected.
	
		if (language == "en") { // Quiz is being viewed in English
			alert("You did not fully fill out the form.\n\n Please try again.");
		}
		else { // Quiz is being viewed in French
			alert("Vous faisiez pas pleinement remplir Ã©teint du formulaire. \n\n S'il vous plaÃ®t tÃ¢cher Ã  nouveau."); 		
		}
		return;
		
	} else { // Display the score on screen.
	
		if (language == "en") { // Quiz is being viewed in English	
			document.getElementById("score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + score + "</span>";
			document.getElementById("score").setAttribute("class", "meterBlurb");
		}
		else { // Quiz is being viewed in French
			document.getElementById("score").innerHTML = "<span class='total'><strong>Votre pointage est de : </strong> " + score + "</span>";
			document.getElementById("score").setAttribute("class", "meterBlurb");
		}
	}				
}