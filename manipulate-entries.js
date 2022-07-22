function filterEntries(obj, func) {
    let result = {}
    for (let value of Object.entries(obj)) {
        if (func(value)) {
            result[value[0]] = value[1]
        }
    }
    return result
}

function mapEntries(obj, func) {
    let result = {}
    for (let v of Object.entries(obj)) {
        let entry = func(v)
        result[entry[0]] = entry[1]
    }
    return result
}

function reduceEntries(obj, func, start) {
    let result = start
    for (let v of Object.entries(obj)) {
        result = func(result, v)
    }
    return result
}

function lowCarbs(obj) {
    let result = {}
    
    for (let v of Object.entries(obj)) {
        console.log(v)
        let func = v < 50
        if (filterEntries(obj, func)) {
            result = obj[v]
            console.log(result)
        }
    }
    return result
}

function totalCalories(obj) {

}

function cartTotal(obj) {

}
