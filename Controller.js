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


	
		function posecase(t,val){
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
		
		t[i][newj]=val;
		return(t);
		//joueur1=suiv;				changer l'emplacement
		
			
}




	
	
	
	
	
	
var correspondre = [{val: 0, name:'casevide.png'},{val: 1, name:'caserouge.jpg'},{val: 2, name:'casejaune.jpg'}];






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
$scope.image = function(element){
		
		for( i=0;i<correspondre.length;i++){
	
			if (correspondre[i].val == element){
		
				$scope.img=correspondre[i].name;
				
				break;
			}
			
		}
		}
		
$scope.clickCase = function(element){
		

		}
 //debut de la partie
 $scope.matrix=matriceInitiale();
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
	
	
	