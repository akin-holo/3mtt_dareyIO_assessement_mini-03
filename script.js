const displayField = document.getElementById("screen");

// fn buttons
const clearAll = document.getElementById("clearAll");
const clearLast = document.getElementById("clear");
const backSpace = document.getElementById("backSpace");

// Numbers buttons
const numberButtons = document.querySelectorAll(".inputs-container .num");

// signs buttons 
const operatorButtons = document.querySelectorAll(".symbol");

// equals to button
const equalButton = document.getElementById("equal");

// memory
let currentInput = "";
firstNumber = null;
let operator = null;

function displayValue(value) {
   displayField.textContent = value;
}

//
numberButtons.forEach(button => {
   button.addEventListener("click", () => {
      currentInput += button.textContent;
      displayValue(currentInput);
   });
});


operatorButtons.forEach(btn => {
   btn.addEventListener("click", () => {
      if(currentInput === "") 
         return;

      firstNumber = parseFloat(currentInput);
      operator = btn.textContent;
      currentInput = "";
      displayValue(currentInput + " " + operator);
   });
});


equalButton.addEventListener("click", () => {
   if (currentInput === "" || firstNumber === null || operator === null)
      return;

   const secondNumber = parseFloat(currentInput);
   let result;

   switch (operator) {
      case "+":
         result = firstNumber + secondNumber;
         break;
      
      case "-":
         result = firstNumber - secondNumber;
         break;
      
      case "x":
         result = firstNumber * secondNumber;
         break;

      case "÷":
         result = firstNumber / secondNumber;
         break;

      default:
         return;
   }

   displayValue(result);
   currentInput = result.toString();
   firstNumber = null;
   operator = null;
});


// Clear All (AC) button 
clearAll.addEventListener("click", () => {
   currentInput = "";
   firstNumber = null;
   operator = null;
   displayValue("");
 });
 
 // Clear only current entry (C) 
 clearLast.addEventListener("click", () => {
   currentInput = "";
   displayValue("");
 });
 
 // Backspace button 
 backSpace.addEventListener("click", () => {
   currentInput = currentInput.slice(0, -1);
   displayValue(currentInput);
 });


