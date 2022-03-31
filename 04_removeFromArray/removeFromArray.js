const removeFromArray = function(array, args) {
    let remove = Array.from(arguments).slice(1);
    let result = array.filter(x => !remove.includes(x));
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
