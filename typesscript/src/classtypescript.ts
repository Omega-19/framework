//Les classes
class Person {
    // private _fname: string; // propriété | membre |champs de la classe
    // private _lname: string;// propriété | membre |champs de la classe
    // constructor(fname: string, lname: string){
    //     this._fname = fname;
    //     this._lname = lname;
    // }
    //la promotion des constructor

    constructor(
        private fname: string,
        private lname: string,
        private age: number = 63,
    ){ }
    // get fname(): string{
    //     return this._fname;
    // }
    //l'un ou l'autre Qd c'est la première forme de constructor. et dans le second cas on ne fait pas usage des varres de 8
    getfname(): string{
        return this.fname;
    }
}
const p1 = new Person("Nicole", "Vigan");
console.log(p1);


class Root {
    constructor(
        protected fname: string,
        protected lname: string
        ){ }
        getFullName(): string{
            return `${this.fname} ${this.lname}`;
        }
}
class Programmer extends Root{
    constructor(
        fname: string, 
        lname: string, 
        private languages: string[]
        ){
        super(fname,lname);
    }
    getLanguages(): string{
        return `Si ${this.fname} ${this.lname} maitrise les languages ${this.languages.join(",")} alors lance un appelle  automatique sur mon num`;
    }
}
const using = new Programmer("nicol", "vigan", [ "css", "html", "js"]);

console.log(using.getFullName());
console.log(using.getLanguages());

console.log(using);


let usaa = new Root("nicol", "vigan");
console.log(usaa);



