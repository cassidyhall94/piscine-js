
// earth 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
earth = 1
mercury = 0.2408467
venus = 0.61519726
mars = 1.8808158 
jupiter = 11.862615 
saturn = 29.447498
uranus = 84.016846
neptune = 164.79132 

function dogYears(planet, dogAge) {
    let dogYears = (dogAge/31557600) * 7
return Math.round((dogYears * 100) / 100)
}

console.log(dogYears(earth, 1000000000))