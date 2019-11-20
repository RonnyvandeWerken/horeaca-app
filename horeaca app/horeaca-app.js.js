const fris = 1
const bier = 2
const wijn = 3
const snacks8 = 4
const snacks16 = 8
var hoeveelfris =0;
var hoeveelbier =0;
var hoeveelwijn =0;
var hoeveel8 =0;
var hoeveel16 =0;

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
		var welkesnacks = prompt("hoeveel bitterballen wilt u toevoegen aan uw bestelling (8 of 16)");
		if (welkesnacks == "8") {
			hoeveel8 += parseInt(prompt("hoeveel schalen van 8 bitterballen wilt u"));
			bestelling();
		}
		else if (welkesnacks == "16" ) {
			hoeveel16 += parseInt(prompt("hoeveel schalen van 16 bitterballen wilt u"));
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
	var snacks8totaal = (hoeveel8 * snacks8)
	var snacks16totaal = (hoeveel16 * snacks16)

	if (fristotaal > 0 ) {
		document.write("fris | " + hoeveelfris + " x 1 = " + fristotaal + "<br/>" );
	}
	if (biertotaal > 0 ) {
		document.write("bier | " + hoeveelbier + " x 2 = " + biertotaal + "<br/>" );
	}
	if (wijntotaal > 0) { 
		document.write("wijn | " + hoeveelwijn + " x 3 = " + wijntotaal + "<br/>" );
	}
	if (snacks8totaal > 0) { 
		document.write("snacks | " + hoeveel8 + " x 4 = " + snacks8totaal + "<br/>" );
    }
    if (snacks16totaal > 0) { 
		document.write("snacks | " + hoeveel16 + " x 8 = " + snacks16totaal + "<br/>" );
    }
    document.write("<br/>")
    document.write("totaal | " + (fristotaal + biertotaal + wijntotaal + snacks8totaal + snacks16totaal));
}
    bestelling();