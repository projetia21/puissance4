// j est l'indice de la colonne selectionnée 

// indice joueur remplir avec des  1 pour le premier joueur et des 2 pour le 2eme joueur

//n hauteur de la grille
// l largeur de la grille

// type 1 si multijoueurs 2 sinon
var gagne=false;
var type;

function case_a_remplir(j,n,indice_joueur){


while( t[i][j]==0 && j<n ) {
i++;
}
if (j<n) {
t[i][j]=indice_joueur;
pos=i;
}
}

function chercher_horizentale(pos){
s=0;
k=l-4;
while ( s<k){
if ((t[pos][s]==t[pos][s+1])&&(t[pos][s+2]==t[pos][s+3])&&(t[pos][s]==t[pos][s+2])&&(t[pos][s]!=0)){
gagne=true;
s++;
}


function chercher_verticale(j,pos){
s=0;
k=pos-4;
while ( s<k ){
if ((t[s][j]==t[s+1][j])&&(t[s+2][j]==t[s+3][j])&&(t[s][j]==t[s+2][j])&&(t[s][j]!=0)){
gagne=true;
s++;
}

}

function chercher_diagonale(j,pos){
s=0;
if (j<pos){
t2=0;
t1=pos-j;
}
else{
t1=0;
t2=j-pos;
}
while(t1<l && t2<n ){
if ((t[t1][t2]==t[t1+1][t2+1])&&(t[t1+2][t2+2]==t[t1+3][t2+3])&&(t[t1][t2]==t[t1+2][t2+2])&&(t[t1][t2]!=0)){
gagne=true;
s++;
}

}
}

function fin(gagne){
if (gagne==true) then {

if(indice_joueur==1)
	{
		//feu d'artifice avec indication que le joueur 1 a gagner
	}
	if(indice_joueur==2 && type==1)
	{
		//feu d'artifice avec indication que le joueur 2 a gagner	
	}

}
}

function level0(pos,i,j){

while(t[pos][j]==0){
if ((pos<l){
pos++;}
else {
j++;}
}
t[pos][j]==2;

}

function commencer()
{
	for(i=0;i<7;i++)
{	
	for(j=0;j<6;j++)
	{
	t[i][j]=0;
	}
	}
		cases=a.toString()+b.toString();
		}


