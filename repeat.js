function repeat(str, num) {
    let count = 0
    let result = ""
    while (count < num) {
        count = count + 1
        result = result + str        
    }
    return result
}