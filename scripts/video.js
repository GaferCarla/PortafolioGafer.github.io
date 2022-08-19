// Obtained from https://www.codeply.com/p/b6nNJzlphm


var player
function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady...')
    player = new YT.Player('player', {
        videoId: 'Y04v-ErUJ1A', // YT video source
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo() // autostart
}

function onPlayerStateChange(event) {
    // do other custom stuff here by watching the YT.PlayerState
}

function loadYouTubeVideo() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

}

var myModalEl = document.getElementById('dynamicVideoModal')
myModalEl.addEventListener('show.bs.modal', function (event) {
    // dynamically create video when modal is opened
    loadYouTubeVideo()
})


// optional hooks for controls outside YT
var playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click', function (event) {
    console.log('play')
    player.playVideo()
})

var pauseBtn = document.getElementById('pauseBtn')
pauseBtn.addEventListener('click', function (event) {
    console.log('pause')
    player.pauseVideo()
})