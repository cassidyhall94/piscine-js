function triangle(str, n) {
    var line = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            line += str;
        }
        if (i < n) {
        line += "\n";
        }
    }
    return line;
}