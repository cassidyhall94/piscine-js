let circular = {};

circular.circular = {
    circular: circular,
};

console.log(circular.circular.circular.circular)