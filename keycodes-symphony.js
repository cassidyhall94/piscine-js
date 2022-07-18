const lowerCase = /^([a-z])$/

export function compose() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        if (lowerCase.test(name)) {
            let x = document.createElement('div');
            x.classList.add('note')
            x.innerHTML = name
            x.style.backgroundColor = name.toColor()
            document.body.appendChild(x)
        } else if (name === "Backspace") {
            document.body.lastElementChild.remove()
        } else if (name === "Escape") {
            [...document.body.children].filter((e) => {
                return e.tagName === 'DIV'
            }).forEach((e) => {
                document.body.removeChild(e)
            })
        }
    }, false);
}

String.prototype.toColor = function () {
    var colors = ['#b3daeb', '#9513f5', '#a52659', '#c3810a', '#d402fd', '#8ad2b0', '#d53c99', '#089ac9', '#7ec034', '#25b04f', '#166317', '#9c3127', '#cccc34', '#b74995', '#ff20c1', '#e94162', '#808f6c', '#bf937e', '#e5523e', '#3be562', '#c3e067', '#3decc6', '#c99ae5', '#eee15c', '#f1398a', '#6a3704', '#2ca14e', '#142b2f', '#e03501', '#6d8940', '#06f6e8', '#783b41']

    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    hash = ((hash % colors.length) + colors.length) % colors.length;
    return colors[hash];
}