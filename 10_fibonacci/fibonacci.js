const fibonacci = function(num) {
    //1, 1, 2, 3, 5, 8...
    num = Number(num);
    let prevNum = 0;
    let currentNum = 1;
    let newNum;
    if (num === 0){
        return 0
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 1; i < num ; i++){
            newNum = currentNum + prevNum;
            prevNum = currentNum;
            currentNum = newNum;
        }
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
