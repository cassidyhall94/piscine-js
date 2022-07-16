let interval = setInterval(build, 100);
let a = 0
let globalNum

export function build(num) {
    if (num != undefined && num != globalNum) {
        globalNum = num
    }
    let brick = document.createElement("div");
    brick.id = "brick-" + (a + 1)
    a++
    if (a % 3 === 2) {
        brick.setAttribute('foundation', 'true')
    }
    document.body.appendChild(brick)
    if (a == globalNum) {
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