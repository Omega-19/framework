//class abstract
/*
 * Une classe abstraite est un concept de la POO.
 
 * C'est une classe qui ne peut être instancier directement, c'est à dire qu'on ne peut pas créer d'objets directement à partir de cette classe. 
 * Au lieu de cela elle est conçue pour être utilisée comme une classe à partir de laquelle les autres peuvent hériter.
 * ex: abstract nomde la classeAbstraite
 
 * 1*Impossible à extancier
 
 * 2*Méthodes abstraites: une classe abstraite peut déclarer des méthodes abstraites, c'est à dire des méthodes qui n'ont pas de corps (pas de code d'implémenttion). Ces méthodes sont uniquement déclarées avec leur signature (nom et paramètres).
 
 * La responsabilité d'implémenter ces méthodes incombe aux classes qui héritent de la classe abstraite.
 
 * 3- Héritage: les classes qui héritent d'une classe abstraite (appelées classes dérivées, sous-classes, enfant) doivent fournir une implémentation pour toutes les méthodes abstraites de la classe abstraites.

 */

abstract class Forme {
    afficher() {
        console.log("Je suis une forme géométrique");
    }
    abstract calculerSurface(): number;
}

class Rectangle extends Forme{

calculerSurface(): number{
    throw new Error ("Method not implemented.")
}
    constructor(

        public longueur: number, 
        public largeur: number
        ) {
        super();
    } 
   
}
let rect = new Rectangle(2, 5);
rect.afficher();
console.log(rect.calculerSurface());


class Cercle extends Forme{
    constructor(
        public rayon:number
    ){super();}
    calculerSurface(): number {
        return  2 * Math.PI * this.rayon * this.rayon;
    }  
}
class Triangle extends Forme{
    constructor(
        public base: number,
        public hauteur: number
    ){super();}
    calculerSurface() {
        return 0.5 * this.base * this.hauteur;
    }  
}