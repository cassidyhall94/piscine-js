console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

function indexOf(arr, value, opt) {
    if (opt == null) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] == value) {
                // console.log(val)
                return index;
            }
        }
    } else if (opt != null) {
        for (let index = opt; index < arr.length; index++) {
            if (arr[index] == value) {
                // console.log(val)
                return index;
            }
        }
    }
    return -1;
}

function lastIndexOf(arr, value, opt = arr.length) {
    for (let index = opt; index >= 0; index--) {
        // console.log(index)
        if (arr[index] == value) {
            return index
        }
    }
    return -1
}

function includes(arr, value) {
    
    for (let index = 0; index <= ((arr.length)-1); index++) {
        if (arr[index] == value) {
            return true
        }
    }
    return false
}