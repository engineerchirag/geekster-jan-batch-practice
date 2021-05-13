function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let section = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        section = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = `${h}:${m}:${s} ${section}`;
    document.getElementById("myClockDisplay").textContent = time;

    setInterval(showTime, 1000);
}

showTime();
