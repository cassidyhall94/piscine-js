function filter(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

function reject(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

function partition(arr, func) {
    let truthy = [];
    let falsy = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            falsy.push(arr[i])
        }
        if (func(arr[i], i, arr)) {
            truthy.push(arr[i])
        }
    }
   
    result.push(truthy)
    result.push(falsy)
    return result
}