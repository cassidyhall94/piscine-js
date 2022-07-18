import { colors } from './fifty-shades-of-cold.data.js';

export function generateClasses() {
    let x = document.createElement('style');
    let str = ''
    for (let i = 0; i < colors.length; i++) {
        str += '.' + colors[i] + '{ background: ' + colors[i] + ' }\n'
    }
    x.innerHTML = str
    document.getElementsByTagName('head')[0].appendChild(x);
}

export function generateColdShades() {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes('aqua') || colors[i].includes('blue') || colors[i].includes('turquoise') || colors[i].includes('green') || colors[i].includes('cyan') || colors[i].includes('navy') || colors[i].includes('purple')) {
            let x = document.createElement('div');
            x.classList.add(colors[i])
            x.textContent = colors[i]
            document.body.appendChild(x)
        }
    }
}

export function choseShade(clickedColor) {
    let allClasses = document.querySelectorAll('div')
    for (let i = 0; i < allClasses.length; i++) {
        document.getElementsByTagName('div')[i].className = clickedColor
    }
}
