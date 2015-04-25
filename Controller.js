function matriceInitiale()
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
	
	var mousePos = { x: 0, y: 0 };
    $(document).mousemove(function(event) {
        mousePos.x = event.pageX;
        mousePos.y = event.pageY;
    });


	
		/*function posCase(t,valeurCase){
		alert("some");
		var newj;
		var posx= mousePos.x;
		if (posx >335 && posx<825) { // verifier les bordures 

			if (posx<755) {
			newj=5;
			}
			if  (posx<685) {
			newj=4;
			}
			if (posx<615) {
			newj=3;
			}
			if (posx<545 ){
			newj=2;
			}
			if  (posx<475 ){
			newj=1;
			}
			if (posx<405){
			newj=0;
			}
		}
		
		i=0;
		while(t[i][newj]!=0){
		i++;
		}
		
		t[i][newj]=valeurCase;
		return(t);
		//joueur1=suiv;				changer l'emplacement
		
			
}


*/

	
	
	
	
	
	

var valeurCase =1; // essai sur le joueur 1



var correspondre = [{val: 0, name:'images/Video.jpg'},{val: 1, name:'images/caserouge.jpg'},{val: 2, name:'images/casejaune.jpg'}];

angular.module("myapp",[])
.controller("Puissance4Controller",function($scope){
	$scope.etatW=true;
	$scope.greeting = 'Welcome';

//$scope.matrix=matrix;

	$scope.clickMe = function() {
	$scope.etatW=false;
	$scope.etatG=true;
	$scope.etatR=true;

	}

	$scope.matrix=matriceInitiale();	
	
	$scope.clickCase = function(element){
	


			for( i=5;i>-1;i--){
		$scope.s=i;
				if ($scope.matrix[i][element]==0){
		
		$scope.matrix[i][element]=1;	
					
					break;
				}
					
			}

	
			
//alert(matrix[i][element]);
		

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
	
	
	