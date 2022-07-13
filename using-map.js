const citiesOnly = (objArr) => objArr.map(x => x.city);
const upperCasingStates = (objArr) => objArr.map(x => capitalize(x));
const fahrenheitToCelsius = (arr) => arr.map(x => split(x));

const trimTemp = (objArr) => objArr.map(x => {
    if (x.temperature = x.temperature.replace(/ /g, "")) {
        return x
    }
});

const tempForecasts = (objArr) => objArr.map(x => {
    return split(x.temperature) + "elsius in " + x.city + ', ' + capitalizeFirstLetter(x.state)
});

function capitalize(s) {
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
}

function capitalizeFirstLetter(s) {
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")
}

function split(s) {
    const nums = s.split('°F');
    let result = (nums[0] - 32) * 5 / 9
    return Math.floor(result) + '°C'
}