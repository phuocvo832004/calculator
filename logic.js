/**
 * Input: A value (number or operator) to be displayed.
 * Process: Appends the value to the display input field.
 * Output: Updated display showing the input value.
 */
function appendToDisplay(value) {
    document.getElementById('display').value += value; 
}

/**
 * Input: None.
 * Process: Clears the display input field.
 * Output: Display is reset to an empty string.
 */
function clearDisplay() {
    document.getElementById('display').value = '';
}

/**
 * Input: The current expression in the display.
 * Process: Evaluates the expression and replaces '±' with '-' before calculating.
 * Output: The result of the calculation displayed or 'Error' if there's an issue.
 */
function calculateResult() {
    // Get the display input element by its ID
    const display = document.getElementById('display');

    try {
        // Replace '±' with '-' in the expression and evaluate it
        // Assign the evaluated result back to the display
        display.value = eval(display.value.replace('±', '-'));
    } catch (error) {
        // If an error occurs during evaluation, display 'Error'
        display.value = 'Error'; // Handle any errors in the calculation
    }
}