// JavaScript Document

var j; // initally, the number of selected radio buttons

/*
 * Tallies and prints scores to HTML page for Mental Health Meter quiz.
 * language - the language the quiz is being viewed in (i.e., values are "en" for English and "fr" for French).
 */
function tally_scores(language) {
    // respondent's quiz scores
    var enjoyment_score = 0;
    var resilience_score = 0;
    var balance_score = 0;
    var self_actualization_score = 0;
    var flexibility_score = 0;

    var total = 0; // number of questions in quiz
    var num_sec_options = 12; // number of radio buttons per question category

    var output = "";

    j = 0;

    total = document.stress.length - 1; // Number of form elements: 31 - 1 (Submit button). Each radio button is counted as well as submit button

    // Count number of selected radio buttons and tally up "Ability to enjoy life" score.
    enjoyment_score = _tally_subset(0, num_sec_options);

    // Count number of selected radio buttons and tally up "Resilience" score.
    resilience_score = _tally_subset(num_sec_options, num_sec_options * 2);

    // Count number of selected radio buttons and tally up "Balance" score.
    balance_score = _tally_subset(num_sec_options * 2, num_sec_options * 3);

    // Count number of selected radio buttons and tally up "Self-actualization" score.		
    self_actualization_score = _tally_subset(num_sec_options * 3, num_sec_options * 4);

    // Count number of selected radio buttons and tally up "Flexibility" score.	
    flexibility_score = _tally_subset(num_sec_options * 4, num_sec_options * 5);

    j = j * 2;

    if (j < total) { // Not all questions have an answer selected.

        if (language == "en") { // Quiz is being viewed in English	
            alert("You did not fully fill out the form.\n\n Please try again.");
        } else { // Quiz is being viewed in French
            //alert("Vous faisiez pas pleinement remplir Ã©teint du formulaire. \n\n S'il vous plaÃ®t tÃ¢cher Ã  nouveau.");
            alert("Vous nâ€™avez pas tout Ã  fait complÃ©tÃ© le formulaire. \n\n Veuillez essayer Ã  nouveau.");
        }

        return;

    } else { // Form is filled correctly.  Display the scores on screen.

        if (language == "en") { // Quiz is being viewed in English

            document.getElementById("meter_results_blurb").innerHTML = "<p>Thank you for taking our Mental Health Meter! Reviewing how you responded to each section can help you identify ways in which your mental fitness could be improved. The result will be better mental health which can make a positive impact on your everyday life, and help you to cope with challenging times.  Remember that taking control of your health means taking care of your mind.</p><p>To find out more about how you can improve many aspects of your mental health visit the <a href='http://www.cmha.ca/mental-health/your-mental-health/resilience/'>Mind + Body Fitness section</a> on our web site.</p><p>Your <strong>Mental Health Meter</strong> results are below.  (You may wish to print this page from your web browser. Your results will not be saved when you leave this page.)</p>";
            document.getElementById("meter_results_blurb").setAttribute("class", "meterBlurb");

            document.getElementById("enjoyment_score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + enjoyment_score + "</span>";
            document.getElementById("enjoyment_score").setAttribute("class", "meterBlurb");

            document.getElementById("resilience_score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + resilience_score + "</span>";
            document.getElementById("resilience_score").setAttribute("class", "meterBlurb");

            document.getElementById("balance_score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + balance_score + "</span>";
            document.getElementById("balance_score").setAttribute("class", "meterBlurb");

            document.getElementById("self_actualization_score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + self_actualization_score + "</span>";
            document.getElementById("self_actualization_score").setAttribute("class", "meterBlurb");

            document.getElementById("flexibility_score").innerHTML = "<span class='total'><strong>Your score is:</strong> " + flexibility_score + "</span>";
            document.getElementById("flexibility_score").setAttribute("class", "meterBlurb");

            document.getElementById("meter_results_blurb").scrollIntoView();
        } else { // language is French
            document.getElementById("meter_results_blurb").innerHTML = "<p>Merci dâ€™avoir fait lâ€™essai de notre Ã‰valuateur de santÃ© mentale!  Lâ€™analyse de vos rÃ©ponses aux Ã©noncÃ©s de chaque section peut vous aider Ã  identifier des maniÃ¨res dâ€™amÃ©liorer votre forme mentale. Vous bÃ©nÃ©ficierez ainsi d'une meilleure santÃ© mentale qui pourrait avoir un effet positif sur votre vie de tous les jours et vous aider Ã  affronter les pÃ©riodes difficiles. Rappelez-vous que prendre sa santÃ© en main câ€™est aussi sâ€™occuper de son esprit.</p><p>Pour en apprendre davantage sur la maniÃ¨re dont vous pouvez amÃ©liorer de nombreux aspects de votre santÃ© mentale, visitez la section <a href='http://www.cmha.ca/fr/sante-mentale/votre-sante-mentale/la-resilience/'>Forme physique + mentale</a> de notre site Web.</p><p>Vos rÃ©sultats au questionnaire <strong>Ã‰valuateur de santÃ© mentale</strong> se trouvent ci-dessous.  (Vous pouvez imprimer cette page Ã  partir de votre navigateur Web. Vos rÃ©sultats ne seront pas enregistrÃ©s lorsque vous fermerez cette page.)</p>";
            document.getElementById("meter_results_blurb").setAttribute("class", "meterBlurb");

            document.getElementById("enjoyment_score").innerHTML = "<span class='total'><strong>Votre pointage est de :</strong> " + enjoyment_score + "</span>";
            document.getElementById("enjoyment_score").setAttribute("class", "meterBlurb");

            document.getElementById("resilience_score").innerHTML = "<span class='total'><strong>Votre pointage est de :</strong> " + resilience_score + "</span>";
            document.getElementById("resilience_score").setAttribute("class", "meterBlurb");

            document.getElementById("balance_score").innerHTML = "<span class='total'><strong>Votre pointage est de :</strong> " + balance_score + "</span>";
            document.getElementById("balance_score").setAttribute("class", "meterBlurb");

            document.getElementById("self_actualization_score").innerHTML = "<span class='total'><strong>Votre pointage est de :</strong> " + self_actualization_score + "</span>";
            document.getElementById("self_actualization_score").setAttribute("class", "meterBlurb");

            document.getElementById("flexibility_score").innerHTML = "<span class='total'><strong>Votre pointage est de :</strong> " + flexibility_score + "</span>";
            document.getElementById("flexibility_score").setAttribute("class", "meterBlurb");

            document.getElementById("meter_results_blurb").scrollIntoView();
        }
    }

}

/* 
 * Helper function that returns tally of form radio button values beginning at radio button item 'start' and ending at
 * radio button item 'end'-1.
 *
 * start - starting index of form item to tally.
 * end - end index +1  of form item values to tally.
 */
function _tally_subset(start, end) {

    var score = 0;

    // Count number of selected radio buttons and tally up score.	
    for (var c = start; c < end; c++) {
        if (document.stress.elements[c].checked) { // Radio button is selected.
            j++;
            score = score + parseInt(document.stress.elements[c].value);
        }
    }

    return score;
}

/**
 * Get the closest matching element up the DOM tree.
 * @private
 * @param  {Element} elem     Starting element
 * @param  {String}  selector Selector to match against
 * @return {Boolean|Element}  Returns null if not match found
 */
var getClosest = function (elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }

    return null;

};

function radioBorder() {
    var radios = document.getElementsByTagName('input');
    var elmTD = document.getElementsByTagName("td");

    for (var x = 0, length = elmTD.length - 1; x < length; x++) {
        document.getElementsByTagName("td")[x].classList.remove("inputCheck");
    }

    for (var i = 0, length2 = radios.length; i < length2; i++) {
        if (radios[i].checked) {
            console.log(radios[i].name + " - " + radios[i].value);
            var closestElem = getClosest(radios[i], 'td');
            closestElem.setAttribute("class", "inputCheck");
        }
    }
}