/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var reponse = Math.round((Math.random()*100)+1);
alert(reponse);
do{
var texte = prompt('entrer un chiffre entre 1 et 100');
if(texte == reponse){
    alert('Win !');
}else{
    if( texte > reponse){
        alert('trop grand !');
    }else{
        alert('trop petit !');
    }
}
}while(texte != reponse);


