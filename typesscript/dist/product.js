"use strict";
`use strict`;
class Product {
    constructor(name) {
        this._ref = 1000;
        this.name = name;
        this.ref = 1000;
    }
    set name(name) {
        this._name = name;
    }
    set ref(ref) {
        this._ref = ref;
    }
    get name() {
        return this._name;
    }
    get ref() {
        return this._ref;
    }
}
let bike = new Product('Super Bike');
console.log(bike.name);
let bike1 = new Product('');
console.log(bike1.ref);
