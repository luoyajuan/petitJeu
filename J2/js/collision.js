//collision
function isCollision(obj,enemy){	//obj:my planes or bullets 	 enemy:my enemies
	var t1 = obj.offsetTop,
		b1 = obj.offsetTop + obj.height,
		l1 = obj.offsetLeft,
		r1 = obj.offsetLeft + obj.width;
		
	var t2 = enemy.offsetTop,
		b2 = enemy.offsetTop + enemy.height,
		l2 = enemy.offsetLeft,
		r2 = enemy.offsetLeft + enemy.width;
	
	return !(t1 > b2 || l1 > r2 || b1 < t2 || r1 < l2);
}