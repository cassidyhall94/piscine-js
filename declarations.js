const escapeStr = String.raw`\\\`"'/`;
const arr = [4, '2'];
const obj = {
    str: "Hello World",
    num: 0,
    bool:  false,
    undef: undefined,
};
const nested = {
    arr: Object.freeze([4, obj.undef, '2']),
    obj: Object.freeze({
        str: "Hello World",
        num: 0,
        bool:  false,
    }),
};


console.log(escapeStr)
console.log(arr)
console.log(obj)
console.log(nested)