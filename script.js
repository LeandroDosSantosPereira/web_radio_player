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
  
  playButton.addEventListener('click', function() {
	var musicInfo = document.getElementById('music-info');
	if (audio.paused) {
	  audio.play();
	  playButton.innerHTML = '<i class="fa fa-pause"></i>';
	  musicInfo.style.backgroundImage = 'url("equalizer.gif")';
	  document.getElementById('time').style.display = 'none';
	  document.getElementsByClassName('title')[0].style.display = 'block';
	  document.getElementsByClassName('author')[0].style.display = 'block';
	  document.getElementsByClassName('album')[0].style.display = 'block';
	} else {
	  audio.pause();
	  playButton.innerHTML = '<i class="fa fa-play"></i>';
	  musicInfo.style.backgroundImage = 'none';
	  document.getElementById('time').style.display = 'block';
	  document.getElementsByClassName('title')[0].style.display = 'none';
	  document.getElementsByClassName('author')[0].style.display = 'none';
	  document.getElementsByClassName('album')[0].style.display = 'none';
	}
  });
  
  backwardButton.addEventListener('click', function() {
	currentTrack--;
	if (currentTrack < 0) {
	  currentTrack = musicas.length - 1;
	}
	loadTrack(currentTrack);
	audio.play();
  });
  
  forwardButton.addEventListener('click', function() {
	currentTrack++;
	if (currentTrack >= musicas.length) {
	  currentTrack = 0;
	}
	loadTrack(currentTrack);
	audio.play(); 
  });
  
  function updateTime() {
	var agora = new Date();
	var hora = agora.getHours();
	var minuto = agora.getMinutes();
	if (hora < 10) hora = '0' + hora;
	if (minuto < 10) minuto = '0' + minuto;
	document.getElementById('time').innerText = hora + ':' + minuto;
  }
  
 
  setInterval(updateTime, 1000);

  // Função para verificar e forçar a orientação paisagem
  function forceLandscape() {
    if (window.orientation !== 90 && window.orientation !== -90) {
      alert("Gire o dispositivo para a orientação paisagem.");
    }
  }

  // Executa a função ao carregar a página
  forceLandscape();

  // Adiciona um ouvinte de evento para verificar a orientação quando o dispositivo é girado
  window.addEventListener("orientationchange", forceLandscape);