

function readonly(target, key, descriptor){
    descriptor.writable = false; //modifier la visibilité à true si vous voulez redéfinir la méthode
    return descriptor;
}
//decorateur callabke avec passage de paramètres
function modify(model: string){
    let newModel = model;
    return function (target, key, descriptor){
        descriptor.value = () => newModel;
    };
}
class Bike {
    @readonly
    speed(){
        return 8;
    }
    @modify('electric')
    model(){return 'normal';}
}
let bike = new Bike;

bike.speed = () =>5;//on tente de redéfinir la méthode impossible car writable à false
//la méthode retournera 8 car elle n'est accessible qu'en lecture
console.log(bike.speed());
console.log(bike.model());

