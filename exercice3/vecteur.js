class Vecteur2D{
    x;
    y;
    constructor(x=0 , y=0){
        this.x=x;
        this.y=y;
    }

    add(v){
        let v1 = new Vecteur2D(this.x + v.x , this.y + v.y)
        return v1
    }

    afficher(){
        console.log("x ="+this.x+" & y ="+this.y)
    }
}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(1 , 2)

// // affihage directe
// console.log("x ="+v1.x+" & y ="+v1.y)
// console.log("x ="+v2.x+" & y ="+v2.y)

//affichage en utilisant la fct afficher()
v1.afficher();
v2.afficher();

// addition

let v3 = v1.add(v2);
v3.afficher();