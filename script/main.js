function showLab(num_lab){
	//******************************************************
	for(var i=0; i<list_buttons.length; i++){
		if( list_buttons[i].classList.contains('select') ){
			list_buttons[i].classList.remove('select');
			break;
		}
	}
	list_buttons[num_lab-1].classList.add('select');
	
	//*******************************************************
	for(var i=0; i<list_labs.length; i++){
		if( list_labs[i].classList.contains('visible') ){
			list_labs[i].classList.remove('visible');
			break;
		}
	}
	list_labs[num_lab-1].classList.add('visible');
}

var list_buttons=tabs.getElementsByTagName("button");
var list_labs=document.getElementsByClassName('lab');

