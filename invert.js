function invert(obj) {
    var returnObj = {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            returnObj[obj[key]] = key;
        }
    }
    return returnObj;
}