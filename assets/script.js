// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var passwordLength = prompt("Enter number of characters", 8);
    //makes sure that if password length is too little or too big it does not work for greater password security  
    if (passwordLength <= 7) {
      alert("Your password must be more than 8 characters");
      return
    }
    if (passwordLength >=127){
      alert("Your password must be less than 128 characters");
      return
    }
    
    var addLowercase = confirm("Do you wish to add lowercase letters to your password")
    var addUppercase = confirm("Do you wish to add uppercase letters to your password")
    var addNumbers = confirm("Do you wish to add numbers to your password")
    var addSymbols = confirm("Do you wish to add symbols to your password")

    var lowercaseCharCodes =arrayLowToHigh(97,122)
    var uppercaseCharCodes =arrayLowToHigh(65,90)
    var numberCharCodes =arrayLowToHigh(48,57)
    var symbolCharCodes =arrayLowToHigh(33,47)
    .concat(arrayLowToHigh(58,64)
    ).concat(arrayLowToHigh(91,96)
    ).concat(arrayLowToHigh(124,126)
    )

  function generatePassword(passwordLength,addUppercase, addNumbers,addSymbols ) {
    let charCodes =lowercaseCharCodes
    if(addUppercase) charCodes =lowercaseCharCodes.concat(uppercaseCharCodes)
    if(addNumbers) charCodes =lowercaseCharCodes.concat(numberCharCodes)
    if(addSymbols) charCodes =lowercaseCharCodes.concat(symbolCharCodes)

    const passwordCharacters = []
    for(let i =0; i<passwordLength; i++){
      const characterCode =charCodes[Math.floor(math.random()* charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }  
    return passwordCharacters.join('')

  }
  function arrayLowToHigh(low,high){
    const array=[]
    for(let i = low; i<=high; i++){
      array.push(i)
    }
    return array
  }
  passwordText.value = password;
  console.log(generatePassword)
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
