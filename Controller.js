function generateMatrix()
{
var matrix= new Array(6); 

	for(var i=0;i<6;i++){
		matrix[i]=new Array(6);
	}
    // à remplacer par largeur et longueur variable
	for(var i=0;i<6;i++){	
		for(var j=0;j<6;j++){
			matrix[i][j]=0;
		}
	}
	return(matrix);		
}
	
function chercherHorizentale(t,posx){
gagne=false;
	var s=0;
	var largeur=6;
	var k=largeur-4;
	while (s<k){
		if ((t[posx][s]==t[posx][s+1])&&(t[posx][s+2]==t[posx][s+3])&&(t[posx][s]==t[posx][s+2])&&(t[posx][s]!=0)){ 
			gagne=true;
			s++;
		}
	}
	return(gagne);
}

function chercherVerticale(t,posy){
gagne=false;
	s=0;
	k=pos-4;
	while ( s<k ){
		if ((t[s][posy]==t[s+1][posy])&&(t[s+2][posy]==t[s+3][posy])&&(t[s][posy]==t[s+2][posy])&&(t[s][posy]!=0)){
		gagne=true;
		s++;
		}
	}
	return(gagne);
}
function chercherDiagonale(t,posy,posx){
gagne=false;
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
var jouer=1;
/* function diagonale_PC()
{
	
} */




function fin(t,posx,posy,indice_joueur){
		//alert(posx);
		//alert(posy);
		pp=chercherDiagonale(t,posy,posx);
		
		//alert(pp);
	if ((chercherDiagonale(t,posy,posx))==false){  //||chercherVerticale(t,posy)||chercherHorizentale(t,posx)
	return(1);
		if(indice_joueur==1){
			return(1);
		}
		if(indice_joueur==2 ){
			return(2);
		}

	}
	return(0);
}	

/* ajouterCoup( ){
	
	
	
} */
var correspondre = [{val: 0, name:'p4_empty.png'},{val: 1, name:'p4_player_1.png'},{val: 2, name:'p4_player_2.png'}];
var joueur="PC";
angular.module("myapp",[])
.controller("Puissance4Controller",function($scope){
	$scope.etatW=true;
	$scope.greeting = 'Welcome';
	$scope.clickMe = function() {
	$scope.etatW=false;
	$scope.etatG=true;
	$scope.etatR=true;
	$scope.joueur=1;
$("#myModal").modal("show");
	}	
	$scope.matrix=generateMatrix();
	
	/* $scope.resoudrejeu=function(){
		
				
				
				
			}	 */
			
	$scope.clickCase = function(element){
	
			for( i=5;i>-1;i--){
		$scope.posx=i;
		
				if ($scope.matrix[i][element]==0){
		
		$scope.matrix[i][element]=$scope.joueur;
			
					
					break;
				}
					
			}
			$scope.posy=element;
			
			
				if ($scope.joueur == 1){
					$scope.joueur=2;
				}
				else{
					$scope.joueur=1;
					
				}
				//alert($scope.matrix[1][1]);
				$scope.etatJeu=fin($scope.matrix,$scope.posx,$scope.posy,$scope.joueur);
				//alert($scope.etatJeu);
				if ($scope.etatJeu!=0){
				//alert("fin");
				}
	
	}
		$scope.image = function(element){
		
		for( i=0;i<correspondre.length;i++){
	
			if (correspondre[i].val == element){
		
				$scope.img=correspondre[i].name;
				
				break;
			}	
		}
		}

 //debut de la partie 
$scope.etatcase=false;
$scope.OnMouseEnter=function(){
$scope.etatcase=true;
} 
//restart partie 
$scope.ClickToRestart= function() {
$scope.etatG=false;
$scope.etatW=true;
}
}
);


	
	


function chercherVerticale(t,posy){
gagne=false;
	s=0;
	k=pos-4;
	while ( s<k ){
		if ((t[s][posy]==t[s+1][posy])&&(t[s+2][posy]==t[s+3][posy])&&(t[s][posy]==t[s+2][posy])&&(t[s][posy]!=0)){
		gagne=true;
		s++;
		}
	}
	return(gagne);
}




function chercherDiagonale(t,posy,posx){
gagne=false;
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
alert(t[t1][t2]);
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




function fin(t,posx,posy,indice_joueur){
//if(t[posx][posy]==1){
	//		return(1);
		//}
		alert(posx);
		alert(posy);
		pp=chercherDiagonale(t,posy,posx);
		
		alert(pp);
	if ((chercherDiagonale(t,posy,posx))==false){  //||chercherVerticale(t,posy)||chercherHorizentale(t,posx)
	return(1);
		if(indice_joueur==1){
			return(1);
		}
		if(indice_joueur==2 ){
			return(2);
		}

	}
	return(0);
}	
	
	
	



var correspondre = [{val: 0, name:'images/casevide.png'},{val: 1, name:'images/caserouge.jpg'},{val: 2, name:'images/casejaune.jpg'}];

angular.module("myapp",[])
.controller("Puissance4Controller",function($scope){
	$scope.etatW=true;
	$scope.greeting = 'Welcome';

//$scope.matrix=matrix;

	$scope.clickMe = function() {
	$scope.etatW=false;
	$scope.etatG=true;
	$scope.etatR=true;
	$scope.joueur=1;
	}

	$scope.matrix=matriceInitiale();	
	
	$scope.clickCase = function(element){
	


			for( i=5;i>-1;i--){
		$scope.posx=i;
		
				if ($scope.matrix[i][element]==0){
		
		$scope.matrix[i][element]=$scope.joueur;
			
					
					break;
				}
					
			}
			$scope.posy=element;
			
			
				if ($scope.joueur == 1){
					$scope.joueur=2;
				}
				else{
					$scope.joueur=1;
					
				}
				alert($scope.matrix[1][1]);
				$scope.etatJeu=fin($scope.matrix,$scope.posx,$scope.posy,$scope.joueur);
				alert($scope.etatJeu);
				if ($scope.etatJeu!=0){
				alert("fin");
				}
				
				

	}
		
		
		
		
		
		$scope.image = function(element){
		
		for( i=0;i<correspondre.length;i++){
	
			if (correspondre[i].val == element){
		
				$scope.img=correspondre[i].name;
				
				break;
			}
			
		}
		}

 //debut de la partie
 
//$scope.matrix=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
$scope.etatcase=false;
$scope.OnMouseEnter=function(){
$scope.etatcase=true;
} 
//restart partie 
$scope.ClickToRestart= function() {
$scope.etatR=false;
}
}
);

//var matrix=matriceInitiale();
//var t = poseCase(	
	
	
	
