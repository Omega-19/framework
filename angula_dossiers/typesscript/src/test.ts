`use strict`
//Types de variables en TYpeScript

//let |const nomVariable: typeVariable = valeur

//number

// let x: number = 5;
const pi: number = 3.14;
let hex: number =0xf00d;//hexadecimal
let bin: number  = 0b0001;//binaire

let salaire: number = 2_500_383_500;
console.log(salaire);

//string
// let color: string = "blue";
//bolean
// let isFree: boolean = false;
//array
// // let arr: number[] = [1, 5, 3, 4]//array de number ou un array constitué
// console.log(arr);


// let str: string[] = ['a', 'b', 'c'];

// let arr2: [string, number] = ["a", 2];
// let myStr = "555";

//Les types de fonctions
/**
 * 
 * @param a 
 * @param b 
 * @returns 
 */

// function add(a: string, b:number): number {
    
//     return  Number(a) + b;
// }

// console.log(add("4", 5));
// function sayHello(): void {
//     console.log("hello !");
// }

/**
 types de variables
 -number: les nombres, qu'ils soient entiers ou à virgule
 - string: représente les chaînes de caractères 
 -boolean: représente les valeurs boléennes, c-a-dire true or false
 -array: représente un tableau contenant des éléments du même type
 -object: représente un type "d'objet"
 -null: représente la valeur "null"
 -undefined: représente la valeur "undefined"

 Types de variables TS
 -any: représente un type non spécifié ou dynamique.
 -unknown: représente un élément dont on ne connait pas le type 
 -enum: représente un ensemble de valeurs nommées
 -tuple: représente un tableau avec un nombre fixe d'éléments de types différents. 
 */

//  let x: any = 5;


//  if (typeof x === "string") {
//     console.log(x.toUpperCase());
    
//  }
 const enum Status{
    PAID = 'payee',
    PENDING = 'pending',
    DENIED = 'denied',
 }
let x: string;
function verify() {
    if (true) {
         x = Status.PAID
    }
}
console.log(Status.PAID);
// console.log(x);
console.log(verify());
//base
type UserType = {
    fname : string;
    lname :string;
    age : number
};

//method 1
// let user: {
//     fname : string;
//     lname :string;
//     age : number
// };

//methode2
let user: UserType = {fname: "john", lname:"Doe", age: 24}
console.log(user.age);
let user2: UserType = {fname: "Jean", lname:"Doe", age: 24}
console.log(user2.fname);

/**
 * créez un alias de type pour le rectangle suivant: 
 * const rect = {
 * height: 35,
 * width:50,
 * }
 */

//réponse à la consigne

type Rect = {
        height: number;
        width:number;
}
//************************************************//* */

const userect: Rect = {height: 35, width: 50}
console.log(userect.height);

//nous avons créer un alias pour le type "string"
type carYear = string;
type Mynumber = number
const car : {
    carYear: string;
} = {carYear: "2023"}
console.log(car);
//************************************************* */
interface Animal {
    specie: string,
    name: string,
    legs: number
} 
const animal: Animal = {
    name:"Booba",
    specie: "Ours",
    legs: 4
}
console.log(animal.specie);


/**
 * créez un interface de type pour le rectangle suivant: 
 * const rect = {
 * height: 35,
 * width:50,
 * }
 */

//réponse à la consigne

interface Recto {
     height: number;
        width:number;
}
const recta : Recto ={
    height: 35,
    width:50,
    }
    console.log(recta.width);
    


