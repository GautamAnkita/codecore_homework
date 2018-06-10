class Turtle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.startLoc = [this.x , this.y];
        this.endLoc = [this.x , this.y];
        /*
         0 will point to east, 1 will point to south, 2 will point to west
         and 3 will point to north as per the right angle directions.
        */
        this.currDir = 0; 
    }

    forward(steps){
        if(this.currDir === 0){
            this.endLoc[0] = this.endLoc[0] + steps;
        }
        else if(this.currDir === 1){
            this.endLoc[1] = this.endLoc[1] + steps;
        }
        else if(this.currDir === 2){
            this.endLoc[0] = this.endLoc[0] - steps;
        }
        else{
            this.endLoc[1] = this.endLoc[1] - steps;
        }
        return this;
    }

    print(){
        console.log(this.startLoc);
        console.log(this.endLoc);
    }

    right(){
        if(this.currDir === 3){
            this.currDir = 0;
        } else{
            this.currDir++;
        }
        return this;
    }

    left(){
        if(this.currDir === 0){
            this.currDir = 3;
        } else{
            this.currDir--;
        }
        return this;
    }
}

const flash1 = new Turtle(0, 0).forward(3).right().forward(2);
flash1.print();
const flash2 = new Turtle(0, 4).forward(3).left().forward(3);
flash2.print();