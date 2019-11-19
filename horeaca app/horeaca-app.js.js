const fris = 1
const bier = 2
const wijn = 3
const snacks = 1
var hoeveelfris =0;
var hoeveelbier =0;
var hoeveelwijn =0;
var hoeveelsnacks =0;

function bestelling() {
	var keuze = prompt('wat wilt u bestellen keuze zijn: fris, bier, wijn en snacks');

	if (keuze == "fris" ) {
		hoeveelfris += parseInt(prompt("hoeveel fris wilt u toevoegen aan uw bestelling"));
	bestelling();
	}
	else if (keuze == "bier" ) {
		hoeveelbier += parseInt(prompt("hoeveel bier wilt u toevoegen aan uw bestelling"));
	bestelling();
	}
	else if (keuze == "wijn" ) {
		hoeveelwijn += parseInt(prompt("hoeveel wijn wilt u toevoegen aan uw bestelling"));
	bestelling();
	}
	else if (keuze == "snacks" ) {
		hoeveelsnacks += parseInt(prompt("hoeveel bitterballen wilt u toevoegen aan uw bestelling (8 of 16)"));
		if (hoeveelsnacks == "8") {
			bestelling();
		}
		else if (hoeveelsnacks == "16" ) {
			bestelling();
		}	
		else {
			alert("u heeft een ongeldige invoer gedaan");
			bestelling();
		}
	}
	else if (keuze == "stop") {
		kassabon();
	}
	else {
		alert("u heeft een ongeldige invoer gedaan");
		bestelling();
	}
}

function kassabon() {

	var fristotaal = (hoeveelfris * fris)
	var biertotaal = (hoeveelbier * bier)
	var wijntotaal = (hoeveelwijn * wijn)
	var snackstotaal = (hoeveelsnacks * snacks)

	if (fristotaal > 0 ) {
		document.write("fris | " + hoeveelfris + " x 1 = " + fristotaal + "<br/>" );
	}
	if (biertotaal > 0 ) {
		document.write("bier | " + hoeveelbier + " x 2 = " + biertotaal + "<br/>" );
	}
	if (wijntotaal > 0) { 
		document.write("wijn | " + hoeveelwijn + " x 3 = " + wijntotaal + "<br/>" );
	}
	if (snackstotaal > 0) { 
		document.write("snacks | " + hoeveelsnacks + " x 1 = " + snackstotaal + "<br/>" );
    }
    document.write("<br/>")
    document.write("totaal | " + (fristotaal + biertotaal + wijntotaal + snackstotaal));
}
    bestelling();