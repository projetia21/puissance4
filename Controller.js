var height=6;
var width=6;

function generateMatrix()
{
var matrix= new Array(height); 

	for(var i=0;i<height;i++){
		matrix[i]=new Array(width);
	}

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

		if ((mat[posx][s]==mat[posx][s+1])&&(mat[posx][s]!=0)&&(mat[posx][s+2]==mat[posx][s+3])&&(mat[posx][s]==mat[posx][s+2])){ //))
			win=true;
	//		alert(win);
			break;
			}
			else{
			s++;
		}
		}
	
	
	return(win);
}






function SearchVertical(mat,posy,height){

win=false;

	var s=height-1;

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



function SearchDiagonal(mat,posy,posx,width,height){

		win=false;
		t1=posx;
		t2=posy;
		
		
		
		while(posx<(width-1) && posy>0){
			posx++;
			posy--;
		}

		while(posx>2 && posy<3 ){
	
			if ((mat[posx][posy]==mat[posx-1][posy+1])&&(mat[posx][posy]!=0)&&(mat[posx-2][posy+2]==mat[posx-3][posy+3])&&(mat[posx][posy]==mat[posx-2][posy+2])){    //

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
	
		while(posx<(height-1) && posy<(width-1)){
		
			posx++;
			posy++;
			
		}
		
		while(posx>2 && posy>2 ){

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


function end(mat,posx,posy,playerState,width,height){
	
	if (SearchHorizontal(mat,posx,width)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||

		return(1);
	
	}
	else {
	if (SearchDiagonal(mat,posy,posx,width,height)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||

		return(1);

	}else{
	if (SearchVertical(mat,posy,height)==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||

		return(1);

	}else{
		return(0);
	}
	}
	}
	
	

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
			
				$scope.GameStatus=end($scope.matrix,$scope.posx,$scope.posy,$scope.player,$scope.width,$scope.width);
			
				if ($scope.GameStatus!=0){
				alert("fin de la partie le joueur" +$scope.player%2+1+ " a gagné la partie");
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


	
	