function fusion(obj1, obj2) {
    let longestObj = Object.keys(obj1).length > Object.keys(obj2).length ? obj1 : obj2
    let result = {}
    let total = 0
    let str = ''
    for (let k in longestObj)
        if (typeof obj1[k] === typeof obj2[k]) {
            switch (typeof obj1[k] && typeof obj2[k]) {
                case 'number':
                    total = obj1[k] + obj2[k]
                    result[k] = total;
                    break;
                case 'string':
                    str = obj1[k] + ' ' + obj2[k]
                    result[k] = str;
                    break;
                case 'object':
                    if (typeof obj1[k].length === 'undefined') {
                        result[k] = fusion(obj1[k], obj2[k])
                        break;
                    } else {
                        result[k] = obj1[k].concat(obj2[k])
                        break;
                    }
            }
        } else {
            if (typeof obj2[k] == "undefined") {
                result[k] = obj1[k]
            }
            else {
                result[k] = obj2[k]
            }
        }
    return result
}