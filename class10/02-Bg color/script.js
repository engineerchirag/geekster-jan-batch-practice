var Blue = document.getElementById("blue");
var Brown = document.getElementById("brown");
var Random = document.getElementById("random");

function color(e) {
    var element = document.getElementById(e.target.id);
    if (element == blue) {
        document.getElementById("container").style.backgroundColor = "lightseagreen";
        Blue.style.backgroundColor = "orange";
        Brown.style.backgroundColor = "brown";
        Random.style.backgroundColor = "rgb(170, 185, 85)"
    }
    else if (element == Brown) {
        document.getElementById("container").style.backgroundColor = "brown";
        Blue.style.backgroundColor = "lightseagreen";
        Brown.style.backgroundColor = "orange";
        Random.style.backgroundColor = "rgb(170, 185, 85)"
    }
    else if (element == Random) {
        var _red = Math.floor(Math.random() * 255);
        var _green = Math.floor(Math.random() * 255);
        var _blue = Math.floor(Math.random() * 255);

        document.getElementById("container").style.backgroundColor = "rgb(" + _red + "," + _green + "," + _blue + ")";
        Blue.style.backgroundColor = "lightseagreen";
        Brown.style.backgroundColor = "brown";
        Random.style.backgroundColor = "orange";
        //console.log("rgb("+_red+","+_green+","+_blue+")");
    }
}