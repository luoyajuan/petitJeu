
var one = document.getElementById('one'),
	haemal = one.querySelector("p"),
	score = one.getElementsByClassName("score")[0],
	tow = document.getElementById('tow'),
	three = document.getElementById('three'),
	air = tow.querySelectorAll(".plane li"),
	start = tow.querySelectorAll(".list li"),
 	Air = 0,	//remplacer planes
 	plane = 0,	//remplacer l'etat d'avion
 	index;
 	var arrPlane = [['img/my1.png','img/my11.png','img/my111.png'],['img/my2.png','img/my22.png','img/my222.png'],['img/my3.png','img/my33.png','img/my333.png'],['img/my4.png','img/my44.png','img/my444.png']],
		arrBullet = [['img/pd1.png','img/pd11.png','img/pd111.png'],['img/pd2.png','img/pd22.png','img/pd222.png'],['img/pd3.png','img/pd33.png','img/pd333.png'],['img/pd4.png','img/pd44.png','img/pd444.png']];
	for (let i=0; i<air.length; i++) {
	 	air[i].onclick = function(){
	 		Air = i;
	 	}
	}
	for (let i=0; i<start.length; i++) {
		index = i
	 	start[i].onclick = function(){
	 		startGame(Air,i);
	 	}
	}

 //start game
function startGame(Air,index){
	one.innerHTML = "";	//effacer la page initial
	plane = 0;
	var haemal = document.createElement("div");
	haemal.className = "haemal";
	var score = document.createElement("div");
	score.className = "score";
	var p = document.createElement("p");
	haemal.appendChild(p)
	one.appendChild(haemal);
	one.appendChild(score);
 	tow.style.display = 'none';
 	one.style.display = 'block';
 	one.style.backgroundImage = ['url(img/context1.jpg)','url(img/context2.jpg)','url(img/context3.jpg)','url(img/context4.jpg)','url(img/context5.jpg)'][index];
 	//background move
 	var top = 0;
 	one.backgroundMove = setInterval(function(){
 		top = top+1;
 		one.style.backgroundPositionY = top + 'px';
 		if (top>=570) {
 			top = 0;
 		}
 	},1000/60);
 	audio(0);	//background music
 	audio(2);	//background music
 	var myPlane = myAir(Air); //my planes
 	enemy(index,myPlane); //enemy
}

//click
quit.onclick = function(){
	one.style.display = "none";
	three.style.display = "none";
	tow.style.display = "block";
}