// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

const generatePassword = () => {
  generateBtn.removeEventListener("click", writePassword);
  let passwordLength = Number(
    prompt(
      "How many characters would you like your password to be?\nMust be between 8 and 128 characters"
    )
  );
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password length must be a number between 8 and 128 characters.\nExample: 8 - 128"
    );
    return null;
  } else {
    //Prompt the user for each type of character they would like to include in the password.
    let includeLowercase = confirm(
      'Would you like to include lowercase letters?"\n"OK" for Yes, "Cancel" for No.'
    );
    let includeUppercase = confirm(
      'Would you like to include uppercase letters?"\n"OK" for Yes, "Cancel" for No.'
    );
    let includeNumbers = confirm(
      'Would you like to include numbers?"\n"OK" for Yes, "Cancel" for No.'
    );
    let includeSpecial = confirm(
      'Would you like to include special characters?"\n"OK" for Yes, "Cancel" for No.'
    );

    // If the user does not select at least one character type and
    // alert the user that at least one character type must be selected.
    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSpecial
    ) {
      alert("You must select at least one character type. Please try again.");
      return null;
    } else {
      //Create an object to store the character Strings.
      const characterStrings = {
        lowercaseString: "abcdefghijklmnopqrstuvwxyz",
        uppercaseString: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numberString: "0123456789",
        specialString: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
      };

      let selectedCharacters = "";
      //Adding the selected character types to the selectedCharacters.
      if (includeLowercase) {
        selectedCharacters += characterStrings.lowercaseString;
      }

      if (includeUppercase) {
        selectedCharacters += characterStrings.uppercaseString;
      }

      if (includeNumbers) {
        selectedCharacters += characterStrings.numberString;
      }

      if (includeSpecial) {
        selectedCharacters += characterStrings.specialString;
      }

      //Create a variable to store the randomly selected String from the user prompts.
      let randomString = "";

      //For loop to generate the password.
      for (let i = 0; i < passwordLength; i++) {
        randomString += selectedCharacters.charAt(
          Math.floor(Math.random() * selectedCharacters.length)
        );
      }
      return randomString;
    }
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
