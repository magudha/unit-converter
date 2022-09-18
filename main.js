// Select input field
var input = document.querySelector("#input");

// Select unit selections
var unit = document.querySelector("#unit");

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

function convert() {

    // Get value of user input and units
    var value = input.value;
    var unitValue = unit.value;
    var output = document.querySelector("#output");

    // Show output when there is a value
    if(value !== "") {
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }

    // check unit type
    switch(unitValue) {
        case "Kilometre":
            convertkilometre(value);
            break;
        case "Metres":
            convertMetres(value);
            break;
        case "Inches":
            convertInches(value)
            break;
        case "feet":
            convertfeet(value)
            break;
        case "celcius":
            convertcelcius(value)
            break;
        case "Fahrenheit":
            convertFahrenheit(value)
            break;
        case "metres per second":
            convertmetresPerSecond(value)
        case "kilometres per hour":
            convertkilometresPerHour(value)
        case "miles per hour":
            convertmilesPerHour(value)
            break;
    }
}  

var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");

function convertMetres(value) {
    card1.querySelector('h4').textContent="Kilometres:"
    card2.querySelector('h4').textContent="feet:"
    card3.querySelector('h4').textContent="Inches:"

    card1.querySelector('div').textContent= value * 1000;
    card2.querySelector('div').textContent= value * 0.305;
    card3.querySelector('div').textContent= value * 0.0254;
}

function convertkilometre(value) {
    card1.querySelector('h4').textContent="Metres:"
    card2.querySelector('h4').textContent="feet:"
    card3.querySelector('h4').textContent="Inches:"

    card1.querySelector('div').textContent= value * 0.001;
    card2.querySelector('div').textContent= value * 0.000305;
    card3.querySelector('div').textContent= value * 2.54*10^-5;
}

function convertInch(value) {
    card1.querySelector('h4').textContent="Metres:"
    card2.querySelector('h4').textContent="kilometres:"
    card3.querySelector('h4').textContent="feet:"

    card1.querySelector('div').textContent= value * 39.37;
    card2.querySelector('div').textContent= value * 39370.079;
    card3.querySelector('div').textContent= value * 12;
}

function convertfeet(value) {
    card1.querySelector('h4').textContent="Metres:"
    card2.querySelector('h4').textContent="kilometre:"
    card3.querySelector('h4').textContent="Inches:"

    card1.querySelector('div').textContent= value * 3.28084;
    card2.querySelector('div').textContent= value * 3280.84;
    card3.querySelector('div').textContent= value * 0.0833;
}

function convertcelcius(value) {
    card1.querySelector('h4').textContent="Fahrenheit:"
 
    card1.querySelector('div').textContent= (value-32)*5/9;
}

function convertFahrenheit(value) {
    card1.querySelector('h4').textContent="celcius:"

    card1.querySelector('div').textContent= (value*9/5) + 32;

}

function convertmetresPerSecond(value) {
    card1.querySelector('h4').textContent="kilometresPerHour:"
    card2.querySelector('h4').textContent="milesPerHour:"

    card1.querySelector('div').textContent= value * 0.277778;
    card2.querySelector('div').textContent= value * 0.44704;
}

function convertkilometresPerHour(value) {
    card1.querySelector('h4').textContent="MetresPerHour:"
    card2.querySelector('h4').textContent="milesPerHour:"

    card1.querySelector('div').textContent= value * 3.6;
    card2.querySelector('div').textContent= value * 0.621371;
}

function convertmilesPerHour(value) {
    card1.querySelector('h4').textContent="kilometresPerHour:"
    card2.querySelector('h4').textContent="metresPerHour:"

    card1.querySelector('div').textContent= value * 1.60934;
    card2.querySelector('div').textContent= value * 2.23694;
}