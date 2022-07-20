function pick(obj, str) {
    let result = {}
    let arr = []
    if (typeof str === 'string') {
        arr.push(str)
    } else {
        arr = str
    }
    for (let i = 0; i < arr.length; i++) {
        for (var k in obj) {
            if (k === arr[i]) {
                result[k] = obj[k]
            }
        }
    }
    return result
}

function omit(obj, str) {
    let result = {}
    let arr = []
    if (typeof str === 'string') {
        arr.push(str)
    } else {
        arr = str
    }

    for (var k in obj) {
        if (!arr.includes(k) && Object.hasOwn(obj, k)) {
            result[k] = obj[k]
        }
    }
    return result
}

