const repeatString = (string, num) => {
    let returnString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (i = 0; i < num; i++){
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
