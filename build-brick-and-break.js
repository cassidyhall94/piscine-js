// <div id="brick-1"></div>

export function build(bricksAmount) {
    let brick = document.createElement("brick");
    console.log(brick)
    brick.setAttribute('id', 'brick-1')
    let finalResult = setInterval(brick, 100);
    console.log(finalResult)
    return finalResult
}

export function repair(ids) {

}

export function destroy(ids) {

}