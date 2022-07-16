export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.id = i + 1
        const ran = randomLetter()
        letter.append(ran)
        // if i is less than 41
        if (i < 40) {
            let weight = letter.style.fontWeight = 300
            // letter.style.fontSize = 11 + i + 'px'
            // console.log(letter, i, weight)
        }
        // if i is greater than 40, and less than 80
        if (i < 80 && i > 39) {
            let weight = letter.style.fontWeight = 400
            // let font = letter.style.fontSize = 11 + i + 'px'
            // console.log(letter, i, weight)
        }
        // if i is greater than 80, and less than 120
        if (i < 120 && i > 79) {
            let weight = letter.style.fontWeight = 600
            // let font = letter.style.fontSize = 11 + i + 'px'
            // console.log(letter, i, weight)
        }
        if (i < 121 && i > -1) {
            let font = letter.style.fontSize = 11 + i + 'px'
            // console.log(letter, font)
        }
        document.body.appendChild(letter)
        console.log(letter, i)
    }
}

function randomLetter() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomNum = Math.floor(Math.random() * 26);
    var randomLetter = letters.charAt(randomNum);
    return randomLetter;
};