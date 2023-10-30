       // Create a function to append buttons to the calculator
       function createButton(text, clickHandler) {
        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        document.getElementById('calculator').appendChild(button);
    }

    // Create a function to append values to the display
    function appendToDisplay(value) {
        display.value += value;
    }

    // Create a function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Create a function to calculate the result
    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Get the display element
    const display = document.getElementById('display');

    // Create buttons for the calculator
    createButton('7', () => appendToDisplay('7'));
    createButton('8', () => appendToDisplay('8'));
    createButton('9', () => appendToDisplay('9'));
    createButton('+', () => appendToDisplay('+'));
    createButton('4', () => appendToDisplay('4'));
    createButton('5', () => appendToDisplay('5'));
    createButton('6', () => appendToDisplay('6'));
    createButton('-', () => appendToDisplay('-'));
    createButton('1', () => appendToDisplay('1'));
    createButton('2', () => appendToDisplay('2'));
    createButton('3', () => appendToDisplay('3'));
    createButton('*', () => appendToDisplay('*'));
    createButton('C', clearDisplay);
    createButton('0', () => appendToDisplay('0'));
    createButton('=', calculateResult);
    createButton('/', () => appendToDisplay('/'));