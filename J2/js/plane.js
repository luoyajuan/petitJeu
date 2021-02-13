//my planes Air：click which plane
function myAir(Air){
	var myAirPlane = document.createElement("img");
	var speed = 4;	//speed
	myAirPlane.className = "myplane";
	myAirPlane.src = arrPlane[Air][plane];
	myAirPlane.width = 70;
	myAirPlane.height = 50;
	myAirPlane.style.bottom = 5 + 'px';
	myAirPlane.style.left = home.clientWidth/2 - myAirPlane.width/2 + 'px';
	one.appendChild(myAirPlane);
	//keyboard move
	document.onkeydown = function (e) {
		e = e || window.event;
		switch (e.keyCode){
			case 37:
			case 65:
				myAirPlane.style.left = Math.max(0,myAirPlane.offsetLeft-5) +'px';
				break;
			case 39:
			case 68:
				myAirPlane.style.left = Math.min(home.clientWidth - myAirPlane.width,myAirPlane.offsetLeft+5) +'px';
				break;
			default:break;
		}
	}
	//touch move 
	one.ontouchstart = function(e){
		if(e.touches[0].screenX < home.clientWidth/2){
			myAirPlane.style.left = Math.max(0,myAirPlane.offsetLeft-5) +'px';
		}else{
			myAirPlane.style.left = Math.min(home.clientWidth - myAirPlane.width,myAirPlane.offsetLeft+5) +'px';
		}
	}
	//bullets
	one.bulletTimer = setInterval(function(){
		var myAirBullet = document.createElement("img");
		myAirBullet.className = "myAirBullet";
		myAirBullet.src = arrBullet[Air][plane];
		myAirBullet.width = 10*(1+plane);
		myAirBullet.height = 20*(1+plane);
		myAirBullet.style.top = myAirPlane.offsetTop - myAirBullet.height + 'px';
		myAirBullet.style.left = myAirPlane.offsetLeft + myAirPlane.clientWidth/2 - myAirBullet.width/2 + 'px';
		one.appendChild(myAirBullet);
		//bullet output
		bulletEmit();
		function bulletEmit(){
			let top = myAirBullet.offsetTop -speed;
			myAirBullet.style.top = top + 'px';
			if(top <= 0){
				//cancelAnimationFrame(motion);//effacer move
				one.removeChild(myAirBullet);//effacer
				return false;
			}else{
				myAirPlane.parentNode && (myAirBullet.timer = requestAnimationFrame(bulletEmit));
			}
		}
	},400);
	supply(); //supply
	return myAirPlane;
}