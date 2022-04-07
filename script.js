// Assignment Code

//Characters

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var selectedOptions = getUserInput() 

  }

  

function getUserInput() {
  let numberChars = parseInt(prompt("How many characters would you like your password? \n Please choose a number between 8 and 128!"))

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
