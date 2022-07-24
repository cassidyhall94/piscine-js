import { places } from './where-do-we-go.data.js';

let placesLinksElements = []
let compass
let lastScrollY

export const explore = () => {
    compass = document.createElement('div')
    compass.className = 'direction'
    compass.innerHTML = 'S'
    document.body.appendChild(compass)

    let sortedPlaces = sort([...places])

    for (let i = 0; i < sortedPlaces.length; i++) {
        let section = document.createElement("section")
        section.style.background = `url('./where-do-we-go_images/${sortedPlaces[i].name.split(',')[0].toLowerCase().split(' ').join('-')}.jpg')`
        section.style.backgroundSize = "100%"
        section.style.flex = 'auto'

        let link = document.createElement('a')
        link.className = "location"
        link.innerHTML = sortedPlaces[i].name + '\n' + sortedPlaces[i].coordinates
        link.style.color = sortedPlaces[i].color
        link.style.visibility = 'hidden'
        link.href = `https://www.google.com/maps/place/${encodeURIComponent(sortedPlaces[i].coordinates)}`
        link.target = '_blank'

        placesLinksElements = [...placesLinksElements, link]
        section.appendChild(link)
        document.body.appendChild(section)
    }
    placesLinksElements[0].style.visibility = 'visible'

    window.addEventListener('scroll', (e) => {
        const scrollOffset = window.scrollY
        const windowHeight = window.innerHeight

        const picOffset = Math.floor(scrollOffset / windowHeight)
        const specificPicOffset = scrollOffset % windowHeight
        const over50p = specificPicOffset > (windowHeight / 2)

        if (picOffset === 0) {
            placesLinksElements.forEach((e) => {
                e.style.visibility = 'hidden'
            })
            placesLinksElements[0].style.visibility = 'visible'
        }
        if (over50p) {
            placesLinksElements.forEach((e) => {
                e.style.visibility = 'hidden'
            })
            placesLinksElements[picOffset + 1].style.visibility = 'visible'
        }

        if (scrollOffset < lastScrollY) {
            compass.innerHTML = 'N'
        } else {
            compass.innerHTML = 'S'
        }
        lastScrollY = window.scrollY
    })
}

export function getNorth(arg) {
    let coords = arg.coordinates.split(" ")[0].replace(/[Â°'."]/g, "");
    return coords.includes("N")
        ? (coords = Number(coords.slice(0, 5)))
        : Number(coords.slice(0, 5)) * -1;
}

export function sort(arr) {
    let array = [...arr];
    array.sort((a, b) => {
        if (getNorth(a) > getNorth(b)) return -1;
        if (getNorth(a) < getNorth(b)) return 1;
        else return 0;
    });
    return array;
}