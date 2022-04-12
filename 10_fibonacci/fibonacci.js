const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (typeof(n) == 'string') n = parseInt(n);
    let array = Array(n).fill(1).reduce((result,_,i) => {
        result.push((i <= 1) ? 1 : result[i-2] + result[i-1]);
        return result;
    }, [])
    return array.pop()
};
// Do not edit below this line
module.exports = fibonacci;
