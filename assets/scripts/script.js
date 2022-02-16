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
  lengthOfPassword = Number(prompt('enter password length'))

  // Repeats function if password is not a number in range
  if (!(lengthOfPassword>=8 && lengthOfPassword<=128)){
    alert('Password must be between 8 and 128 characters')
    return getLength()
  }
  return lengthOfPassword
}

// Asks for the allowed characters for the password and repeats until at least one option is selected
function getCharacterOptions(){
    let allowLower = confirm('Allow lowercase letters? (yes/no): ')
    let allowUpper = confirm('Allow upercase letters? (yes/no): ')
    let allowNumbers = confirm('Allow numbers? (yes/no): ')
    let allowSpecial = confirm('Allow special characters? (yes/no): ')

    // Repeats function until at least one option is selected
    if (!(allowLower || allowUpper || allowNumbers || allowSpecial)){
      alert('You must select at least one type of character. ')
      return getCharacterOptions()
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
  // Array of possible values
  const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const num = [1,2,3,4,5,6,7,8,9,0]
  const special = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
  
  // Gets the password length and character options
  let passwordLength = getLength()
  let passwordCharacters = getCharacterOptions()

  // Adds the allowed characters to the array
  let passwordBank = []
  if (passwordCharacters.allowLower){
    passwordBank.push(...lower)
  }
  if (passwordCharacters.allowUpper){
    passwordBank.push(...upper)
  }
  if (passwordCharacters.allowNumbers){
    passwordBank.push(...num)
  }
  if (passwordCharacters.allowSpecial){
    passwordBank.push(...special)
  }

  // Generates a random password from the passwordBank array
  let password='';
  for (i=0;i<passwordLength;i++){
    password+=passwordBank[parseInt(Math.random()*passwordBank.length)]
  }
  return password;
}
