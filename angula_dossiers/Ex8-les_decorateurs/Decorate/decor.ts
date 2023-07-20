
// function Feature(config){
//     return function (target){
//         //permet de définir une nouvelle propriété 
//         Object.defineProperty(target.prototype)
//     }
// }


// @Feature({
//     action: "Nage comme un canard"
// })

/**
 * 
 * @param obj 
 * @param method 
 * @param descripteur 
 */

function decorer(obj: any, method: string, descripteur: PropertyDescriptor){
    const originalMethod = descripteur.value;
    descripteur.value = function(this: User, ...args: []){
        originalMethod.apply(this, args);
    }
console.log("Appelle du décorateur");
console.log(descripteur);

        descripteur.value();
    }

class User {
    constructor(
        public name: string ="Valeur par défaut"
    ){ }
    @decorer
    greet(){
        console.log(`Salut ${this.name}`);  
    }
}

let u = new User("PossiFa");
console.log(u.greet());
/********//////////******************** */ */

function logclass(target: any){
    console.log(` Classe ${target.name} a été décorée`);
}
@logclass
class MaClasse {
    constructor(){
        console.log("Instance de MaClasse créée");
    }
}


/**
 * NB : le décorateur ne s'applique que sur une classe ou dans une classe.
 * les cinq endroits que peut occuper un décorateur
 * 
 * 1.sur une class
 * 2.propriété
 * 3.méthode
 * 4.accesseur (getter et setter)
 * 5.paramètres d'une méthode
 */

function Decorateur(){

}

@Decorateur
//decorateur de class
class User{
    @Decorateur//decorateur de propriété
    private fname: string;
    constructor(fname: string){
        this.fname = fname
    }
    @Decorateur//decorateur de methode
    greet(): void{
        console.log("Salut", this.fname);
        
    }
    @Decorateur//decorateur d'accesseur
    get fname(): string{
        return this.fname;
    }
   
    set fname(@Decorateur newValue: string){//decorateur de paramètre
        this.fname = newValue
    }
}

@sealed
class BugReport {
    type =  "Rapport"
    title: string;
    constructor(t: string){
        this.title = t;
    }
}

function sealed(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype)
}
let obj = new BugReport("Pas d'accès internet");
obj.title

BugReport.prototype.nouvelleMethode = function(){
    console.log("je suis une nouvelle méthode");
    
}