import { places } from './where-do-we-go.data.js';

let placesLinksElements = []
let shifter = 0

export const explore = () => {
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

        placesLinksElements = [...placesLinksElements, link]
        section.appendChild(link)
        document.body.appendChild(section)
    }
    placesLinksElements[0].style.visibility = 'visible'

    window.addEventListener('scroll', (e) => {
        var scrollOffset = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        const windowHeight = window.innerHeight
        console.log(scrollOffset, shifter, windowHeight, (windowHeight / 2), ((shifter * windowHeight) - (windowHeight / 2)))
        if (((shifter * windowHeight) - (windowHeight / 2)) > 0) {
            if (scrollOffset > ((shifter * windowHeight) - (windowHeight / 2))) {
                placesLinksElements.forEach((e) => {
                    e.style.visibility = 'hidden'
                })
                shifter++
                placesLinksElements[shifter].style.visibility = 'visible'
            }
        }
        // get window height
        // record scroll amount
        // once scroll amount == 50% screen height then change to the next bit of text
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