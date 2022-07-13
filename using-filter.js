const filterShortStateName = (objArr) => objArr.filter(x => {
    if (x.length < 7) {
        return x
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
const i = new RegExp(/([i|I])/g);
const o = new RegExp(/([o|O])/g);
const u = new RegExp(/([u|U])/g);

const filterStartVowel = (objArr) => objArr.filter(x => {
    if (x[0].match(vowels)) {
        return x
    }
});

const filter5Vowels = (objArr) => objArr.filter(x => {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(vowels)) {
            return x
            if (count >= 5) {
                return x
            }
        }
    }
});

const filter1DistinctVowel = (objArr) => objArr.filter(x => {
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(a) && !x[i].match(vowelsNoA)) {
            return x
        } else if (x[i].match(e) && !x[i].match(vowelsNoE)) {
            return x
        } else if (x[i].match(i) && !x[i].match(vowelsNoI)) {
            return x
        } else if (x[i].match(o) && !x[i].match(vowelsNoO)) {
            return x
        } else if (x[i].match(u) && !x[i].match(vowelsNoU)) {
            return x
        }
    }
});