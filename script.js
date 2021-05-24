// Assignment code here
function generatePassword() {
  //Initialize password.
  var myPassword = [];
  var password = "";

  var myPassLength = window.prompt("What is the length of the password? Must be at least 8 characters and no more than 128 characters.");

  //Check for correct password length.
  if (myPassLength >= 8 && myPassLength <= 128) {  
    //Possible password characters.
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = '0123456789';
    var special = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

    //Gather user criteria.
    var lowerCase = window.confirm("Would you like lower case letters in your password?");
    var upperCase = window.confirm("Would you like upper case letters in your password?");
    var numCase = window.confirm("Would you like numbers in your password?");
    var specialCase = window.confirm("Would you like special characters in your password?");

    //Check to see that one type of character is selected.
    if(lowerCase === false && upperCase === false && numCase === false && specialCase === false){
      window.alert("Please select at least one type of character to be in your password.");
      generatePassword();
    }

    //Initialize password criteria pool.
    var myPasswordCriteria = [];
    if(lowerCase === true) {
      myPasswordCriteria = myPasswordCriteria.concat(lower);
    }
    if(upperCase === true) {
      myPasswordCriteria = myPasswordCriteria.concat(upper);
    }
    if(numCase === true) {
      myPasswordCriteria = myPasswordCriteria.concat(number);
    }
    if(specialCase === true) {
      myPasswordCriteria = myPasswordCriteria.concat(special);
    }
    myPasswordCriteria = myPasswordCriteria.join("");

    //Randomize password.
    for (let index = 0; index < myPassLength; index++) {
      myPassword[index] = myPasswordCriteria[Math.floor(Math.random() * myPasswordCriteria.length)];
    }

    //Convert myPassword array of characters to a string.
    password = myPassword.join("");

  } else {
    //Incorrect password length. Restart.
    generatePassword();
  }
  
  return password;
};

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
