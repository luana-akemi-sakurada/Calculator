const display = document.getElementById("display");
const keys = document.getElementById("keys");

function appendToDisplay(value) {
        display.value += value;
    }
    
    function clearDisplay() {
        display.value = "";
    }
    
    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";

            setTimeout(() => {
                display.value = "";
            }, 1000);
        }
    }
    function deleteLastChar() {
        let currentValue = display.value;
        
        display.value = currentValue.slice(0, -1);
    }

    
