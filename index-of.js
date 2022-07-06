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

function lastIndexOf(arr, value, opt) {
    let array = []
    if (opt == null) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] == value) {
                array = index
            }
        }
        console.log(array)
        return array
    } else if (opt != null) {
        for (let index = opt; index < arr.length; index++) {
            if (arr[index] == value) {
                array = index
            }
        }
        console.log(array)
        return array
    }
    console.log(array)
    return array
}

function includes(arr, value) {

}