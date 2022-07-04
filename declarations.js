const escapeStr = String.raw`\\\`"'/`;
const arr = [4, '2'];
const obj = {
    str: "Hello World",
    num: 0,
    bool:  false,
    undef: undefined,
};
const nested = {
    arr: [4, obj.undef, '2'],
    obj: {
        str: "Hello World",
        num: 0,
        bool:  false,
    },
};

var o = Object.freeze(nested)

nested.arr = [5, obj.undef, '2']
console.log(o)
console.log(escapeStr)
console.log(arr)
console.log(obj)
console.log(nested)