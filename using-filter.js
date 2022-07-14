const filterShortStateName = (objArr) => objArr.filter(x => {
    if (x.length < 7) {
        return x
    }
});

const filterStartVowel = (objArr) => objArr.filter(x => {
    if (x[0].match(vowels)) {
        return x
    }
});

const filter5Vowels = (objArr) => objArr.filter(x => {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(vowels)) {
            count++
            if (count >= 5) {
                return x
            }
        }
    }
});

const filter1DistinctVowel = (objArr) => objArr.filter(x => {
    let countA = 0
    let countE = 0
    let countI = 0
    let countO = 0
    let countU = 0
    let result = ""
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(a)) {
            countA++
        }
        if (x[i].match(e)) {
            countE++
        }
        if (x[i].match(I)) {
            countI++
        }
        if (x[i].match(o)) {
            countO++
        }
        if (x[i].match(u)) {
            countU++
        }
    }
    if (countA > 0 && !x.match(vowelsNoA)) {
        result += x
    }
    if (countE > 0 && !x.match(vowelsNoE)) {
        result += x
    }
    if (countI > 0 && !x.match(vowelsNoI)) {
        result += x
    }
    if (countO > 0 && !x.match(vowelsNoO)) {
        result += x
    }
    if (countU > 0 && !x.match(vowelsNoU)) {
        result += x
    }
    if (result.length > 0) {
        return result.trim()
    }
});

const vowels = new RegExp(/([a|e|i|o|u|A|E|I|O|U])/g);
const vowelsNoA = new RegExp(/([e|i|o|u|E|I|O|U])/g);
const vowelsNoE = new RegExp(/([a|i|o|u|A|I|O|U])/g);
const vowelsNoI = new RegExp(/([a|e|o|u|A|E|O|U])/g);
const vowelsNoO = new RegExp(/([a|e|i|u|A|E|I|U])/g);
const vowelsNoU = new RegExp(/([a|e|i|o|A|E|I|O])/g);
const a = new RegExp(/([a|A])/g);
const e = new RegExp(/([e|E])/g);
const I = new RegExp(/([I|i])/g);
const o = new RegExp(/([o|O])/g);
const u = new RegExp(/([u|U])/g);

const multiFilter = (objArr) => objArr.filter(x => {
    if (x.capital.length >= 8) {
        if (!x.name[0].match(vowels)) {
            if (x.tag.match(vowels)) {
                if (!x.region.match("South")) {
                    return x
                }
            }
        }
    }
});