class Turtle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.startLoc = {};
        this.endLoc = {};
        
        this.startLoc['xLoc'] = this.x;
        this.startLoc['yLoc'] = this.y;
        
        this.endLoc['xLoc'] = this.x;
        this.endLoc['yLoc'] = this.y;
    }

    forward(steps){
        this.endLoc['xLoc'] = this.endLoc['xLoc'] + steps;
        return this;
    }

    print(){
        console.log(this.startLoc);
        console.log(this.endLoc);
    }
}

const flash = new Turtle(0,0).forward(3);
flash.print();