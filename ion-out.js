function ionOut(str) {
    const reg = new RegExp(/([a-z]+)tion/g)
    let result = []
    let match;
    while ((match = reg.exec(str)) !== null) {
        result.push(match[1] + "t")
    }
    return result
}