const escapeStr = String.raw`\\\`"'/`;
const arr = Object.freeze([4, '2']);
const obj = Object.freeze({
    str: "Hello World",
    num: 0,
    bool:  false,
    undef: undefined,
});
const nested = Object.freeze({
    arr: [4, obj.undef, '2'],
    obj: {
        str: "Hello World",
        num: 0,
        bool:  false,
    },
});

console.log(escapeStr)
console.log(arr)
console.log(obj)
console.log(nested)