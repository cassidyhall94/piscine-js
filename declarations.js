const escapeStr = String.raw`\\\`"'/`;
const arr = [4, '2'];
Object.freeze(arr);
const obj = {
    str: "Hello World",
    num: 0,
    bool:  false,
    undef: undefined,
};
Object.freeze(obj);
const nested = {
    arr: [4, obj.undef, '2'],
    obj: {
        str: "Hello World",
        num: 0,
        bool:  false,
    },
};
Object.freeze(nested);

console.log(arr)
console.log(obj)
console.log(nested)