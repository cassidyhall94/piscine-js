function filterEntries(obj, func) {
    let result = {}
    for (let value of Object.entries(obj)) {
        if (func(value)) {
            result[value[0]] = value[1]
        }
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
    return filterEntries(obj, (x) => {
        return (nutritionDB[x[0]].carbs * x[1] / 100) < 50
    })
}

function totalCalories(obj) {
    return reduceEntries(obj, (result, x) => {
        result += nutritionDB[x[0]].calories * x[1] / 100
        return Number(result.toFixed(1))
    }, 0)
}

function mapEntries(obj, func) {
    let result = {}
    for (let v of Object.entries(obj)) {
        let entry = func(v)
        result[entry[0]] = entry[1]
    }
    return result
}

function cartTotal(obj) {
    return mapEntries(obj, (x) => {
        let r = {}
        for (let [k, val] of Object.entries(nutritionDB[x[0]])) {
            r[k] = Math.round((x[1] / 100 * val) * 1000) / 1000
        }
        return [x[0], r]
    })
}