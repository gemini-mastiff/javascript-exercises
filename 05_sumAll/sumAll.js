const sumAll = function(...theArgs) {
    theArgs = theArgs.sort();
    let min = theArgs[0]
    let max = theArgs[1]
    let sum = 0;
    if (Math.sign(min) === 1 && Number.isInteger(min)
        && Math.sign(max) === 1 && Number.isInteger(max)){
        for (i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
