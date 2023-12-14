// Suponha que você tenha um array de objetos JSON para várias músicas
var musicas = [
	{
		title: "CBN",
		album: "FM",
		author: "São paulo",
		source: "https://27323.live.streamtheworld.com/CBN_SPAAC.aac?dist=radioscombr",
		type: "audio/mpeg"
	},
	{
		title: "Tupi",
		album: "AM",
		author: "Rio de Janeiro",
		source: "https://8923.brasilstream.com.br/stream?1699577978349",
		type: "audio/mpeg"
	},

	{
		title: "Bandeirantes",
		album: "AM",
		author: "São Paulo",
		source: "https://27573.live.streamtheworld.com/RADIOBANDEIRANTESAAC.aac?dist=radios.com.br",
		type: "audio/mpeg"
		}
 
];

var player = document.getElementById('player');
var playButton = document.getElementById('play');
var backwardButton = document.getElementsByClassName('fa-step-backward')[0].parentNode;
var forwardButton = document.getElementsByClassName('fa-step-forward')[0].parentNode;

var audio = new Audio();
var currentTrack = 0;

function loadTrack(track) {
	audio.src = musicas[track].source;
	audio.load();
	document.getElementsByClassName('title')[0].innerText = musicas[track].title;
	document.getElementsByClassName('author')[0].innerText = musicas[track].author;
	document.getElementsByClassName('album')[0].innerText = musicas[track].album;
}

function playMusic() {
	if (audio.paused) {
		audio.play();
		playButton.innerHTML = '<i class="fa fa-pause"></i>';
	} else {
		audio.pause();
		playButton.innerHTML = '<i class="fa fa-play"></i>';
	}
}

loadTrack(currentTrack);

playButton.addEventListener('click', playMusic);

backwardButton.addEventListener('click', function() {
	currentTrack--;
	if (currentTrack < 0) {
		currentTrack = musicas.length - 1;
	}
	loadTrack(currentTrack);
	playMusic();
});

forwardButton.addEventListener('click', function() {
	currentTrack++;
	if (currentTrack >= musicas.length) {
		currentTrack = 0;
	}
	loadTrack(currentTrack);
	playMusic();
});
