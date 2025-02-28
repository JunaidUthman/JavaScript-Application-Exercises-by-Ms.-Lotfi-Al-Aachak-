let Etudiant ={
    etds : [
        {
        nom : 'C',
        prenom : 'C',
        age : 21,
        cne : "J131096336"
        },
        {
            nom : 'D',
            prenom : 'D',
            age : 21,
            cne : "J8273356"
        },
        {
            nom : 'A',
            prenom : 'A',
            age : 25,
            cne : "R98276Z89"
        }
    ],

    etudier : function(){
        console.log(this.nom + " etudie le AI")
    }

}

let Professeur={
    nom : "salmi",
    prenom : 'said',
    age : 40,
    cin : "AE547693",
    ensegner : function(){
        console.log(this.nom + " enseigne le AI")
    }
}


for(let i=0 ; i<Etudiant.etds.length - 1 ; i++){
    let min = i;
    for(let j=i+1 ; j<Etudiant.etds.length ; j++){
        let str_min = Etudiant.etds[min].nom +" "+Etudiant.etds[min].prenom
        let str_j = Etudiant.etds[j].nom +" "+Etudiant.etds[j].prenom
        if(str_min.localeCompare(str_j) > 0){
            min = j;
        }
    }
    if(Etudiant.etds[i] != Etudiant.etds[min] ){
        let tmp = Etudiant.etds[i];
        Etudiant.etds[i]=Etudiant.etds[min];
        Etudiant.etds[min] = tmp;
    }
}

console.log(Etudiant.etds)


