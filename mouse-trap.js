let circle

export function createCircle() {
    document.addEventListener('click', (event) => {
        let x = document.createElement('div');
        x.classList.add('circle')
        x.style.backgroundColor = 'white'
        x.style.left = event.clientX + 'px';
        x.style.top = event.clientY + 'px';
        x.classList.add('following')
        circle = x
        document.body.appendChild(x)
    }, false);
}

export function moveCircle() {
    addEventListener('mousemove', (event) => {
        // let circle = document.getElementsByClassName('following').item(0)
        // circle.style.transform = `translateX((${event.movementX}-25)+ 'px')`
        // circle.style.transform = `translateY((${event.movementY}-25)+ 'px')`
        // console.log(circle)
        circle.style.left = (event.clientX - 25) + 'px';
        circle.style.top = (event.clientY - 25) + 'px';
    });
}

export function setBox() {
    let x = document.createElement('div');
        x.classList.add('box')
    document.body.appendChild(x)
}