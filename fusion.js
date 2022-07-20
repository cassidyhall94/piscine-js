function fusion(...objs) {
    let result = {}
    let arr = []

    for (let k in objs) {
        arr.push(objs[k])
        // console.log(obj1[k], obj2[k])
        // console.log(typeof obj1[k])
        // if (typeof obj1 === 'array' && typeof obj2 === 'array') {
        //     return obj1.push(obj2)
        // }
        // if (typeof obj1 === 'string' && typeof obj2 === 'string') {
        //     return obj1 + ' ' + obj2
        // }
        // if (typeof obj1[k] === 'number' && typeof obj2[k] === 'number') {
        //     const total = obj1[k] + obj2[k]
        //     result[k] = total
        // }

    }
    console.log(flattenObj(arr))
    return result
}

const flattenObj = (obj, parent, res = {}) => {
    for (const key of Object.keys(obj)) {
        const propName = parent ? parent + '.' + key : key;
        if (typeof obj[key] === 'object') {
            flattenObj(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}