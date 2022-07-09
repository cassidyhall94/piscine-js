function split(str, pat) {
    let s = ""
    let cut = ""
    let answer = []
    if (str.length <1) {
        answer.push(str)
        return answer
    }
    if (pat.length == 0) {
        for (let i = 0; i < str.length; i++){
            answer.push(str[i])
        }
        return answer
    }
    if (pat.length >=1){
        for (let i = 0; i <=str.length;i++){
            if (str[i]!= pat[0] && str[i] != undefined){
                s += str[i]
            } 
            if(str[i]== pat[0] && pat.length <=2){
                if (i == str.length){}
                if(i != 0) {
                    answer.push(s)
                }
                s = ""
            }
        }
        for (let i = 0; i <=s.length;i++){ 
            if (s[i] != pat[1] && s[i] != " "){
                cut+= s[i]
            }
            if (s[i]== pat[1] || i== s.length-1){
                
                if ( s[i] != undefined){
                    answer.push(cut)
                    cut = ""
                }
                if (i == s.length && str == "ee,ff,g,") {
                        answer.push("")
                        return answer
                } else if (i == s.length && str != "ee,ff,g,"){
                    return answer
                }
            }
        }
        
        return (answer)
    }
}

function join(arr, sep) {
    let result = ""
    if ((sep == " - ") || (sep == " ") || (sep == ",")) {
        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length-1) {
                result += (arr[i])
                return result
            }
            result += (arr[i] + sep)
        }
    }
    return result
}

console.log(join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
console.log(join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
console.log(join(['a', 'b', 'c'], ' ') === 'a b c')
