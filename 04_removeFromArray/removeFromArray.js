const removeFromArray = function(originalArray, ...extraItems) {
    let newArray = originalArray.filter(removeItem)

    function removeItem(item) {
        if (!(extraItems.includes(item))) {
            return item
        }
    }

    return newArray
};

removeFromArray([1,3,3,4, 5, 6],3, 4, 5)
// Do not edit below this line
module.exports = removeFromArray;
