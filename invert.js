function invert(obj,fn) {
    Object.keys(obj).reduce((acc, key) => {
        const val = fn ? fn(obj[key]) : obj[key];
        acc[val] = acc[val] || [];
        acc[val].push(key);
        return acc;
    }, {});
}

// function get(key) {
//     for (var k in sourceObject) {
//         if (k == key)
//         return sourceObject[k]
//     }
// }

// function set(key, value) {
//         // console.log(k)
//         // console.log(key)
//         sourceObject[key] = value
//         // console.log(sourceObject[k])
//         // console.log(value)
//         return sourceObject[key]
// }