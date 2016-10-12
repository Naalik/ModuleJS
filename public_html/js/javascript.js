/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var reponse = Math.round((Math.random()*100)+1);
var essai = 0;
alert(reponse);
do{
var texte = prompt('entrer un chiffre entre 1 et 100');
essai += 1;
if(texte == reponse){
    alert('Win !');
    switch(essai){
        case 1:
            alert('Génial !');
            break;
        case 2:
            alert('Bien !');
            break;
        case 3:
            alert('Cool, bro.');
            break;
        default:
            alert('Bof.');
            break;
    }
}else{
    if( texte > reponse){
        alert('trop grand !');
    }else{
        alert('trop petit !');
    }
}
}while(texte != reponse);


