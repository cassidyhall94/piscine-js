const vowels = new RegExp(/([a|e|i|o|u|A|E|I|O|U])/g);

function vowelDots(str) {
    let result = ""
    if (str.length < 1) {
        return str
    }
    return str.replaceAll(vowels, "$&.");
}