const ftoc = function(temperature) {
  let result = Math.round((temperature - 32) * (5/9) * 10) / 10;
  return result;
};

const ctof = function(temperature) {
  let result = Math.round((temperature * (9/5) + 32) * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
