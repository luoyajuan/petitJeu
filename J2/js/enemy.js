//enemy
function enemy(index,myPlane){
    var score = one.getElementsByClassName("score")[0],
        scoreis = 0;	//score indeed
one.enemyTimer = setInterval(function(){
    var enemyPlane = document.createElement("img");
    let speed = Math.random()*2+2;//speed of the planes
    enemyPlane.src = [['img/fj1.png','img/fj2.png'],['img/fj3.png','img/fj4.png'],['img/fj5.png','img/fj6.png'],['img/fj7.png','img/fj8.png'],['img/fj9.png','img/fj10.png']][index][Math.floor(Math.random()*2)]
    enemyPlane.width = 60;
    enemyPlane.height = 40;
    enemyPlane.style.top = 0;
    enemyPlane.style.left = Math.random()*(home.clientWidth-enemyPlane.width) + 'px';
    one.appendChild(enemyPlane);
    //drop the enemy
    enemyplay();
    function enemyplay(){
        enemyPlane.style.top = enemyPlane.offsetTop + speed + 'px';
        if(enemyPlane.offsetTop >= home.clientHeight + enemyPlane.height){
            //cancelAnimationFrame();//effacer move 
            one.removeChild(enemyPlane);//effacer planes
            return false;
        }else{
            var aBiu = one.getElementsByClassName("myAirBullet");
            //collision with the enemy and the bullets
            for(let i=0; i<aBiu.length; i++){
                if(isCollision(aBiu[i],enemyPlane)){
                    scoreis++;
                    score.innerHTML = scoreis;
                    Boom(enemyPlane);	//boom
                    audio(1)	//audio
                    cancelAnimationFrame(aBiu[i].timer);//effacer bullet move
                    one.removeChild(enemyPlane);//effacer plane
                    one.removeChild(aBiu[i]);//effacer bullet
                    return false;
                }
            }
            //game over, collision with the enemies and my planes
            if(myPlane.parentNode && isCollision(myPlane,enemyPlane)){	//判断我方飞机是否存在 && 是否碰撞
                let dio = one.getElementsByClassName("dio");
                var pp = one.querySelector("p");
                pp.style.width = 0 +"px";
                one.removeChild(dio[0]);
                one.removeChild(dio[0]);
                Boom(enemyPlane);	//enemies boom
                Boom(myPlane);	//my planes boom
                audio(1);
                clearInterval(one.enemyTimer);	//stop enemies
                clearInterval(one.bulletTimer);	//stop bullets
                clearInterval(one.backgroundMove);//stop background
                clearInterval(one.supplyTimer);//stop supply
                one.removeChild(myPlane);
                one.removeChild(enemyPlane);
                document.onkeydown = null;	//effacer move
                one.ontouchstart = null;
                newscore.innerHTML = scoreis;
                three.style.display = "block";
                return false;
            }
            myPlane.parentNode && requestAnimationFrame(enemyplay);
        }
    };
},500);
}