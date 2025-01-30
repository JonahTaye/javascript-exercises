const removeFromArray = function(originalArray, ...extraItems) {
    return originalArray.filter((item) => !(extraItems.includes(item)))
};

console.log(removeFromArray([1,3,3,4, 5, 6],3, 5))
// Do not edit below this line
module.exports = removeFromArray;
