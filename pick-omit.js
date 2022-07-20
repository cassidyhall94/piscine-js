function pick(obj, str) {
    for (let i = 0; i < str.length; i++) {
        for (var k in obj) {
            if (k == str[i]) {
                return obj
            }
        }
    }
}

function omit(obj, str) {

}

