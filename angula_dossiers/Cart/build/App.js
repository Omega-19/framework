"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"
Object.defineProperty(exports, "__esModule", { value: true });
//T, U, V, W, X, Y, Z
class A {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const P6 = new A("Nicole", 23);
console.log(P6);
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
let products = [];
MockProducts_1.MockDetails.forEach((detail) => {
    MockProducts_1.MockDelivery.forEach((delivery) => {
        if (detail.id === delivery.id) {
            products.push(new Product_1.Product(detail, delivery.delivery));
        }
    });
    return products;
});
console.log(products);
//AFFICHER les produits dont l'option est spéciale
let special = products.filter((el) => el.option === MockProducts_1.Delivery.Special);
//  let special =  products.filter((el){
//     if (el.option === Delivery.Special) {
//         console.log("specials products");
//         console.log(special);
//     }
//  })
console.log("specials products");
console.log(special);
