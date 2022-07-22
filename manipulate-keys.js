function filterKeys(obj, func) {
    // console.log('FILTER OBJ:', obj)
    let result = {}
    for (let k in obj) {
        if (func(k)) {
            result[k] = obj[k]
        }
    }
    // console.log('FILTER RESULT', result)
    return result
}

function mapKeys(obj, func) {
    // console.log('OBJ:', obj)
    for (let k in obj) {
        let keys = func(k)
        // console.log('KEYS:', keys)
        delete Object.assign(obj, { [keys]: obj[k] })[k];
    }
    // console.log('RESULT', obj)
    return obj
}

function reduceKeys(obj, func) {
    let keys = Object.keys(obj)
    let result = func(obj, keys)
    return result
}

// const cart = {
//     vinegar: 80,
//     sugar: 100,
//     oil: 50,
//     onion: 200,
//     garlic: 22,
//     paprika: 4,
// }


// console.log(mapKeys(
//     filterKeys(cart, (k) => k === 'onion'),
//     (k) => (k = 'orange'),
// ))

// console.log(reduceKeys(cart, (acc, cr) => acc.concat(', ', cr)))