 abstract class Music {
    protected _instrument: string = 'nothing';
    abstract makeSound(): string;
    play(): string {
        return "play music";
    }
}

//classe étendue 

class Guitar extends Music{
    /**
     * constructor
     */
    constructor( ) {
        super();
        this._instrument = 'saxophone'
    }
    getInstrument(): string {
        return `${this._instrument}`;
    }    
    makeSound(): string {
        return "Do Ré Mi Fa Sol La Si Do";
    }
}
let myInstrument = new Guitar();
console.log(myInstrument.getInstrument());
