const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultText= document.getElementById("result")

checkBtn.addEventListener("click", ()=>{
  if(userInput.value===""){
    alert("Please input a value");
    }
  else if(userInput.value.length%2 === 1){
     if(userInput.value.length === 1){
      resultText.textContent = `${userInput.  value} is a palindrome`}
}else if(userInput.value.length%2 === 0){
  alert("not doing this one yet")
}
console.log(userInput.value)
})
