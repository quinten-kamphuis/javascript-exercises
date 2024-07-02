const sumAll = (min, max) => {
    const range = [min, max];
    if (typeof min !== 'number' || typeof max !== 'number'){return 'ERROR';}
    if (min < 0 || max < 0) {return 'ERROR';}
    if (min > max){range.push(range.shift());}
    
    let sum = 0;
    for (let i = range[0]; i <= range[1]; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
