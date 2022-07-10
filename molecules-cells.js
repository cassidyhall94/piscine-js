function RNA(str) {
    let result = ""
    if (str.length < 1) {
        return ""
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == "G") {
            result += "C"
        } else if (str[i] == "C") {
            result += "G"
        } else if (str[i] == "T") {
            result += "A"
        } else if (str[i] == "A") {
            result += "U"
        }
    }
    return result
}

function DNA(str) {
    let result = ""
    if (str.length < 1) {
        return ""
    }
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == "C") {
            result += "G"
        } else if (str[i] == "G") {
            result += "C"
        } else if (str[i] == "A") {
            result += "T"
        } else if (str[i] == "U") {
            result += "A"
        }
    }
    return result
}

// DNA | RNA
//  G  -  C
//  C  -  G
//  T  -  A
//  A  -  U