let element = document.getElementById("bar");
let width = 0;
let intervalBar;

const bg = function (color) {
    document.getElementById("bar").style.backgroundColor = color;
};

document.getElementById("play").addEventListener("click", function () {
    intervalBar = setInterval(bar, 20);
    width = 0;
    bg("violet");
});

function bar() {
    if (width == 100) {
        clearInterval(intervalBar);
    } else {
        width++;
        element.style.width = width + "%";
    }
    document.getElementById("percent").textContent = `${width}%`;

    if (width == 16) {
        bg("indigo");
    } else if (width == 30) {
        bg("blue");
    } else if (width == 46) {
        bg("green");
    } else if (width == 62) {
        bg("yellow");
    } else if (width == 78) {
        bg("orange");
    } else if (width == 90) {
        bg("red");
    }
}
