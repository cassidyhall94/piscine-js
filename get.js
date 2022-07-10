function get(src, path) {
    var paths = path.split('.')
        , current = src
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}



// console.log(get({ key: 'value' }, 'key') === 'value')

// work with nested objects
console.log(get({ nested: { key: 'value' } }, 'nested.key'))
console.log(get({ nested: { key: 'value' } }, 'nested.key') === 'value')

// return undefined without error if the value do not exist
// console.log(get({ key: 'value' }, 'nx') === undefined)
// console.log(get({ nested: { key: 'value' } }, 'nested.nx') === undefined)
// console.log(get({ nested: { key: 'value' } }, 'nx.nx') === undefined)

// work with nested arrays too
// console.log(get({ a: [{ b: t }] }, 'a.0.b') === t)
// console.log(get({ a: [{ b: t }] }, 'a.0.b.toString') === t.toString)