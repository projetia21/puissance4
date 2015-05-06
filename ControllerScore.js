height=6;
width=6;
var P1=0;
var P2=0;
function generateMatrix()
{
var matrix= new Array(6); 

	for(var i=0;i<height;i++){
		matrix[i]=new Array(6);
	}
    // à remplacer par largeur et longueur variable
	for(var i=0;i<height;i++){	
		for(var j=0;j<width;j++){
			matrix[i][j]=0;
		}
	}
	return(matrix);		
}
function SearchHorizontal(t,posx){
win=false;
	var s=0;
	var largeur=6;
	var k=largeur-4;
	while (s<k){
		if ((t[posx][s]==t[posx][s+1])&&(t[posx][s+2]==t[posx][s+3])&&(t[posx][s]==t[posx][s+2])&&(t[posx][s]!=0)){ 
			win=true;
			s++;
		}
	}
	return(win);
}

function SearchVertical(t,posy){
win=false;
	s=0;
	k=pos-4;
	while ( s<k ){
		if ((t[s][posy]==t[s+1][posy])&&(t[s+2][posy]==t[s+3][posy])&&(t[s][posy]==t[s+2][posy])&&(t[s][posy]!=0)){
		win=true;
		s++;
		}
	}
	return(win);
}
function SearchDiagonal(t,posy,posx){
win=false;
s=0;

if (posy<posx){
t2=0;
t1=posx-posy;
//alert("here3");
//alert(posy);
//alert(posx);
}
else{
t1=0;
t2=posy-posx;
//alert("here4");
}
//alert(t[t1][t2]);
while(t1<l && t2<6 ){
//alert("here");
if ((t[t1][t2]==t[t1+1][t2+1])&&(t[t1+2][t2+2]==t[t1+3][t2+3])&&(t[t1][t2]==t[t1+2][t2+2])&&(t[t1][t2]!=0)){
return(true);
//alert("here66");
break;
}
else{
s++;
}
}
//alert("here2");
return(false);
}

/* function  nbPionVerticalAlign(mat,P,n){
	var c1=0;
	var c2=0;
	var P1=0;
	var P2=0;
	var i=0;
 for(var j=0;j<width;j++)
          {
               switch(P){
			   case 1: 
			   if(mat[j][i] == 1)
               {
                    c1++;
                    c2 = 0;

                    if(c1 == n)
                    {
                         P1++;
						 return P1;
                    }
               }
			   break;
               case 2:
			   if(mat[j][i] == 2)
               {
                    c2++;
                    c1 = 0;

                    if(c2 == n)
                    {
                         P2++;
						 return P2;
                    }
               }
			   break;
          }	}
	
} 
function  nbPionHorizontalAlign(mat,P,n){
	var c1=0;
	var c2=0;
	var P1=0;
	var P2=0;
	var i=0;
	for(var j=0;j<width;j++)
          {
			  switch(P){
              case 1:
			  if(mat[i][j] == 1)
               {
                    c1++;
                    c2 = 0;

                    if(c1 == n)
                    {
                         P1++;
						 return P1;
                    }
               }
			   break;
               case 2:
			   if(mat[i][j] == 2)
               {
                    c2++;
                    c1 = 0;

                    if(c2 == n)
                    {
                         P2++;
						 return P2;
                    }
               }
			   break;
          }

}
} 
function  nbPionDiagonalAscAlign(mat,P,n){
	
	 var c1 = 0;
     var c2 = 0;
	 var P1=0;
	 var P2=0;


     for(var i=0;i<height;i++)
     {
		 
		 switch(P){
          case 1: 
		  if(mat[i][2-i] == 1)
          {
               c1++;
               c2 = 0;

               if(c1 == n)
               {
                    P1++;
					return P1;
               }
          }
		  break;
          case 2:
		  if(mat[i][2-i] == 2)
          {
               c2++;
               c1 = 0;
      
               if(c2 == n)
               {
                     P2++;
					 return P2;
               }
          }
      break;		  
     }}
} 
function  nbPionDiagonalDescAlign(mat,P,n){
	var c1=0;
	var c2=0;
	var P1=0;
	var P2=0;
	for(var i=0;i<height;i++)
     {
		 switch(P){
			 
          case 1: 
		  if(mat[i][i] == 1)
          {
               c1++;
               c2=0; 
               if(c1 == n)
               { 
                P1++;
				return P1;
               }
          }
		  break;
          case 2:
		  if(mat[i][i] == 2)
          {
               c2++;
               c1 = 0;
      
               if(c2 == n)
               {
                     P2++;
					 return P2;
               }
          }
		  break;
     }}
	 } 
	 function score(mat,P){
		 var result=0;
		 for(var i=0; i<height;i++){
			 for(var j=0;j<width;j++){
		 switch(P){
			 case 1:
			result+=ScoreAlignment(nbPionVerticalAlign(mat,1,3)); 
		    result+=ScoreAlignment(nbPionHorizontalAlign(mat,1,3));  
			result+=ScoreAlignment(nbPionDiagonalDescAlign(mat,1,3)); 
		    result+=ScoreAlignment(nbPionDiagonalAscAlign(mat,1,3)); 
			return result;
			 break;
			 case 2:
			result+=ScoreAlignment(nbPionVerticalAlign(mat,2,3)); 
		    result+=ScoreAlignment(nbPionHorizontalAlign(mat,2,3));  
			result+=ScoreAlignment(nbPionDiagonalDescAlign(mat,2,3)); 
		    result+=ScoreAlignment(nbPionDiagonalAscAlign(mat,2,3));
          return result;			
			 break;
		 }
	 }}
	 }
 function ScoreAlignment( nbPionAlign)
{
	var res=0;
     switch(nbPionAlign){
	case 1:
	
	res=1;
		 break;
    case 2:
	res=5;
		 break;
    case 3:
	res=50;
		 break;
     case 4:
	res=1000;
		 break;
     return res;
}
} */
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

angular.module("myapp",[])
.controller("Puissance4Controller",function($scope){
	$scope.StatusW=true;
	$scope.greeting = 'Welcome to play Power4 Game';
	$scope.clickMe = function() {
	$scope.StatusW=false;
	$scope.StatusG=true;
	$scope.StatusR=true;
	$scope.player=1;
	$scope.pc=1;
	$scope.play=1;
$("#myModal").modal("show");
	}	
	$scope.matrix=generateMatrix();
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
				//alert("fin");
				}
	
	}
	/* 
	if($scope.matrix!=0){
		$scope.scoreP1=score($scope.matrix,1);
		//alert($scope.scoreP1);
		$scope.scoreP2=score($scope.matrix,2);
		//alert($scope.scoreP2);
	} */
	
		$scope.image = function(element){
	
		for( i=0;i<ImCorrespond.length;i++){
	
			if (ImCorrespond[i].val == element){
		
				$scope.img=ImCorrespond[i].name;
				
				break;
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
}
);


	
	
