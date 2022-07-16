let interval = setInterval(build, 100);
let a = 1
let globalNum

export function build(num) {
    if (num != undefined && num != globalNum) {
        globalNum = num
    }
    let brick = document.createElement("div");
    brick.id = "brick-" + a
    a++
    if (a % 2 !== 0) {
        brick.setAttribute('foundation', 'true')
    }
    document.body.appendChild(brick)
    if (a == globalNum + 1) {
        clearInterval(interval)
        return
    }
    // console.log(brick)
}


// <div id="brick-1" foundation="true"></div>
export function repair(ids) {
    let x = document.querySelectorAll(ids)
    // let y = document.querySelectorAll("foundation")
    let z = document.hasAttribute('foundation')
    if (z) {
        z.setAttribute('repaired', 'in progress')
    } else {
        z.setAttribute('repaired', 'true')
    }
    document.body.appendChild(x)
    console.log(x)
    return x
}

export function destroy(ids) {

}

// function split(s) {
//     for (let i = 0; i < s.length; i++) {
//         let num = parseInt(s[i].split('-'));
//         if (typeof (num) == 'number') {
//             return num
//         }
//     }
// }
