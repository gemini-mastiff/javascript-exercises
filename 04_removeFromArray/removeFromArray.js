const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    for (let item of array){
        if (theArgs.includes(item)){
            continue;
        }
        newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
