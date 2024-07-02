//My dumb ass answer:
const removeFromArray = (array, ...nums) => {
    for (let i = 0; i < array.length; i++){
        if (nums.includes(array[i])){
            array.splice(i, 1);
            i--;
        } 
    }
    return array;
};

//The solution:
//const removeFromArray = (array, ...args) => array.filter(val => !args.includes(val));


// Do not edit below this line

module.exports = removeFromArray;
