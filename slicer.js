function slice(arr, start, end = arr.length) {
    let copy = arr
    if (end != null) {
        for (let index = start + 1; index < end; index++) {
            // console.log(index)
            if (index == start + 1) {
                copy = copy[start]
                // console.log(copy)
            }
            copy = copy + arr[index]
            // console.log(arr[index])
            // console.log(copy)
        }
    }
    if (end == null) {
        for (let index = start; index >= 0; index--) {
            console.log(index)
                copy = copy[start]
                console.log(copy)
            copy = copy + arr[index]
            // console.log(arr[index])
            // console.log(copy)
        }
    }
    return copy
}

console.log(slice('abcdef', -2))