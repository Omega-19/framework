// function Feature(config){
//     return function (target){
//         //permet de définir une nouvelle propriété 
//         Object.defineProperty(target.prototype)
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @Feature({
//     action: "Nage comme un canard"
// })
/**
 *
 * @param obj
 * @param method
 * @param descripteur
 */
function decorer(obj, method, descripteur) {
    var originalMethod = descripteur.value;
    descripteur.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        originalMethod.apply(this, args);
    };
    console.log("Appelle du décorateur");
    console.log(descripteur);
    descripteur.value();
}
var User = /** @class */ (function () {
    function User(name) {
        if (name === void 0) { name = "Valeur par défaut"; }
        this.name = name;
    }
    User.prototype.greet = function () {
        console.log("Salut ".concat(this.name));
    };
    __decorate([
        decorer
    ], User.prototype, "greet", null);
    return User;
}());
var u = new User("PossiFa");
console.log(u.greet());
/********/ /////////******************** */ */
function logclass(target) {
    console.log(" Classe ".concat(target.name, " a \u00E9t\u00E9 d\u00E9cor\u00E9e"));
}
var MaClasse = /** @class */ (function () {
    function MaClasse() {
        console.log("Instance de MaClasse créée");
    }
    MaClasse = __decorate([
        logclass
    ], MaClasse);
    return MaClasse;
}());
/**
 * NB : le décorateur ne s'applique que sur une classe ou dans une classe.
 * les cinq endroits que peut occuper un décorateur
 *
 * 1.sur une class
 * 2.propriété
 * 3.méthode
 * 4.accesseur (getter et setter)
 * 5.paramètres d'une méthode
 */
function Decorateur() {
}
var User = /** @class */ (function () {
    function User(fname) {
        this.fname = fname;
    }
    User.prototype.greet = function () {
        console.log("Salut", this.fname);
    };
    Object.defineProperty(User.prototype, "fname", {
        get: function () {
            return this.fname;
        },
        set: function (newValue) {
            this.fname = newValue;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Decorateur //decorateur de propriété
    ], User.prototype, "fname", void 0);
    __decorate([
        Decorateur //decorateur de methode
    ], User.prototype, "greet", null);
    __decorate([
        Decorateur //decorateur d'accesseur
        ,
        __param(0, Decorateur)
    ], User.prototype, "fname", null);
    User = __decorate([
        Decorateur
        //decorateur de class
    ], User);
    return User;
}());
var BugReport = /** @class */ (function () {
    function BugReport(t) {
        this.type = "Rapport";
        this.title = t;
    }
    BugReport = __decorate([
        sealed
    ], BugReport);
    return BugReport;
}());
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var obj = new BugReport("Pas d'accès internet");
obj.title;
BugReport.prototype.nouvelleMethode = function () {
    console.log("je suis une nouvelle méthode");
};
