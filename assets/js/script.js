// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Ask for length of password and repeats until a valid answer is given
function getLength(){
  lengthOfPassword = (prompt('Please enter the number of characters for the password\n(8 - 128): '))
  
  // If cancel button was pressed it will return out of function
  if (!lengthOfPassword){
    return
  }

  // Converts the input for password length into a number rounded down to an integer
  else {
    lengthOfPassword = Math.floor(lengthOfPassword)
  }

  // Returns if password is not a number in range
  if (!(lengthOfPassword>=8 && lengthOfPassword<=128)){
    alert('The password must be a number between 8 and 128 characters')
    return 
  }
  return lengthOfPassword
}

// Asks for the allowed characters for the password and repeats until at least one option is selected
function getCharacterOptions(){
    let allowLower = confirm('Press Ok to allow Lowercase characters: ')
    let allowUpper = confirm('Press Ok to allow Uppercase characters: ')
    let allowNumbers = confirm('Press Ok to allow Numbers: ')
    let allowSpecial = confirm('Press Ok to allow Special characters: ')

    // Returns if no option is selected
    if (!(allowLower || allowUpper || allowNumbers || allowSpecial)){
      alert('You must select at least one type of character. ')
      return
    }

    // Returns an object with the allowed characters
    return {
      allowLower:allowLower,
      allowUpper:allowUpper,
      allowNumbers:allowNumbers,
      allowSpecial:allowSpecial
    }
}


function generatePassword(){
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Array of possible values
  const lower = alphabet.split('');
  const upper = (alphabet.toUpperCase()).split('');
  const num = '1234567890'.split('');
  const special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
  

  // Gets the password length and character options
  let passwordLength = getLength()

  // If a valid password length was not entered it will return out of the function and display the placeholder text
  if (!passwordLength){
    return ''
  }


  let passwordCharacters = getCharacterOptions()

  // If no option was selected it will return out of the function and display the placeholder text
  if (!passwordCharacters){
    return ''
  }


  // Adds the allowed characters to passwordBank and one of each to randomCharacter
  let passwordBank = []
  let randomCharacter = []

  function addAllowedCharacters(arrayType){
    passwordBank.push(...arrayType);
    randomCharacter.push(arrayType[parseInt(Math.random()*arrayType.length)]) ;
  }

  if (passwordCharacters.allowLower){
    addAllowedCharacters(lower);
  }
  if (passwordCharacters.allowUpper){
    addAllowedCharacters(upper);
  }
  if (passwordCharacters.allowNumbers){
    addAllowedCharacters(num);
  }
  if (passwordCharacters.allowSpecial){
    addAllowedCharacters(special);
  }


  // Generates a random password from the passwordBank array
  let password='';

  // The index will start in the first for loop and continue from its' current value in the second for loop
  let index = 0;

  // Starting length of the randomCharacter array to ensure the for loop continues as items are removed
  let initialChosenArrayLength = randomCharacter.length

  // Adds one random character to the password from each character type allowed 
  for (index;index<initialChosenArrayLength;index++){
    password+=randomCharacter.splice([parseInt(Math.random()*randomCharacter.length)],1)
  }

  // Adds random characters from the entire passwordBank for the remainder of the password
  for (let i=index;i<passwordLength;i++){
    password+=passwordBank[parseInt(Math.random()*passwordBank.length)]
  }
  return password;
}
