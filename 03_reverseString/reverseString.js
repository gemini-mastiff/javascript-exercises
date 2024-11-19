const reverseString = function(string) {
    let text = '';
    let length = string.length
    for (i = 0; i <= length ; i++){
        letter = string.charAt(length-i);
        text += letter;
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
