function filterValues(obj, func) {
    let result = {}
    for (let k in obj) {
        if (func(obj[k])) {
            result[k] = obj[k]
        }
    }
    return result
}

function mapValues(obj, func) {
    let result = {}
    for (let k in obj) {
        result[k] = func(obj[k])
    }
    return result
}

function reduceValues(obj, func, opt = 0) {
    let values = Object.values(obj)
    let result = values[0]
    for (let i = 1; i < values.length; i++) {
        result = func(result, values[i], opt)
    }
    if (opt === 0) {
        return result
    } else {
        return result + 3
    }
}