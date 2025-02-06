const palindromes = function (string) {
    let specialChar = [" ", ".", ",","!"]
    let isPalindrome = false
    
    const splitString = string.toLowerCase().split("")
    const filteredString = splitString.filter(char => !specialChar.includes(char))
    const reversedString = filteredString.toReversed()
    
    for (let i = 0; i <= filteredString.length; i++) {
        if (filteredString[i] === reversedString[i]) isPalindrome = true
        else return false
    }
    
    return isPalindrome
};
console.log(palindromes('A car, a man, a maraca.'))
// Do not edit below this line
module.exports = palindromes;
