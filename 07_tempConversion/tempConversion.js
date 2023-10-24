const convertToCelsius = function(fahrenheit) {
  let convertToC = (fahrenheit - 32) * (5/9);
  let celsius = Math.round(convertToC * 10) / 10
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let convertToF = celsius * (9/5) + 32
  let fahrenheit = Math.round(convertToF * 10) / 10
  return fahrenheit;
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
