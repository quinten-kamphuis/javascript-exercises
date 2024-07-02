const findTheOldest = (arr) => {
    const oldest = arr.sort((a, b) => {
        const lastGuy = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth
        const nextGuy = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
