function replica(item, ...copyItem) {
    copyItem.map((res) => {
        Object.entries(res).map(([key, val]) => {
            if (deepType(val) === 'Object' && deepType(item[key]) === 'Object') {
                item[key] = replica(item[key], val)
            } else {
                item[key] = val
            }
        })
    })
    return item
}

function deepType(item) {
    return toString.call(item).slice(8, -1)
}