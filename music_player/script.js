let previous = document.querySelector("#pre");
let playsongs = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let slider = document.querySelector("#range");
let image = document.querySelector("#track-image");
let play_button_icon = document.querySelector("#play i");

let autoplay = 1;
let starting = 0;
let playingSong = false;
let track = document.createElement("audio");
let all_songs = [
    {
        name: "Mariyan",
        path: "./Assets/mariyan.mp3",
        img: "./Assets/mariyan.jpeg",
        artist: "Shreya Ghoshal"
    },
    {
        name: "Power Pandi",
        path: "./Assets/ppandi.mp3",
        img: "./Assets/power pandi.jpeg",
        artist: "Sean Roldan"
    },
    {
        name: "Virumandi",
        path: "./Assets/virumandi.mp3",
        img: "./Assets/virumandi.jpeg",
        artist: "Kamal Hassan"
    }
];

function load_track(starting) {
    reset_slider();
    track.src = all_songs[starting].path;
    title.innerHTML = all_songs[starting].name;
    image.src = all_songs[starting].img;
    artist.innerHTML = all_songs[starting].artist;
    title.innerHTML =all_songs[starting].name;
}
load_track(starting);

function previous_song() {
    if (starting > 0) {
        starting -= 1;
    } else {
        starting = all_songs.length - 1;
    }

    load_track(starting);
    playsong();
}

function play() {
    if (playingSong == false) {
        playsong();
    } else {
        pausesong();
    }
}

function playsong() {
    track.play();
    playingSong = true;
    play_button_icon.className = 'fa fa-pause';
}

function pausesong() {
    track.pause();
    playingSong = false;
    play_button_icon.className = 'fa fa-play';
}

function next_song() {
    if (starting < all_songs.length - 1) {
        starting += 1;
    } else {
        starting = 0;
    }

    load_track(starting);
    playsong();
}

function reset_slider() {
    slider.value = 0;
}
function change_duration() {
    let slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

track.addEventListener("timeupdate", function () {
    let position = track.currentTime / track.duration;
    slider.value = position * 100;
});
