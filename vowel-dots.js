const vowels = new RegExp(/([a|e|i|o|u|A|E|I|O|U])/g);

function vowelDots(str) {
    let result = ""
    if (str.length < 1) {
        return str
    }

    for (let i = 0; i < str.length; i++) {
        if (str.match(vowels)) {
            result = str.replace(vowels, "$&.");
        }

    }
    if (!str.match(vowels)) {
        return str
    }

    return result
}