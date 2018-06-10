class Turtle{
    constructor(x, y){
        this.startLoc = [x , y];
        this.endLoc = [x , y];
        this.allPointsArr = [[x,y]];

        /*
         0 will point to east, 1 will point to south, 2 will point to west
         and 3 will point to north as per the right angle directions.
        */
        this.currDir = 0; 
    }

    forward(steps){
        for(let i=1; i<= steps; i++){
            if(this.currDir === 0){
                this.endLoc[0] = this.startLoc[0] + i;
            }
            else if(this.currDir === 1){
                this.endLoc[1] = this.startLoc[1] + i;
            }
            else if(this.currDir === 2){
                this.endLoc[0] = this.startLoc[0] - i;
            }
            else{
                this.endLoc[1] = this.startLoc[1] - i;
            }
            this.allPointsArr.push([this.endLoc[0], this.endLoc[1]]);
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

    allPoints(){
        return this.allPointsArr;
    }

}

const flash = new Turtle(0, 4).forward(3).left().forward(3);
console.log(flash.allPoints());

