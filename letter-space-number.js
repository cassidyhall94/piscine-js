function letterSpaceNumber(str) {
    let reg = /([a-z]\s\d)(?=[^a-zA-Z0-9]|$)/g
    let result = str.match(reg)
    if (result == null) {
        return []
    }
    return result
}