function cutFirst(str) {
    let result = ""
    if (str.length == 1) {
        result = ""
    } else if (str.length > 1) {
        for (let index = 2; index < str.length; index++) {
            result = result + str[index]
        }
    }
    return result
}

function cutLast(str) {
    let result = ""
    if (str.length == 1) {
        result = ""
    } else if (str.length > 1) {
        for (let index = 0; index < str.length - 2; index++) {
            result = result + str[index]
        }
    }
    return result
}

function cutFirstLast(str) {
    let result = ""
    if (str.length == 1) {
        result = ""
    } else if (str.length > 1) {
        for (let index = 2; index < str.length - 2; index++) {
            result = result + str[index]
        }
    }
    return result
}

function keepFirst(str) {
    let result = ""
    if (str.length == 1) {
        result = str[0]
    } else if (str.length > 1) {
        for (let index = 0; index < 2; index++) {
            result = result + str[index]
        }
    }
    return result
}

function keepLast(str) {
    let result = ""
    if (str.length == 1) {
        result = str[str.length - 1]
    } else if (str.length > 1) {
        for (let index = str.length - 2; index < str.length; index++) {
            result = result + str[index]
        }
    }
    return result
}




console.log(keepFirstLast('afd'))


function keepFirstLast(str) {
    let result = ""
    if (str.length <= 3) {
        result = str
    }
    if (str.length > 3) {
        //first two characters
        for (let index = 0; index < 2; index++) {
            result = result + str[index]
        }
        //last two characters
        for (let index = str.length - 2; index < str.length; index++) {
            result = result + str[index]
        }
    }
    return result
}