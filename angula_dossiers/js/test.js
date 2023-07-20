"use strict";
//Types de variables en TYpeScript
//let |const nomVariable: typeVariable = valeur
//number
var x = 5;
var pi = 3.14;
var hex = 0xf00d; //hexadecimal
var bin = 1; //binaire
var salaire = 2500383500;
console.log(salaire);
//string
var color = "blue";
//bolean
var isFree = false;
//array
var arr = [1, 5, 3, 4]; //array de number ou un array constitué
console.log(arr);
var str = ['a', 'b', 'c'];
var arr2 = ["a", 2];
var myStr = "555";
//Les types de fonctions
/**
 *
 * @param a
 * @param b
 * @returns
 */
function add(a, b) {
    return Number(a) + b;
}
console.log(add("4", 2));
function sayHello() {
    console.log("hello !");
}
