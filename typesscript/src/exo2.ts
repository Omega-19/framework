 abstract class Music {
    protected _instrument: string;
    abstract makeSound(): string;
    constructor(_instrument: string){
        this._instrument = _instrument
    }
    play(): string {
        return "play music";
    }
}

//classe étendue 

class Guitar extends Music{
    /**
     * constructor
     */
    constructor(
        protected _instrument: string,
    ) {
        super(_instrument);
    }
    getInstrument(): string {
        return `${this._instrument}`;
    }    
}
let myInstrument = new Guitar("saxophone");
console.log(myInstrument.getInstrument());
