const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultText= document.getElementById("result")

checkBtn.addEventListener("click", btnClicked)

function btnClicked(){
  if(userInput.value===''){
    alert('Please input a value')
  }else if(checkPalindrome(userInput.value) === true){
    resultText.innerText = `${userInput.value} is a palindrome`
  }else if(checkPalindrome(userInput.value) ===false){
    resultText.innerText = `${userInput.value} is not a palindrome`
  }
}

function checkPalindrome(userInput){
  const regex = /[\W_]/g
  let cleanedInput = userInput.toLowerCase().replace(regex, '');
  let reversedInput = cleanedInput.split("").reverse().join("");
  return reversedInput === cleanedInput
}
