 var db1 = openDatabase('mydb', '1.0', 'database', 2 * 1024 * 1024);
    db1.transaction(function (tx) {
    tx.executeSql('CREATE TABLE users (user,score)');
   });
var height=6;
var width=6;
var z = {i: 0, j: 0, win: false};
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
	 function score(mat,P){
		 var result=5000;
	
		 for(var i=0; i<height;i++){
			 for(var j=0;j<width;j++){
		 switch(P){
			 case 1:
		if(mat[i][j]==1){
			result--;
		return result;
		}
			 break;
			 case 2:
	 if(mat[i][j]==2){
			result--;
		return result;
		}			
			 break;
		 }
	 }}
	 }
function SearchHorizontal(mat,posx,width,n){
var InternState = {i: 0, j: 0, win: false};
	var s=0;
	var k=width-3;
	if( n==4){ 
		while (s<k){
			if ((mat[posx][s]==mat[posx][s+1])&&(mat[posx][s]!=0)&&(mat[posx][s+2]==mat[posx][s+3])&&(mat[posx][s]==mat[posx][s+2])){ //))
				InternState.win=true;
		//		alert(win);
				break;
			}
			else{
				s++;
			}
		}
	}else {
		if (n==3){
			while (s<k){
			if ((mat[posx][s]==mat[posx][s+1])&&(mat[posx][s]!=0)&&(mat[posx][s]==mat[posx][s+2])){ //))
			//InternState.win=false;
			InternState.i=posx;
			InternState.j=s+3;
		//		alert(win);
				break;
			}
			else{
				s++;
				}
			}
		}
		}
	return(InternState);
}
function SearchVertical(mat,posy,height,n){
var internState = {i: 0, j: 0, win: false};
	var s=height-1;
	k=posy-2;
	if ( n==4){
	while ( s>k ){
		if ((mat[s][posy]==mat[s-1][posy])&&(mat[s][posy]!=0)&&(mat[s-2][posy]==mat[s-3][posy])&&(mat[s][posy]==mat[s-2][posy])){  //&&(mat[s-2][posy]==mat[s-3][posy])&&(mat[s][posy]==mat[s-2][posy])&&
		internState.win=true;
		break;}
		else{
		s--;
		}
	}
	}else if (n==3){
		while ( s>k ){
		if ((mat[s][posy]==mat[s-1][posy])&&(mat[s][posy]!=0)&&(mat[s][posy]==mat[s-2][posy])){  //&&(mat[s-2][posy]==mat[s-3][posy])&&(mat[s][posy]==mat[s-2][posy])&&
		internState.i=s-3;
		internState.j=posy;
		break;}
		else{
		s--;
		}
	}
	}
	return(internState);
} 
function SearchDiagonal(mat,posy,posx,width,height,n){
		var internState = {i: 0, j: 0, win: false};
		t1=posx;
		t2=posy;	
		while(posx<(width-1) && posy>0){
			posx++;
			posy--;
		}
		if (n==4){
			while(posx>2 && posy<3 ){
	
				if ((mat[posx][posy]==mat[posx-1][posy+1])&&(mat[posx][posy]!=0)&&(mat[posx-2][posy+2]==mat[posx-3][posy+3])&&(mat[posx][posy]==mat[posx-2][posy+2])){    //

					posx=0;
					internState.win=true;
					}
				else{
				posx--;
				posy++;
				}
			}
		
		}else if (n==3){
				while(posx>2 && posy<3 ){
			
					if ((mat[posx][posy]==mat[posx-1][posy+1])&&(mat[posx][posy]!=0)&&(mat[posx][posy]==mat[posx-2][posy+2])){    //

						posx=0;
					internState.i=posx-3;
					internState.j=posy+3;
				}
				else{
					posx--;
					posy++;
				}
			}
			
			}
			posx=t1;
			posy=t2;
		
			while(posx<(height-1) && posy<(width-1)){
			
				posx++;
				posy++;
				
			}
		if (n==4){	
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
			}else if (n==3){	
			while(posx>2 && posy>2 ){

			if ((mat[posx][posy]==mat[posx-1][posy-1])&&(mat[posx][posy]!=0)&&(mat[posx][posy]==mat[posx-2][posy-2])){   //&&(mat[posx-2][posy-2]==mat[posx-3][posy-3])&&(mat[posx][posy]==mat[posx-2][posy-2])

				posx=0;
				internState.i=posx-3;
				internState.j=posy-3;

			}
			else{
				posx--;
				posy--;
			}	
		}
	}
	return(internState);
	}
var player=1;
function meduimComputer(mat,width,height,posx,posy){
try1=true;
w=0;
h=0;
k1=SearchDiagonal(mat,posy,posx,width,height,3);
k2=SearchHorizontal(mat,posx,width,3);
k3=SearchVertical(mat,posy,height,3);
if ((k1.i!=0)||(k1.j!=0)){
mat[k1.i][k1.j]=2;
}else{ if((k2.i!=0)||(k2.j!=0)){
mat[k2.i][k2.j]=2;
}else if ((k3.i!=0)||(k3.j!=0)){
mat[k2.i][k2.j]=2;
}else{
}
}
}
function end(mat,posx,posy,playerState,width,height){
win=false;
	k=SearchHorizontal(mat,posx,width,4);
	if (k.win==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||

		return(1);
	
	}
	else {
	k=SearchDiagonal(mat,posy,posx,width,height,4);
	if (k.win==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||
		return(1);
	}
	else{
	k=SearchVertical(mat,posy,height,4);
	if (k.win==true){  //   SearchVertical(mat,posy))||SearchDiagonal(mat,posy,posx)||  //SearchVertical(mat,posy)||SearchDiagonal(mat,posy,posx)||

		return(1);

	}else{
		return(0);
	}
	}
    }
    }
function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}	
var ImCorrespond= [{val: 0, name:'p4_empty.png'},{val: 1, name:'p4_player_1.png'},{val: 2, name:'p4_player_2.png'}];
var player="PC";
var app=angular.module("myapp",[]);
app.controller("Puissance4Controller",function($scope){
	$scope.GameOver=false;
	$scope.winnerStatus=false;
	$scope.StatusW=true;
	$scope.timeInMs = 0;
	$scope.greeting = 'Welcome';
	$scope.currentScore = 0;
    $scope.highScore = 6000;
	$scope.clickMe = function() {
	$scope.StatusW=false;
	$scope.StatusG=true;
	$scope.StatusR=true;
	$scope.player=1;
	$scope.width=width;
	$scope.height=height;
$("#myModal").modal("show");
  var User = document.getElementById('user');
       var score=0;
       var userinfo ={
           "UserText": User.value, 
       };
       db1.transaction(function(tx) {
          tx.executeSql('INSERT INTO users (user,score) values (? , ?)', [userinfo.UserText,score]);
        });
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
			//	$scope.GameStatus=end($scope.matrix,$scope.posx,$scope.posy,$scope.player,$scope.width,$scope.width);
			$scope.GameStatus=end($scope.matrix,$scope.posx,$scope.posy,$scope.player,$scope.width,$scope.width);
				if ($scope.GameStatus!=0){
				alert("fin de la partie le joueur" +$scope.player%2+1+ " a gagné la partie");
				$scope.winnerStatus=true;
				$scope.currentScore=score($scope.matrix,1);
				 db1.transaction(function(tx) {
				 tx.executeSql('INSERT INTO users (user,score) values (? , ?)', [userinfo.UserText,$scope.currentScore]);});
				 if($scope.currentScore>$scope.highScore){
					   $scope.highScore=$scope.currentScore;
					   db1.transaction(function(tx) {
                tx.executeSql('update users set score value(?) ', [userinfo.UserText,$scope.highScore]);
                 });   
				}
				if(	$scope.winnerStatus==false){
				$scope.GameOver=true;
				$("#ModalGo").modal("show");  
			   }
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
$scope.matrix=generateMatrix();
}
});
