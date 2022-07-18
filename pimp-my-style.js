import { styles } from './pimp-my-style.data.js';

let stylesCounter = 0;
let removeCounter = 14;

export function pimp() {
    let x = document.getElementsByClassName("button");
    for (const y of x) {
        if (stylesCounter < 15) {
            y.classList.add(styles[stylesCounter])
        } else {
            y.classList.remove(styles[removeCounter])
        }
        if (stylesCounter === 14 && removeCounter === 14) {
            y.classList.add('unpimp')
        } else if (stylesCounter === 15 && removeCounter === 0) {
            y.classList.remove('unpimp')
        }
    }
    if (stylesCounter < 15) {
        stylesCounter++
    } else if (stylesCounter === 15 && removeCounter > -1) {
        removeCounter--
    }
}