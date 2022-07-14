function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        (func(arr[i], i, arr))
    }

    return result
}

function some(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        (func(arr[i], i, arr))
    }

    return result
}

function none(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        (func(arr[i], i, arr))
    }

    return result
}