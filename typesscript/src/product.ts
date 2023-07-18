`use strict`

//définition de la classe

class Product {
    
    // private _name: string; // privé dans la classe actuelle 
    protected _ref: number = 1000; // protégé dans la classe actuelle et classe fille
    constructor(name: string){
        this.name = name; //setter assigne une valeur à l'attribut _name
        this.ref = 1000;//setter assigne une valeur à l'identifiant _ref
    }
    //setter
    set name(name: string){
        this._name = name;
    }
    set ref(ref:number){
        this._ref = ref;
    }
    //getter afficher une valeur dans le code courant
    get name(): string {
        return this._name;
    }
    get ref(): number {
        return this._ref;
    }
}
//instance de la classe
let bike = new Product('Super Bike');
console.log(bike.name); // affichera Super Bike

let bike1 = new Product('');
console.log(bike1.ref);


