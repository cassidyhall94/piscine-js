let interval = setInterval(build, 100);
let a = 1
let globalNum
let digits = new RegExp(/(2|4|6|8|0)+$/g);

export function build(num) {
    if (num != undefined && num != globalNum) {
        globalNum = num
    }
    let brick = document.createElement("div");
    brick.id = "brick-" + a
    a++
    let reg = brick.id.match(digits)
    if (reg) {
        brick.setAttribute('foundation', 'true')
    }
    document.body.appendChild(brick)
    if (a == globalNum + 1) {
        clearInterval(interval)
        return
    }
}

export const repair = async (...ids) => {
    ids.forEach(id => {
        const e = document.getElementById(id)
        const z = e.hasAttribute("foundation")
        if (z) {
            e.setAttribute('repaired', 'in progress')
        } else {
            e.setAttribute('repaired', 'true')
        }
    })
}

export const destroy = async () => {
    const e = document.querySelector('body > div:last-of-type').remove();
}