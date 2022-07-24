const pn = ['i', 'you', 'he', 'she', 'it', 'they', 'we']

export const pronoun = (str) => {
    let result = {}
    let splitStr = []
    
    str.split(' ').forEach((s, i) => {
        s.split('\n').forEach((ss, i) => {
            splitStr = [...splitStr,ss]
        })
    })
    
    const checkIsPronoun = (word, pn) => {
        return pn.includes(word) ? true : false
    }
    
    const op = (obj, nextWord) => {
        let wordlist = []
        if (obj.word !== undefined) {
            wordlist.push(...obj.word)
        }
        if (nextWord !== undefined && !checkIsPronoun(nextWord, pn)) {
            nextWord = nextWord.replace(/,$/, '')
            wordlist.push(nextWord)
        }
        return {
            count: 'count' in obj ? obj.count+1 : 1,
            word: [...wordlist]
        }
    }
    
    splitStr.forEach((s, i, o) => {
        let t = s.toLowerCase()
        pn.forEach((p) => {
            if (t === p) {
                result[t] = result[t] === undefined ? {} : result[t]
                result[t] = op(result[t], o[i+1])
            }
        })
    })
    return result
}