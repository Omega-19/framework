
//function générique
//T = TypeVariable
function test<T>(arg: T): T{

    return arg;
}
test<string>("5")
test<string>("Je suis comme je suis")
test<number>(8542646454567)
console.log(test<string>("5"));
console.log(test<string>("Je suis comme je suis"));
console.log(test<number>(8542646454567)
);
