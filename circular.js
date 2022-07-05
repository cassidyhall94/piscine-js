// let circular = {};

// circular = {
//     circular: circular,
// };

// console.log(circular.circular.circular)

var circular;

circular = function () {
    circular(circular);
}