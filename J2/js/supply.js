//supply
function supply(){
	one.supplyTimer = setInterval(function(){
		var loveSupply = document.createElement("img");
		loveSupply.src = "img/love.png";
		loveSupply.width = 60;
		loveSupply.height = 40;
		loveSupply.style.left = -60 + "px";
		loveSupply.style.top = 50+100*Math.random() + "px";
		one.appendChild(loveSupply);
		//supply move
		supplyplay()
		function supplyplay(){
			loveSupply.style.left = loveSupply.offsetLeft + 2 +"px";
			if(loveSupply.offsetLeft >= home.clientWidth + loveSupply.width){
				one.removeChild(loveSupply);
				return false
			}else{
				var aBiu = one.getElementsByClassName("myAirBullet"),
					myplane = one.getElementsByClassName("myplane")[0];
				for (let i=0; i<aBiu.length; i++) {
					if (isCollision(aBiu[i],loveSupply)) {
						cancelAnimationFrame(aBiu[i].timer);	//effacer bullets move
						one.removeChild(loveSupply);	//effacer planes
						one.removeChild(aBiu[i]);	//effacer bullets
						plane = plane+1 > 2? 0 : plane+1;
						console.log(myplane)
						myplane.src = arrPlane[Air][plane];
						myplane.width = 70*(6+plane)/6;
						myplane.height = 50*(6+plane)/6;
						return false;
					}
				}
				requestAnimationFrame(supplyplay);
			}
		}
	},5000)
}