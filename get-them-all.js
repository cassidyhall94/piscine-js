export function getArchitects() {
    let x = document.querySelectorAll("a");
    let y = document.querySelectorAll("span");
    return [x, y]
}

export function getClassical() {
    let x = document.querySelectorAll('.classical');
    let y = document.querySelectorAll('.modern, .baroque');
    return [x, y]
}

export function getActive() {
    let x = document.querySelectorAll('.classical, .true');
    let y = document.querySelectorAll('.classical, .false');
    console.log([x, y])
    return [x, y]
}

export function getBonannoPisano() {
    let x = document.getElementById("BonannoPisano");
    let y = document.querySelectorAll("true, .classical");
    console.log([x, y])
    return [x, y]
}