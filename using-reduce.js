const adder = (arr, initialValue = 0) => arr.reduce((x, y) =>
    x + y, initialValue
);

const sumOrMul = (arr, initialValue = 0) => arr.reduce(function (x, y) {
    if (y % 2 === 0) {
        return x * y
    } else {
        return x + y
    }
}, initialValue);

const funcExec = (arr, initialValue) => arr.reduce(
    (x, y) => y(x),
    initialValue
)