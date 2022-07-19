export function pick() {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', document.body.clientWidth)
    svg.setAttribute('height', document.body.clientHeight)
    svg.classList.add('svg')
    let svgX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    svgX.setAttribute('id', 'axisX')
    svgX.classList.add('line')
    svg.appendChild(svgX)
    let svgY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    svgY.setAttribute('id', 'axisY')
    svgY.classList.add('line')
    svg.appendChild(svgY)

    let hslElement = document.createElement('div');
    hslElement.style.position = 'center'
    hslElement.classList.add('hsl')

    let hueElement = document.createElement('div');
    hueElement.style.position = 'absolute'
    hueElement.classList.add('hue')

    let luminosityElement = document.createElement('div');
    luminosityElement.style.position = 'absolute'
    luminosityElement.classList.add('luminosity')

    addEventListener('mousemove', (event) => {
        let xHueInPercent = parseInt(event.pageX / Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 100);
        let yLuminosityInPercent = parseInt(event.pageY / window.innerHeight * 100);
        let xHue = Math.floor(xHueInPercent * 3.6)

        svgX.setAttribute('x1', event.pageX)
        svgX.setAttribute('x2', event.pageX)
        svgY.setAttribute('y1', event.pageY)
        svgY.setAttribute('y2', event.pageY)

        luminosityElement.innerHTML = `${yLuminosityInPercent}<br>LUMINOSITY`
        hueElement.innerHTML = `${xHue}<br>HUE`
        hslElement.innerHTML = 'hsl(' + xHue + ', 50%, ' + yLuminosityInPercent + '%)'
        document.body.style.background = 'hsl(' + xHue + ', 50%, ' + yLuminosityInPercent + '%)'
    });
    addEventListener('click', () => {
        const cb = navigator.clipboard;
        cb.writeText(hslElement.innerHTML).then(console.log(cb))
    });
    document.body.appendChild(svg)
    document.body.appendChild(hslElement)
    document.body.appendChild(hueElement)
    document.body.appendChild(luminosityElement)
}