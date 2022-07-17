import { styles } from './pimp-my-style.data.js';

export function pimp() {
    let x = document.getElementsByClassName("button");
    console.log('x:', x)
    let y = x.classList.add(styles)
    console.log('y:', y)
    // for (let i = 0; i < styles.length; i++) {
    //     x.add(styles[i])
    // }
}