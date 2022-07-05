function words(str) {
    let subStr = []
    subStr = str.split(" ");
    return subStr
}

function sentence(arr) {
    let subArr = {}
    subArr = arr.join(' ');
    return subArr
}

function yell(str) {
    let result = str.toUpperCase()
    return result
}

function whisper(str) {
    let result = "*" + str.toLowerCase() + "*"
    return result
}

function capitalize(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return result
}