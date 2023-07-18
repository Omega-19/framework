"use strict";
class Music {
    constructor(_instrument) {
        this._instrument = _instrument;
    }
    play() {
        return "play music";
    }
}
class Guitar extends Music {
    constructor(_instrument) {
        super(_instrument);
        this._instrument = _instrument;
    }
    getInstrument() {
        return `${this._instrument}`;
    }
}
let myInstrument = new Guitar("saxophone");
console.log(myInstrument.getInstrument());
