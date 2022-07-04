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

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)