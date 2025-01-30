const repeatString = function(string, times) {
    let append = string;

    if (!times) return string = ''
    else if (times < 0) return 'ERROR'

    for (let i = 1; i < times; i++) {
        string += append
    }

    return string
};

// Do not edit below this line
module.exports = repeatString;
