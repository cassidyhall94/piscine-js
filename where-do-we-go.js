import { places } from './where-do-we-go.data.js';

let placesLinksElements = []
let compass
let lastScrollY

export const explore = () => {
    compass = document.createElement('div')
    compass.className = 'direction'
    compass.innerHTML = 'S'
    document.body.appendChild(compass)

    places.sort((p1, p2) => {
        return ParseDMS(p1.coordinates).Latitude < ParseDMS(p2.coordinates).Latitude
    })
    for (let i = 0; i < places.length; i++) {
        let section = document.createElement("section")
        section.style.background = "url(./images/" + places[i].name.split(',')[0].toLowerCase().split(' ').join('-') + ".jpg)"
        section.style.backgroundSize = "100%"
        section.style.flex = 'auto'

        let link = document.createElement('a')
        link.className = "location"
        link.innerHTML = places[i].name + '\n' + places[i].coordinates
        link.style.color = places[i].color
        link.style.visibility = 'hidden'
        link.href = `https://www.google.com/maps/place/${encodeURIComponent(places[i].coordinates)}`
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
        const over50p = specificPicOffset > (windowHeight/2)
        const under50p = specificPicOffset < (windowHeight/2)

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
            placesLinksElements[picOffset+1].style.visibility = 'visible'
        }

        if (scrollOffset < lastScrollY) {
            compass.innerHTML = 'N'
        } else {
            compass.innerHTML = 'S'
        }
        lastScrollY = window.scrollY
    })
}

function ParseDMS(input) {
    var parts = input.split(/[^\d\w\.]+/);
    var lat = ConvertDMSToDD(parts[0], parts[2], parts[3], parts[4]);
    var lng = ConvertDMSToDD(parts[5], parts[7], parts[8], parts[9]);

    return {
        Latitude: lat,
        Longitude: lng,
        Position: lat + ',' + lng
    }
}


function ConvertDMSToDD(degrees, minutes, seconds, direction) {
    var dd = Number(degrees) + Number(minutes) / 60 + Number(seconds) / (60 * 60);

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
}