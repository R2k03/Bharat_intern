
function convertCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value !== "") {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = celsius * 9 / 5 + 32;
        fahrenheitInput.value = fahrenheit.toFixed(1);
        resultElement.textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
    } else {
        fahrenheitInput.value = "";
        resultElement.textContent = "";
    }
}

function convertFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultElement = document.getElementById("result");

    if (fahrenheitInput.value !== "") {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        celsiusInput.value = celsius.toFixed(1);
        resultElement.textContent = `${fahrenheit}°F is equal to ${celsius}°C`;
    } else {
        celsiusInput.value = "";
        resultElement.textContent = "";
    }
}