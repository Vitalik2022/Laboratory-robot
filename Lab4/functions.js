Array.prototype.swap=function(pos1, pos2){
	var tmp=this[pos1];
	this[pos1]=this[pos2];
	this[pos2]=tmp;
}

function printArray(M,Nm){
	var str="<br><br>"+Nm + ": <br>";
	for(var i=0; i<M.length; i++){
		str+=M[i].toFixed(1) + "  &nbsp;";
	}
	res.innerHTML+=str;
}

function indexMax(M){
	var max=M[0];
	var ind=0;
	for(var i=1; i<M.length; i++){
		if(M[i]>max){
			max=M[i];
			ind=i;
		}
	}
	return ind;
}

function swap(M, pos1, pos2){
	var tmp=M[1*pos1];
	M[1*pos1]=M[1*pos2];
	M[1*pos2]=tmp;
}

function sort(M){
	for(var i=M.length-1; i>0; i--){
		for(var j=0; j<i; j++){
			if(M[j]>M[j+1]){
				swap(M, j, j+1);
			}
		}
	}
}

function lab4(){
	for(var i=0; i<A.length; i++){
		if(A[i]!=B[i]){
			C[i]=1/(A[i]-B[i]);
		}
		else C[i]=1;
	}

	printArray(A,"A");
	printArray(B,"B");
	printArray(C,"C");

	var pos=indexMax(C); //alert(pos);
	swap(C, 0, pos);
	printArray(C,"Після перестановки C");
	sort(C);
	printArray(C,"Після сортування C");
}