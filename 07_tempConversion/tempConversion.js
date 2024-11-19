const convertToCelsius = function(temp) {
  fConstant = 5/9;
  let newTemp = (temp-32)*fConstant;
  if (!Number.isInteger(newTemp)){
    newTemp = Number(newTemp.toFixed(1))
  }
  return newTemp;
};

const convertToFahrenheit = function(temp) {
  cConstant = 9/5;
  let newTemp = (temp * cConstant) + 32;
  if (!Number.isInteger(newTemp)){
    newTemp = Number(newTemp.toFixed(1))
  }
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
