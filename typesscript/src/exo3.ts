//définition de l'interface <=> contrat
interface Duck{
    name: string;
    swim(): string;
}
class Thing implements Duck{
     constructor(
       public name: string
    ){

    }
     swim():string {
        return `Nage comme un ${this.name}`;
    }
}
const myAnimal = new Thing("canard");
console.log(myAnimal.swim());
