class point{
    x;
    y;
    constructor(x=0 , y=0){
        this.x=x;
        this.y=y;
    }

}
class segment{
    p1 = new point();
    p2 = new point();

    constructor(x1 , y1 , x2 , y2){
        this.p1.x=x1;
        this.p1.y=y1;
        this.p2.x=x2;
        this.p2.y=y2;
    }

    afficher(){
        console.log(this.p1);
        console.log(this.p2)
    }
}


let s = new segment(1 , 2 , 3 , 4);
s.afficher();