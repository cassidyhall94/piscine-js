let reg1store, reg2store

function sameAmount(str, reg1, reg2) {
    reg1store = str.matchAll(new RegExp(reg1.source, 'g'));
    reg2store = str.matchAll(new RegExp(reg2.source, 'g'));
    
    if ([...reg1store].length == [...reg2store].length) {
        return true
    } else {
        return false
    }
}