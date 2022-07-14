function fold(arr, func, acc) {
    let result = acc
    for (let i = 0; i < arr.length; i++) {
        result = func(result, arr[i])
    }
    return result
}

function foldRight(arr, func, acc) {
    let result = acc
    for (let i = arr.length - 1; i >= 0; i--) {
        result = func(result, arr[i])
    }
    return result
}

function reduce(arr, func, acc = 0) {
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        result = func(result, arr[i])
    }
    return result
}

function reduceRight(arr, func, acc) {
    let result = arr[arr.length - 1]
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i < arr.length - 1) {
            result = func(result, arr[i])
        }
    }
    return result
}