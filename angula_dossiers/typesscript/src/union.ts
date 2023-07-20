//Union des Types ( | ) pipe
function add(a: number | string, b: number | string): number{
    if (typeof a === "string" && typeof b === "string") {
        return parseInt(a) + parseInt(b);
    }else if(typeof a === "number" && typeof b === "number"){

        return a + b;
    }
    return -1;
}
console.log(add("moi",8));
// /////////////
type Carre = {
x: number,
y: number
}

type Circle = {
cx: number,
cy: number,
cr:number
}

// ***********************
let shape: Carre | Circle = {
    x: 50,
    y:50,
    cx:5,
    cy:9,
}
// **************************
type User = {
    readonly id?: number,// il est optionnel et en lecture seule
    fname: string,
    lname: string,
    age?: number// il est optionnel
}

let u: User = {
    id: 1,
    fname: "John",
    lname: "Doe",
    age: 98
}

u.fname = "bottle";
console.log(u);
