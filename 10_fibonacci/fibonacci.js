const fibonacci = num => {
    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    const array = Array.from({ length: num }, (_, i) => i < 2 ? 1 : null);

    for (let i = 2; i < num; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    return array.pop();
};

// Do not edit below this line
module.exports = fibonacci;
