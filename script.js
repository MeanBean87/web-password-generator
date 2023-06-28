const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberString = "0123456789";
const specialString = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


const generatePassword = () => {
  let passwordLength = Number(prompt("How many characters would you like your password to be? Must be between 8 and 128 characters"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128 characters.\nex: 8 - 128");
    generateBtn.removeEventListener("click", writePassword);
    return null;
  }



 }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

