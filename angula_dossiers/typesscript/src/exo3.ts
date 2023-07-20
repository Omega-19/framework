//définition de l'interface <=> contrat
/**
 * En typescript, lorsqu'une classe implémente une interface, elle doit fournir une implémentation pour toutes les propriétés et méthodes déclarées dans l'interface.
 * ex:
 * interface Mon Interface{
 * propriété: type;
 * méthode(): returnType;
 * }
 * 
 * class MaClasse implements MonInterface{
 * propriété: type;
 * constructor(p: tpe){
 * this __> 
 * }
 * }
 */
interface Duck{
    name: string;
    swim(): string;
}
class Thing implements Duck{
    constructor(){
        this.name =this.name,
        swim():string
    }
     name: string;
     swim():string {
        return `Nage comme un ${this.name}`;
    }
}
const myAnimal = new Thing();
console.log(myAnimal.swim());
