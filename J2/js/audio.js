//audio
function audio(n){
	var music = ["audio/bgm.mp3","audio/boom.mp3","audio/bullet.mp3"],
		dio = document.createElement("audio");
	if(n != 1){
		dio.className = "dio"
	}
	dio.src = music[n];
	dio.autoplay = "autoplay";
	dio.loop = "loop";
	one.appendChild(dio);
	if (n==1) {
		setTimeout(function(){
			one.removeChild(dio);
		},800)
	}
}