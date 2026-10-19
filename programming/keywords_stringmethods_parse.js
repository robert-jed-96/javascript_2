// Main Task

// 1. Open the prompt and capture the user input
let priceInput = prompt("Please enter the item price:", "0.00");

// 2. Check if the user clicked "Cancel"
if (priceInput === null) {
    console.log("User cancelled the action.");
} else {
    // 3. Convert the string input into a floating-point decimal number
    let price = parseFloat(priceInput);

    // 4. Validate if the converted input is a real number and not negative
    if (isNaN(price) || price < 49.99) {
        console.log("Invalid price entered. Please enter a valid positive number.");
    } else {
        // 5. Use the price (e.g., format it nicely with two decimal places)
        console.log(`The final price is: $${price.toFixed(2)}`);

        //Example calculation (reducing price by 10%)
        let total = price * 0.9;
        console.log(`Your new price is: $${total.toFixed(2)}`);
    }
}


// Const & Var
const rating = 5;

const week = 7;

const sentence = "The quick brown fox jumps over the lazy dog";

const string = "String";

var age = 29;
age = 30;

// String
string.method();

// Message
let msg = "Hello world";
console.log(msg.toUpperCase());
console.log(msg);
//msg = msg.toUpperCase();
//console.log(msg);

let yell = msg.toUpperCase();
console.log(yell);

console.log(rating);

// Word
let word = "    Rob     ";
console.log(word);
console.log(word.trim());

let words = "           Rob Aleks Polskswensk          "
console.log(words);
console.log(words.trim());

let tvShow = "catdog";

tvShow.indexOf("cat"); //0
tvShow.indexOf("dog"); //3
tvShow.indexOf("z"); //-q (not found)


Array.prototype.slice();

slice();
slice(start);
slice(start, end);

let home = "radio";

"I have a radio at home.".replace("radio", "blender");