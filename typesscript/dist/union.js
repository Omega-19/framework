"use strict";
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
console.log(add("moi", 8));
let shape = {
    x: 50,
    y: 50,
    cx: 5,
    cy: 9,
};
let u = {
    id: 1,
    fname: "John",
    lname: "Doe",
    age: 98
};
u.fname = "bottle";
console.log(u);
