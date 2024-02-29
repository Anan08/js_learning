let song = document.getElementById("song");
let progress = document.getElementById("progress");
let thumbnail = document.getElementById("songThumbnail");
let controlIcon = document.getElementById("controlIcon");
let songList = [{
    'artist' : "Minutemen",
    "title" : "Corona",
    "thumbnail" : "Corona"
}, {
    'artist' : "Bump of Chicken",
    "title" : "sleepwalking_orchestra",
    "thumbnail" : "sleepwalking_orchestra"
}, {
    'artist' : "WANIMA",
    "title" : "ともに",
    "thumbnail" : "ともに"
    
}];
let songIndex = 0;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;

}


function playPause() {
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
} 

if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove("fa-play");
    controlIcon.classList.add("fa-pause");
}

function nextSong() {
    
    let title = document.querySelector('.musicPlayer h1');
    let artist = document.querySelector('.musicPlayer p');
    
    if (songIndex + 1 > songList.length-1){
        songIndex = 0;

    } else {
        songIndex += 1;
    }


    title.innerHTML = songList[songIndex]["title"];
    artist.innerHTML = songList[songIndex]["artist"]; 

    thumbnail.src = "media/thumbnail/" + songList[songIndex]["thumbnail"] + ".jpg";    
    song.src = "media/song/" +  songList[songIndex]["title"] + ".mp3";
}

function prevSong() {

    let title = document.querySelectorAll('.musicPlayer h1');
    let artist = document.querySelectorAll('.musicPlayer p');
    
    if (songIndex-1 < 0) {
        songIndex = songList.length-1;
    } else {
        songIndex -= 1;
    }
    title.innerHTML = songList[songIndex]["title"];
    artist.innerHTML = songList[songIndex]["artist"];


    thumbnail.src = "media/thumbnail/" + songList[songIndex]["thumbnail"] + ".jpg";    
    song.src = "media/song/" +  songList[songIndex]["title"] + ".mp3";
}



