const temperatureInput = document.querySelector('#tempInput')
const unitInput = document.querySelector('#unitInput')
const convertButton = document.querySelector('#convertButton')
const displayResult = document.querySelector('#result')

function convertTemperature(){
    const temperature = parseFloat(temperatureInput.value)
    const unit = unitInput.value;

    if (isNaN(temperature) || temperatureInput.value.trim()===''){
        displayResult.textContent = 'Please enter valid input'
        return;
    }

    let result;
    if (unit === 'celsius') {
      result = `Fahrenheit: ${celsiusToFahrenheit(temperature)}, Kelvin: ${celsiusToKelvin(temperature)}`;
    } else if (unit === 'fahrenheit') {
      result = `Celsius: ${fahrenheitToCelsius(temperature)}, Kelvin: ${fahrenheitToKelvin(temperature)}`;
    } else if (unit === 'kelvin') {
      result = `Celsius: ${kelvinToCelsius(temperature)}, Fahrenheit: ${kelvinToFahrenheit(temperature)}`;
    }

    displayResult.textContent = result;

}

convertButton.addEventListener('click', convertTemperature);

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  