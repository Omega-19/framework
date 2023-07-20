"use strict";
class Music {
    constructor() {
        this._instrument = 'nothing';
    }
    play() {
        return "play music";
    }
}
class Guitar extends Music {
    constructor() {
        super();
        this._instrument = 'saxophone';
    }
    getInstrument() {
        return `${this._instrument}`;
    }
    makeSound() {
        return "Do Ré Mi Fa Sol La Si Do";
    }
}
let myInstrument = new Guitar();
console.log(myInstrument.getInstrument());
