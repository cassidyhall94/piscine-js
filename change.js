function get(key) {
    for (var k in sourceObject) {
        if (k == key)
            return sourceObject[k]
    }
}

function set(key, value) {
    sourceObject[key] = value
    return sourceObject[key]
}