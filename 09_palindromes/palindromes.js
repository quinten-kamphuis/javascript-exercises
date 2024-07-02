const palindromes = input => input.match(/([a-z0-9])+/gi).join('').toLowerCase() === input.match(/([a-z0-9])+/gi).join('').toLowerCase().split("").reverse().join("");

// Do not edit below this line
module.exports = palindromes;
