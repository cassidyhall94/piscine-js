// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }

function get(key) {
    for (var k in sourceObject) {
        if (k == key)
        return sourceObject[k]
    }
}

function set(key, value) {
        // console.log(k)
        // console.log(key)
        sourceObject[key] = value
        // console.log(sourceObject[k])
        // console.log(value)
        return sourceObject[key]
}

// console.log(get("str"))
// console.log(set(sourceObject.str, "hello world"))