import { places } from "./where-do-we-go.data.js";

let compass
let finalL = -1;

export const explore = () => {
    compass = document.createElement('div')
    compass.className = 'direction'
    compass.innerHTML = 'S'
    document.body.appendChild(compass)

    sort.forEach((x) => {
        const section = document.createElement("section")
        section.width = window.innerWidth
        section.height = window.innerHeight
        section.style.background = "url(" + './where-do-we-go_images/' + x.name.split(",")[0].split(" ").join("-").toLowerCase() + ".jpg" + ")";
        section.style.backgroundSize = "100Vw"
        document.body.appendChild(section)
    })
}

let area = document.createElement("a")
area.classList.add("location")
document.body.appendChild(area)

window.addEventListener('scroll', (e) => {
    if (window.scrollY > finalL) compass.innerHTML = 'S';
    else compass.innerHTML = 'N'; finalL = window.scrollY;
    let link = sort[Math.round(window.scrollY / window.innerHeight)];
    area.innerHTML = `${link.name}\n${link.coordinates}`;
    area.style.color = link.color;
    area.href = `https://www.google.com/maps/place/${link.coordinates}`;
    area.target = "_blank"
})

const coords = coords => {
    const coord = coords.split("'")[0].replace('°', '.')
    const positionN = coords.includes('N')
    return positionN ? coord : -coord
}

const sort = places.sort(
    (a, b) => coords(b.coordinates) - coords(a.coordinates),
)





