
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier 
// pour extraire uniquement les produits dont l'option delivery est "special"

//T, U, V, W, X, Y, Z

class A<T, U>{
    constructor(
        public x: T,
        public y: U
    ){}
}
const P6 = new A<string,  number>("Nicole",23);
console.log(P6);


import { Product } from "./Product";

import { Delivery, Details, MockDelivery, MockDetails } from "./data/MockProducts";


let products: Array<Product<Details, Delivery>> = [];

 MockDetails.forEach((detail)=>{
    MockDelivery.forEach((delivery) =>{
        if (detail.id === delivery.id) {
             products.push(new Product(detail, delivery.delivery))
        }
    })
    return products;
 });
console.log(products);

 //AFFICHER les produits dont l'option est spéciale

 let special = products.filter((el) => el.option === Delivery.Special);
//  let special =  products.filter((el){
//     if (el.option === Delivery.Special) {
        
//         console.log("specials products");
//         console.log(special);
//     }
//  })
 console.log("specials products");
 console.log(special);
 



