const reverseString = function(String) {
    let result = "";
    for (let i = String.length - 1; i >= 0; i--) {
        result += String[i]
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
