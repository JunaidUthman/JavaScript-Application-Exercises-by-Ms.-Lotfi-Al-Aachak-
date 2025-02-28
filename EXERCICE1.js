// 1)
function voiture(model , marque , annee , type , courbant){
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.courbant = courbant;
}
// 2)
let listVoiture = [
    new voiture("212" , "mercedece" , 2019 , "auto" , "diezel"),
    new voiture("01" , "range" , 1750 , "auto" , "diezel"),
    new voiture("1012" , "mercedece" , 1899 , "auto" , "gazoile")
]

//3)
function hundai(model , marque , annee , type , courbant , serie , hybride){
    voiture.call(this ,model , marque , annee , type , courbant);
    this.serie=serie;
    this.hybride=hybride;

    this.alarmer = function(){
        console.log("cette voiture 'hundai' a un alamrme")
    }
}

hundai.prototype = Object.create(voiture.prototype ,{
    constructor : {
        value : hundai,
        enumerable : false,
        writable : true,
        configurable : true
    }
});

function Ford(model , marque , annee , type , courbant , options){
    voiture.call(this ,model , marque , annee , type , courbant)
    this.options = options;
}

Ford.prototype = Object.create(voiture.prototype , {
    constructor : {
        value : hundai,
        enumerable : false,
        writable : true,
        configurable : true
    }
});

let f = new Ford("212" , "mercedece" , 1900 , "auto" , "diezel" , ["demarer" , "alumer"])
let h = new hundai("212" , "mercedece" , 1700 , "auto" , "diezel" , 1.2 , true)
console.log(f)

// 4) trie des voitures selon la liste
listVoiture.push(f);
listVoiture.push(h);


console.log("avant le trie")
console.log(listVoiture)



for(let i=0 ; i<listVoiture.length - 1 ; i++){
    let min = i;
    for(let j=i+1 ; j<listVoiture.length ; j++){
        if(listVoiture[min].annee > listVoiture[j].annee){
            min = j;
        }
    }
    if(listVoiture[i].annee != listVoiture[min].annee ){
        let tmp = listVoiture[i];
        listVoiture[i]=listVoiture[min];
        listVoiture[min] = tmp;
    }

}

console.log("apres le trie")
console.log(listVoiture)




