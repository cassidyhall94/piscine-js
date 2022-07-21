function fusion(...objs) {
    let keys = Object.keys(objs)
    let result = {}
    let total = 0
    objs.forEach((obj) => {
        Object.keys(obj).forEach((k) => {
            switch (typeof obj[k]) {
                case 'number':
                    if (obj[k] === obj[keys]) {
                        console.log('obj[k]:', obj[k])
                        total += obj[k]
                        console.log('total:', total)
                        result[k] = total
                        console.log('result[k]:', result[k])
                    }
            }
        })
    })
    console.log(result)
    return result
}

console.log(fusion({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }), { a: 35, b: 4, c: 43 })