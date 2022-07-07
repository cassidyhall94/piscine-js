function reverse(item) {
    let arr = []
    let str = ""
    if (Array.isArray(item) == true) {
        for (let index = item.length - 1; index >= 0; index--) {
            if (Array.isArray(item) == true) {
                arr.push(item[index])
            }
        }
        return arr
    }
    if (typeof item == "string") {
        for (let index = item.length - 1; index >= 0; index--) {
            str += item[index]
        }
        return str
    }
}