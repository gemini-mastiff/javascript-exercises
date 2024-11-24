const palindromes = function (str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, "");
    let len = str.length;
    // for (let char of str){
    //     negIndex = str.indexOf(char)+1;
    //     if (str[char] != str[str.length-negIndex-1]){
    //         return false;
    //     }
    // }
    for (let i = 0; i < len ; i++){
        if (str[i] != str[len-i-1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
