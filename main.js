/** Daily Challenge du jour 5 : on nous demande d'enregistrer sur console.log les paroles de notre propre chanson 99 Bottles of Beer.*/

/**
 *@author: AKOU JEAN VIVIEN
 * @param:nombre de bouteilles
 * @param: nombre de bouteilles a selectionner i 
 *@returns: la difference entre le nombre de bouteilles disponibles et le nombre de bouteilles disponibles
 */

let  bouteille = prompt("entrez le nombre de bouteilles ")

/* part 1 : cette fonction effectue une verication du nombre , elle retourne une erreur si le nombre de bouteilles est incorection sinon elle
 declenche la fonction suivante BottlesofBeer() */
function verification(bouteille) { 
    if ( isNaN(bouteille) && bouteille < 0 ) {
         alert(`erreur entrez un nombe de bouteilles valide`)
    }else   {alert(`nous demarrons avec ${bouteille}" bouteilles`)
        BottlesofBeer(bouteille)}
}verification(bouteille)

/* part 2 : cette fonction effectue l'ensemble des operations sur le nombre de bouteilles selectionner dans la fonction verification() */
function BottlesofBeer(bouteille) {
let i = 0
let  Nbbouteille = parseInt(bouteille) 
while (i< Nbbouteille) {
     Nbbouteille -= i// decremente de i a chaque operation
    if (i>0) {

        if (Nbbouteille < 1) {
            console.log("Pas de bouteilles de bière sur le mur");
            return;
        }else if (i == 1) {
            console.log(`prenez en _${i}_ passez-la autour de vous` )
            console.log(`nous avons maintenant ${Nbbouteille } bouteilles` ) 
           } else {
            console.log(`prenez en _${i}_ passez-les autour de vous` )
            console.log(`nous avons maintenant ${Nbbouteille } bouteilles` )  
           }
    }
   i++
    }
console.log("Pas de bouteilles de bière sur le mur");
}
