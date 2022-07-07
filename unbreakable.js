function split(str, pat) {
    let lastIndex = 0

    let result = []
    if (str == "") {
        result.push(str)
    }

    for (let index = str.length; index >= 0; index--) {
        // console.log(index)
        if (str[index] == pat) {
            lastIndex = index
        }
    }
    for (let i = 0; i < str.length; i++) {
        if ((str[i].c == pat) && (i != lastIndex)) {
            console.log("STR: %s", str[i])
            console.log("INDEX: %d", i)
            console.log("PAT: %s", pat)
            str.substr(i, str.length)
        }
        if (str[i] != pat) {
            result.push(str[i])
        }
    }
    // console.log(str[lastIndex])
    // if (str[lastIndex] == pat) {
    //     result.push(str[lastIndex])
    // }
    return result
}

function join() {


}

// console.log(split('a b c', ' '))
// console.log(split('ggg - ddd - b', ' - '))
// console.log(split('ee,ff,g,', ','))
// console.log(split('Riad', ' '))
// console.log(split('rrrr', 'rr'))
console.log(split('rrirr', 'rr'))
// console.log(split('Riad', ''))
// console.log(split('', 'Riad'))