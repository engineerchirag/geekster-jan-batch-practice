const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text= 'We love Programming!'

let id = 1
let speed = 300 / speedEl.value


writeText()

function writeText(){
    textEl.innerText = text.slice(0, id)

    id++

    if(id > text.length) {
        id = 1
    }

    setTimeout(writeText, speed)


}

speed.addEventListener('input', e => speed)

