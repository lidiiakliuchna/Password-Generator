// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var length = 0;
var length_password = 0;
var uppercase;
var lowercase;
var numbers;
var special;
var passwordword = "";
// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  length = prompt("How many characters do you want to have in your password?");
  uppercase = confirm("Do you want uppercase letters in your password?");
  lowercase = confirm("Do you want lowercase letters in your password?");
  numbers = confirm("Do you want numbers in your password?");
  special = confirm("Do you want special characters letters in your password?");
  password = "";
  length_password = 0;
  if (!uppercase && !lowercase && !numbers && !special) {
    alert("You should have at least one character");
  }
  if (length > 64) {
    alert("Your password should be maximum 64");
    return;
  }
  if (length < 10) {
    alert("Your password should be more than 10");
    return;
  }
  while (length_password < length) {
    if (uppercase === true && length_password < length) {
      var big_letter = upperCasedCharacters[Math.floor(Math.random() * 26)];
      password = password + big_letter;
      length_password++;
    }

    if (lowercase === true && length_password < length) {
      var small_letter = lowerCasedCharacters[Math.floor(Math.random() * 26)];
      password = password + small_letter;
      length_password++;
    }
    if (numbers === true && length_password < length) {
      var number = numericCharacters[Math.floor(Math.random() * 10)];
      password = password + number;
      length_password++;
    }

    if (special === true && length_password < length) {
      var specialcharacter = specialCharacters[Math.floor(Math.random() * 23)];
      password = password + specialcharacter;
      length_password++;
    }
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
