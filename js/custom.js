//white spaces being added after single letters
document.addEventListener("DOMContentLoaded", function(){
	 var paragraph = document.querySelectorAll('p, li');
	 
	 for(var i = 0; i < paragraph.length; i++){
	 	var getString = paragraph[i].innerHTML.toString();
	 	var spaceRemoved = getString.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;");
	 	paragraph[i].innerHTML = spaceRemoved;
	 	
	 }  
});
