// Suponha que você tenha um array de objetos JSON para várias músicas
var musicas = [
	{
		title: "Rádio Evangelizar",
		album: "1060 AM 1040 AM",
		author: "Curitiba / PR - Brasil",
		source: "https://shout87.crossradio.com.br:18000/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Aparecida",
		album: "104.3 FM",
		author: "Aparecida / SP - Brasil",
		source: "https://aparecida.jmvstream.com/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Transamérica",
		album: "100.1 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://24363.live.streamtheworld.com/RT_SPAAC.aac",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Band FM",
		album: "96.1 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://27413.live.streamtheworld.com/BANDFM_SPAAC.aac?dist=radios.com.br",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Nativa",
		album: "95.3 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://24273.live.streamtheworld.com/NATIVA_SPAAC.aac?dist=radios.com.br",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Capital",
		album: "77.5 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://f15.fabricahost.com.br/capitalfmsp?f=1702606956N01HHNMGSJDPQ0VGS5AZBJY1KSP&tid=01HHNMGSJDMKT7FF0QRKSAVZ6T",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Energia",
		album: "97.7 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://streaming.inweb.com.br/energia",
		type: "audio/mpeg"
	},

	{
		title: "Radio Saudade",
		album: "99.7 FM",
		author: "Santos / SP - Brasil",
		source: "https://24483.live.streamtheworld.com/SAUDADE_FMAAC.aac?dist=radios.com.br",
		type: "audio/mpeg"
	},

	{
		title: "Flash Back Total",
		album: "Web rádio",
		author: "Franca / SP - Brasil",
		source: "http://stm21.srvaudio.com.br:10604/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Flash Back",
		album: "Web rádio",
		author: "Três Corações / MG - Brasil",
		source: "http://server02.ouvir.radio.br:8050/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Nova",
		album: "96.1 FM",
		author: "Nova Andradina / MS - Brasil",
		source: "http://143.208.11.100:8654/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Miragem",
		album: "104.9 FM",
		author: "Nova Andradina / MS - Brasil",
		source: "https://webradios.net/api/proxy-stream.php?ip=sv12.hdradios.net&port=7536&mount=/stream&1702673605824",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Clube",
		album: "104.9 FM",
		author: "Nova Casa Verde / MS - Brasil",
		source: "http://radioclube.osstelecom.com.br:8000/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Nova Hits",
		album: "Web rádio",
		author: "Nova Andradina / MS - Brasil",
		source: "http://s03.svrdedicado.org:7042/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Cidade Online",
		album: "Web rádio",
		author: "Nova Andradina / MS - Brasil",
		source: "http://stm4.onecast.com.br:7228/;",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Difusora Vale Do Ivinhema",
		album: "Web rádio",
		author: "Nova Andradina / MS - Brasil",
		source: "http://stream-150.zeno.fm/y7b6s40f8x8uv?zs=3UmREuIvS72u2zDKT6WRCw",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Mais Web",
		album: "Web rádio",
		author: "Nova Andradina / MS - Brasil",
		source: "http://stm4.onecast.com.br:9620/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Top Mix Digital",
		album: "Web rádio",
		author: "Nova Andradina / MS - Brasil",
		source: "https://stream-150.zeno.fm/uy6zwdqppwzuv?zs=DgQr16KpROaH0H_s8FpRZA",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Massa",
		album: "99.5 FM",
		author: "Nova Andradina / MS - Brasil",
		source: "https://stm01.virtualcast.com.br:8058/massanovaandradina",
		type: "audio/mpeg"
	},

	{
		title: "Radio Guavira",
		album: "103.1 FM",
		author: "Ivinhema / MS - Brasil",
		source: "https://stm21.srvaudio.com.br:10726/;",
		type: "audio/mpeg"
	},

	{
		title: "Radio Morena",
		album: "107.1 FM",
		author: "Campo Grande / MS - Brasil",
		source: "https://centova.svdns.com.br:20110/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Difusora Pantanal",
		album: "101.9 FM",
		author: "Campo Grande / MS - Brasil",
		source: "https://player.painelshoutcast.com.br/proxy/7004/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Grande FM",
		album: "92.1 FM",
		author: "Dourados / MS - Brasil",
		source: "https://9867.brasilstream.com.br/stream?",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Ivaí",
		album: "101.5 FM",
		author: "Santa Isabel do Ivaí / PR - Brasil",
		source: "http://controleflash.omegasistemas.net:8377/;stream.mp3",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Navegantes",
		album: "Web rádio",
		author: "Rosana / SP - Brasil	",
		source: "https://stm1.rbcast.com:6828/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Globo RJ",
		album: "98.1 FM",
		author: "Rio de Janeiro / RJ - Brasil",
		source: "https://24493.live.streamtheworld.com/RADIO_GLOBO_RJAAC.aac?dist=radioscombr",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Bandeirantes",
		album: "840 AM 90.9 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://27613.live.streamtheworld.com/RADIOBANDEIRANTESAAC.aac?dist=radios.com.br",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Jovem Pan",
		album: "620 AM",
		author: "São Paulo / SP - Brasil",
		source: "https://26653.live.streamtheworld.com/JP_SP_AMAAC.aac",
		type: "audio/mpeg"
	},

	{
		title: "Super Rádio Tupi",
		album: "96.5 FM",
		author: "Rio de Janeiro / RJ - Brasil",
		source: "https://8923.brasilstream.com.br/stream",
		type: "audio/mpeg"
	},

	{
		title: "Rádio CBN São Paulo",
		album: "90.5 FM",
		author: "São Paulo / SP - Brasil",
		source: "https://27383.live.streamtheworld.com/CBN_SPAAC.aac?dist=radioscombr",
		type: "audio/mpeg"
	},

	{
		title: "Rádio CBN Rio",
		album: "92.5 FM",
		author: "Rio de Janeiro / RJ - Brasil",
		source: "https://27603.live.streamtheworld.com/CBN_RJAAC.aac?dist=radioscombr",
		type: "audio/mpeg"
	},

	{
		title: "Rádio Itatiaia",
		album: "610 AM 95.7 FM",
		author: "Belo Horizonte / MG - Brasil",
		source: "http://8903.brasilstream.com.br:8903/stream?1702674031003",
		type: "audio/mpeg"
	}

];


// Seleciona os elementos da página
var audioPlayer = document.getElementById('audio-player');
var radioTitle = document.getElementById('radio-title');
var radioFrequency = document.getElementById('radio-frequency');
var radioLocation = document.getElementById('radio-location');
var playPauseButton = document.getElementById('play-pause');
var timeDisplay = document.getElementById('time');
var loadingMessage = document.getElementById('loading-message'); // Mensagem de "Conectando à rádio..."

// Variável para controlar o índice da rádio atual
var currentRadioIndex = localStorage.getItem('currentRadioIndex') ? parseInt(localStorage.getItem('currentRadioIndex')) : 0;

// Atualiza as informações da rádio na tela
function updateRadioInfo() {
	var currentRadio = musicas[currentRadioIndex];
	radioTitle.innerText = currentRadio.title;
	radioFrequency.innerText = currentRadio.album;
	radioLocation.innerText = currentRadio.author;
	audioPlayer.src = currentRadio.source;
	loadingMessage.style.display = 'block'; // Mostra a mensagem de conexão ao mudar a rádio
}

// Função para formatação de tempo AM/PM
function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // O relógio de 12 horas não tem "00" horas
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

// Função de reconexão automática caso o áudio pare
audioPlayer.addEventListener('error', function () {
	setTimeout(function () {
		audioPlayer.load();
		audioPlayer.play();
	}, 10000); // Aumenta o tempo para tentar reconectar após 10 segundos
});

// Previne que o áudio entre em looping ou buffers repetidos
audioPlayer.addEventListener('stalled', function () {
	console.log("Stalled, tentando reconectar...");
	audioPlayer.pause();
	setTimeout(function () {
		audioPlayer.load();
		audioPlayer.play();
	}, 5000);
});

// Oculta a mensagem de conexão quando o áudio estiver pronto para tocar
audioPlayer.addEventListener('canplay', function () {
	loadingMessage.style.display = 'none'; // Esconde a mensagem "Conectando à rádio..."
});

// Função para reproduzir ou pausar
function togglePlayPause() {
	if (audioPlayer.paused) {
		audioPlayer.play().catch(function (error) {
			console.log('Erro ao tentar tocar o áudio: ', error);
		});
		playPauseButton.innerText = '⏸';
		document.getElementById('info').style.display = 'block';
		timeDisplay.style.display = 'none';
	} else {
		audioPlayer.pause();
		playPauseButton.innerText = '▶';
		timeDisplay.innerText = formatAMPM(new Date());
		document.getElementById('info').style.display = 'none';
		timeDisplay.style.display = 'block';
	}
}

// Funções para navegar pelas rádios
function nextRadio() {
	currentRadioIndex = (currentRadioIndex + 1) % musicas.length;
	localStorage.setItem('currentRadioIndex', currentRadioIndex);
	updateRadioInfo();
	audioPlayer.play();
}

function prevRadio() {
	currentRadioIndex = (currentRadioIndex - 1 + musicas.length) % musicas.length;
	localStorage.setItem('currentRadioIndex', currentRadioIndex);
	updateRadioInfo();
	audioPlayer.play();
}

// Eventos de controle
playPauseButton.addEventListener('click', function () {
	togglePlayPause();
	// Salva estado de interação para prevenir erro de autoplay
	localStorage.setItem('userInteracted', true);
});

document.getElementById('next').addEventListener('click', nextRadio);
document.getElementById('prev').addEventListener('click', prevRadio);

// Inicializa o player
if (localStorage.getItem('userInteracted')) {
	updateRadioInfo();
	audioPlayer.play();
}