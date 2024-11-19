const repeatString = function(string, num) {
    let text = '';
    if (num < 0){
        return "ERROR";
    }
    while (num > 0){
        text += string;
        num--;
    }
    return text;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);


// Do not edit below this line
module.exports = repeatString;
