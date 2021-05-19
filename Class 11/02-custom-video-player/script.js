const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// event listners 

video.addEventListener('click', toggleVideoStatus)

video.addEventListener('play', updatePlayIcon)

stop.addEventListener('click', stopVideo)