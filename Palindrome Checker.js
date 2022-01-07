// palindrome Function
function palindrome(str) {
    var regex = /[\W_]/g;

    var newString = str.toLowerCase().replace(regex, "");

    var reversed = newString.split("").reverse().join();
    if (reversed === newString) return true;

    return false;
}

palindrome("eye");


// < !--------------------------------------START WEB API----------------------------------------->

let submitButtonEvent = document.getElementById("submitButton");        // L1 - create var referencing our HTML element with the id "submitButton"

submitButtonEvent.addEventListener("click", function () {                // L2 - document.addEventListener(event, function), event usually "click"
    'use strict';                                                       // L3 - 'use strict' -> good conventiont to detect errors e.g. undeclared variables

    var value = document.getElementById("inputString").value;           // L4 - creates first local variable, referencing our HTML with id "inputString"
    var notification = document.getElementById("notification");         // L5 - creates second local variable, referencing our HTML with id "notification"
    var displayWord = document.getElementById("displayWord");

    if (palindromeCheck2(value)) {                                       // L6 - references our function name, and starts do this if
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;     // L7 - print if function resulted true. Refs our variables. 
        displayWord.innerHTML =
            `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');

    } else {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a palindrome!`; // L8 - print if function resulted false
        displayWord.innerHTML =
            `Fowards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');
    }
});

// END WEB API
