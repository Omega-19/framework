"use strict";
class Thing {
    constructor(name) {
        this.name = name;
    }
    swim() {
        return `Nage comme un ${this.name}`;
    }
}
const myAnimal = new Thing("canard");
console.log(myAnimal.swim());
