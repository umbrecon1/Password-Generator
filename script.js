// Assignment Code

//Characters 
// const since they will never change

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
const numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generates the password
function generatePassword() {
  let selectedOptions = getUserInput()

  if (selectedOptions === undefined) {
    return;
}

let { length, lowercase, uppercase, specialChars, numbers } = selectedOptions ;
let possibleCharacters = [];
let generatedPassword = "";

//if variables are selected, concat to join. use for password.

if (lowercase) {
  possibleCharacters = possibleCharacters.concat(lowerCharacters);
}
if (uppercase) {
  possibleCharacters = possibleCharacters.concat(upperCharacters);
}
if (specialChars) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}
if (numbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}

//use for loop for generation

for (i = 0; i < length + 1; i++) {
  let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
  generatedPassword += possibleCharacters[randomCharIndex]
}
// returns random password
return generatedPassword;




// Has user enter amounts needed for password and will be stored
// Valid amounts will go through while invalid one will not

function getUserInput() {
  let numberChars = parseInt(prompt("How many characters would you like your password? \n Please choose a number 8 through 128!"));
// must enter a numerical character, if not then return 

  if (Number.isNaN(numberChars)) {
    alert("Must enter a number, silly!!")
    return;
  }
//must enter number that's at least 8
  if (numberChars < 8) {
    alert("You must include at least 8 characters. Enter a valid number!")
    return;

//must enter number that's at most 128
  } else if (numberChars > 128) {
    alert("You may not exceed 128 characters. Enter a valid number! ")
    return;
  }
 // confirming which characters will be used
  let useLowercase = confirm("Would you like to use lowercase letters?")
  let useUppercase = confirm("Would you like to use uppercase letters?")
  let useSpecialChars = confirm("Would you like to use special characters?")
  let useNumbers = confirm("Would you like to use numbers?")
// if no characters are selected then restart

  if (!useLowercase && !useUppercase && !useSpecialChars && !useNumbers) {
    alert("Please select at least 1 character type!")
    return;
  }

//Object 

let optionObj = {
  length: numberChars,
  lowercase: useLowercase,
  uppercase: useUppercase,
  specialChars: useSpecialChars,
  numbers: useNumbers
}
return optionObj;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
