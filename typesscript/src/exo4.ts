

class Recipe {
    name: string;
    star?: number; //attribut facultatif
    // note: number[];
}

let recipes: Recipe = [

    {
        name : "Nicole"
    },
    {
        star? : 5000
    },
] 
    // note : [10, 5, 18]
//pour le type notation équivalente Array<Recipe>


console.log(recipes);
