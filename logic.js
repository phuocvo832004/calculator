 // Input: Get the result display element
 const resultField = document.getElementById('result');

 // Output: Append clicked number/operator to the result field
 function appendToResult(value) {
     resultField.value += value;
 }

 // Process: Clear the result field
 function clearResult() {
     resultField.value = '';
 }

 // Process: Calculate the result from the entered expression
 function calculateResult() {
     try {
         // Use eval to compute the result of the expression
         resultField.value = eval(resultField.value);
     } catch (error) {
         // Handle any errors in calculation
         resultField.value = 'Error';
     }
 }