function slice(item, start, end = item.length) {
    let str = "";
    let arr = [];
    if (start < 0) {
        start = item.length + start
    }
    if (end < 0) {
        end = item.length + end
    }
    if (typeof item == "string") {
        for (let index = start; index < end; index++) {
            str = str + item[index]
        }
    }
    if (Array.isArray(item) == true) {
        for (let index = start; index < end; index++) {
            arr.push(item[index])
        }
        return arr 
    }
    return str
}