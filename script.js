const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultText= document.getElementById("result")

checkBtn.addEventListener("click", ()=>{
  if(userInput.value!==""){
    if(userInput.value.length === 1){
      resultText.textContent = `${userInput.value} is a palindrome`
    }
  }else(
    alert("Please input a value")
  )
})
