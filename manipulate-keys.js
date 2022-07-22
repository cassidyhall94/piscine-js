function filterKeys(obj, func) {
    let result = {}
    for (let k in obj) {
        if (func(k)) {
            result[k] = obj[k]
        }
    }
    return result
}

function mapKeys(obj, func) {
    let result = {}
    for (let [k] of Object.entries(obj)) {
        let newKeys = func(k)
        result[newKeys] = obj[k]
    }
    return result
}

function reduceKeys(obj, func, start = undefined) {
    let result = start
    let count = 1
    if (start === undefined) {
        count = 0
    }
    for (let keys of Object.entries(obj)) {
        if (count === 0) {
            result = keys[0]
        } else {
            result = func(result, keys[0])
        }
        count++
    }
    return result
}

