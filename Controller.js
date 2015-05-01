var height=6;
var width=6;

function generateMatrix()
{
var matrix= new Array(height); 

	for(var i=0;i<height;i++){
		matrix[i]=new Array(width);
	}
    // à remplacer par largeur et longueur variable
	for(var i=0;i<height;i++){	
		for(var j=0;j<width;j++){
			matrix[i][j]=0;
		}
	}
	return(matrix);		
}



function SearchHorizontal(mat,posx,width){

win=false;

	var s=0;
	
	var k=width-3;
	//alert(k);
	while (s<k){
	//alert(mat[posx][s]);
	//alert(mat[posx][s+3]);
		if ((mat[posx][s]==mat[posx][s+1])&&(mat[posx][s]!=0)&&(mat[posx][s+2]==mat[posx][s+3])&&(mat[posx][s]==mat[posx][s+2])){ //))
			win=true;
			alert(win);
			break;
			}
			else{
			s++;
		}
		}
	
	
	return(win);
}






function SearchVertical(mat,posy){

win=false;
	s=5;
	k=posy-2;

	while ( s>k ){
		if ((mat[s][posy]==mat[s-1][posy])&&(mat[s][posy]!=0)&&(mat[s-2][posy]==mat[s-3][posy])&&(mat[s][posy]==mat[s-2][posy])){  //&&(mat[s-2][posy]==mat[s-3][posy])&&(mat[s][posy]==mat[s-2][posy])&&
		win=true;
		break;}
		else{
	
		s--;
		
		}
	}

	return(win);
} 



function SearchDiagonal(mat,posy,posx){
//alert("diag");
		win=false;
		t1=posx;
		t2=posy;
		while(posx<5 && posy>0){
			posx++;
			posy--;
		}
//	alert(1);
		while(posx>2 && posy<2 ){
		
			if ((mat[posx][posy]==mat[posx-1][posy+1])&&(mat[posx][posy]!=0)&&(mat[posx-2][posy+2]==mat[posx-3][posy+3])&&(mat[posx][posy]==mat[posx-2][posy+2])){    //
				alert("here66");
				posx=0;
				win=true;
			}
			else{
				posx--;
				posy++;
			}
		}
		posx=t1;
		posy=t2;
	//	alert(posx);
		while(posx<5 && posy<5){
		//	alert(posx);
			posx++;
			posy++;
			
		}
		//alert("a");
		while(posx>2 && posy>2 ){
		//	alert(mat[posx][posy]);
		//	alert(mat[posx-1][posy-1]);
			if ((mat[posx][posy]==mat[posx-1][posy-1])&&(mat[posx][posy]!=0)&&(mat[posx-2][posy-2]==mat[posx-3][posy-3])&&(mat[posx][posy]==mat[posx-2][posy-2])){   //&&(mat[posx-2][posy-2]==mat[posx-3][posy-3])&&(mat[posx][posy]==mat[posx-2][posy-2])
				
				posx=0;
				win=true;

			}
			else{
				posx--;
				posy--;
			}
			
		}
		
		return(win);
		
	}
	
	
var player=1;


function end(mat,posx,posy,playerState,width){
		//alert(posx);
		//alert(posy);
	
		
		//alert(pp);
	if (SearchHorizontal(mat,posx,width)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||
	alert("maybe");
	/*
		if(playerState==1){
			return(1);
		}
		if(playerState==2 ){
			return(2);
		}
*/
	}
	else {
	if (SearchDiagonal(mat,posy,posx)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||
	alert("maybe");

	}else{
	if (SearchVertical(mat,posy,posx)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||
	alert("maybe");

	}
	}
	}
	
	
	return(0);
}	


var ImCorrespond= [{val: 0, name:'p4_empty.png'},{val: 1, name:'p4_player_1.png'},{val: 2, name:'p4_player_2.png'}];
var player="PC";
angular.module("myapp",[])
.controller("Puissance4Controller",function($scope){
	$scope.StatusW=true;
	$scope.greeting = 'Welcome';
	$scope.clickMe = function() {
	$scope.StatusW=false;
	$scope.StatusG=true;
	$scope.StatusR=true;
	$scope.player=1;
	$scope.width=width;
	$scope.height=height;
$("#myModal").modal("show");
	}	
	$scope.matrix=generateMatrix();
	
		$scope.image = function(element){
		
		for( i=0;i<ImCorrespond.length;i++){
	
			if (ImCorrespond[i].val == element){
		
				$scope.img=ImCorrespond[i].name;
				
				break;
			}	
		}
		}
			
	$scope.clickCase = function(element){
	
			for( i=5;i>-1;i--){
		$scope.posx=i;
		
				if ($scope.matrix[i][element]==0){
		
		$scope.matrix[i][element]=$scope.player;
			
					
					break;
				}
					
			}
			$scope.posy=element;
			
			
				if ($scope.player == 1){
					$scope.player=2;
				}
				else{
					$scope.player=1;
					
				}
				//alert($scope.matrix[1][1]);
				$scope.GameStatus=end($scope.matrix,$scope.posx,$scope.posy,$scope.player,$scope.width);
				//alert($scope.GameStatus);
				if ($scope.GameStatus!=0){
				alert("fin");
				}
	
	}


 //debut de la partie 
$scope.StatusCase=false;
$scope.OnMouseEnter=function(){
$scope.StatusCase=true;
} 
//restart partie 
$scope.ClickToRestart= function() {
$scope.StatusG=false;
$scope.StatusW=true;
}
}
);


	
	