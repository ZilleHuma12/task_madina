document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");

    // Function to add a character to the display
    function addToDisplay(char) {
        display.value += char;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Function to evaluate the expression and display the result
    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Add event listeners to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                addToDisplay(value);
            }
        });
    });
});