const escapeStr = String.raw`\\\`"'/`;
const arr = [4, '2'];
const obj = {
    str: "Hello World",
    num: 0,
    bool:  false,
    undef: undefined,
};
const nested = {
    obj: {
        str: "Hello World",
        num: 0,
        bool:  false,
    },
    arr: ['2', 4, obj.undef],
};

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
console.log(arr)
console.log(obj)
console.log(nested)