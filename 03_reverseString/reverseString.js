const reverseString = function(text) {
    let reverseText = []
    let j = 0
    text = text.split(" ").reverse()

    for (let word of text) {
        reverseText[j] = ""
        for (let i = word.length - 1; i >= 0; i--) {
            reverseText[j] += word[i]
        }
        j += 1
    }

    return reverseText.join(" ").trim()
};

// Do not edit below this line
module.exports = reverseString;
