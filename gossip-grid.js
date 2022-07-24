import { gossips } from './gossip-grid.data.js';

export function grid() {
    let ranges = document.createElement('div')
    ranges.classList.add('ranges')
    document.body.appendChild(ranges)

    let width = document.createElement('input')
    width.classList.add('range')
    width.id = 'width'
    width.type = 'range'
    width.min = 200
    width.max = 800
    width.defaultValue = 500
    width.oninput = (e) => {
        const value = e.target.value
        Array.from(document.getElementsByClassName('gossip')).forEach((e) => {
            e.style.width = value + 'px'
        })
    }
    ranges.appendChild(width)
    
    let fontSize = document.createElement('input')
    fontSize.classList.add('range')
    fontSize.id = 'fontSize'
    fontSize.type = 'range'
    fontSize.min = 20
    fontSize.max = 40
    fontSize.defaultValue = 30
    fontSize.oninput = (e) => {
        const value = e.target.value
        Array.from(document.getElementsByClassName('gossip')).forEach((e) => {
            e.style.fontSize = value + 'px'
        })
    }
    ranges.appendChild(fontSize)
    
    let background = document.createElement('input')
    background.classList.add('range')
    background.id = 'background'
    background.type = 'range'
    background.min = 20
    background.max = 75
    background.defaultValue = 48
    background.oninput = (e) => {
        const value = e.target.value
        Array.from(document.getElementsByClassName('gossip')).forEach((e) => {
                e.style.background = `hsl(280, 50%, ${value}%)`
        })
    }
    ranges.appendChild(background)

    let formDiv = document.createElement('div')
    document.body.appendChild(formDiv)
    let form = document.createElement('form')
    // form.style.order = '1'
    // form.innerHTML = 'Got gossip to share?'
    form.className = 'gossip'

    let textInput = document.createElement('textarea')
    textInput.setAttribute('placeholder', 'Got a gossip to share?')

    let button = document.createElement('button')
    button.innerHTML = 'Share gossip!'

    form.appendChild(textInput)
    form.appendChild(button)
    formDiv.appendChild(form)

    addEventListener('submit', (event) => {
        console.log(event)
        event.preventDefault();

        let submit = document.createElement('div')
        submit.classList.add('gossip')
        submit.innerText = event.target[0].value

        const node = document.body.getElementsByClassName('gossbox')[0]
        node.parentNode.insertBefore(submit, node)
        console.log(node)
    });

    for (let i = 0; i < gossips.length; i++) {
        let gossipElement = document.createElement('div')
        gossipElement.classList.add('gossip')
        gossipElement.classList.add('gossbox')
        gossipElement.innerText = gossips[i]
        document.body.appendChild(gossipElement)
    }
}

const toHSLObject = hslStr => {
    console.log(hslStr)
    const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
    return { hue, saturation, lightness };
  };