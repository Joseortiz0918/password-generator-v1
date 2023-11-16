// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var characterLength = prompt("Enter number of characters", 8);
    if (characterLength <= 8) {
      alert("Your password must be more than 8 characters");
      return characterLength
    }
    if (characterLength >=128){
      alert("Your password must be less than 128 characters");
    return characterLength
    }
    var addUppercase = confirm("Do you wish to add lowercase letters to your password")
    var addUppercase = confirm("Do you wish to add uppercase letters to your password")
    var addNumbers = confirm("Do you wish to add numbers to your password")
    var addSymbols = confirm("Do you wish to add symbols to your password")
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;

//}
//

//}
//add stipulation where there is repesentation of all variables selected

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//use these
//window.prompt()
//window.confirm()
