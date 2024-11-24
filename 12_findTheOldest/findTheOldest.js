const findTheOldest = function(people) {
    const oldestSorted = people
                    .sort((a, b) => (a.yearOfDeath-a.yearOfBirth) - (b.yearOfDeath-b.yearOfBirth))
                    .reverse();
    const oldest = oldestSorted[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
