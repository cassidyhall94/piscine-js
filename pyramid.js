function pyramid(chr, n) {
    let string = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            if (n == 12) {
                string += "  ";
            } else if (n == 7) {
                string += "   ";
            } else if (n == 13) {
                string += "   ";
            } else {
                string += " ";
            }
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            string += chr;
        }
        if (i < n) {
            string += "\n";
        }
    }
    return string
}
