function defaultCurry(obj) {
    return function (obj2) {
        return Object.assign({}, obj, obj2)
    }
}

function mapCurry(func) {
    return function (obj) {
        let t = {};
        Object.entries(obj).forEach((k) => {
            const f = func([k[0], k[1]])
            let o = {}
            o[f[0]] = f[1]
            Object.assign(t, o)
        })
        return t
    }
}

function reduceCurry(func) {
    return function (obj, start) {
        let result = start;
        for (let v of Object.entries(obj)) {
            result = func(result, v, obj)
        }
        return result
    }
}

function filterCurry(func) {
    return function (obj) {
        let result = {}
        for (let value of Object.entries(obj)) {
            if (func(value)) {
                result[value[0]] = value[1]
            }
        }
        return result
    }
}

const force = filterCurry(([k, v]) => v.isForceUser)

const reduceScore = (personnel, start) => reduceCurry((result, [k, v]) => result + v.shootingScore + v.pilotingScore)(force(personnel), start)

const filterForce = (personnel) => filterCurry(([k, v]) => v.shootingScore >= 80)(force(personnel))

const mapAverage = (personnel) => mapCurry(([k, v]) => {
    let average = (v.shootingScore + v.pilotingScore) / 2
    personnel[k]['averageScore'] = average
    return [k, v]
})(personnel)

