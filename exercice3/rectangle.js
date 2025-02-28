class rectangle{
    longueur;
    largeur;
    nom="ractangle";

    constructor(longueur , largeur){
        this.longueur=longueur;
        this.largeur = largeur
    }

    afficher(){
        console.log("la largeur :"+this.largeur)
        console.log("la longueur :"+this.longueur)
        console.log("le nom :"+this.nom)
    }

    surface(){
        return this.longueur * this.largeur; 
    }
}

class carre extends rectangle{
    nom = "carre";
}

let r = new rectangle(2 , 3 )
r.afficher();
console.log(r.surface())

let c = new carre(1 , 1)
c.afficher()
console.log(c.surface())

