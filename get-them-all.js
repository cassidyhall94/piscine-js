export const getArchitects = () => {
    const y = document.querySelectorAll("a");
    const x = document.querySelectorAll("span");
    return [x, y]
}

export const getClassical = () => {
    const y = document.querySelectorAll("classical");
    const x = document.querySelectorAll("baroque modern");
    return [x, y]
}

export const getActive = () => {
    const y = document.querySelectorAll("true");
    const x = document.querySelectorAll("false");
    return [x, y]
}

export const getBonannoPisano = () => {
    const y = document.getElementById("BonannoPisano");
    const x = document.querySelectorAll("classical true");
    console.log([y,x])
    return [y, x]
    

}