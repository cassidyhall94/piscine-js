function deepType(obj) {
    return toString.call(obj).slice(8, -1)
}

function deepCopy(obj) {
    let result = {}
    if (deepType(obj) === 'Object') {
        Object.keys(obj).forEach((key) => result[key] = deepCopy(obj[key]))
    } else if (deepType(obj) === 'Array') {
        result = []
        obj.forEach((v, k) => result[k] = deepCopy(obj[k]))
    } else {
        result = obj
    }
    return result
}