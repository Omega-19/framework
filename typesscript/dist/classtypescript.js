"use strict";
class Person {
    constructor(fname, lname, age = 63) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getfname() {
        return this.fname;
    }
}
const p1 = new Person("Nicole", "Vigan");
console.log(p1);
class Root {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}
class Programmer extends Root {
    constructor(fname, lname, languages) {
        super(fname, lname);
        this.languages = languages;
    }
    getLanguages() {
        return `Si ${this.fname} ${this.lname} maitrise les languages ${this.languages.join(",")} alors lance un appelle  automatique sur mon num`;
    }
}
const using = new Programmer("nicol", "vigan", ["css", "html", "js"]);
console.log(using.getFullName());
console.log(using.getLanguages());
console.log(using);
let usaa = new Root("nicol", "vigan");
console.log(usaa);
