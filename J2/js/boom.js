//boom
function Boom(obj){
	var blast = document.createElement("img");
	blast.src = "img/blast3.gif";
	blast.width = obj.width;
	blast.height = obj.height;
	blast.style.top = obj.offsetTop + 'px';
	blast.style.left = obj.offsetLeft + 'px';
	one.appendChild(blast);
	setTimeout(function(){
		one.removeChild(blast);
	},800)
}