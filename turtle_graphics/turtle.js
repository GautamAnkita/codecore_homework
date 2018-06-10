class Turtle{
    constructor(x, y){
        this.startLoc = [x , y];
        this.endLoc = [x , y];
        this.allPointsArr = [[x,y]];
        this.gridSize = (x > y) ? x : y;

        /*
         0 will point to east, 1 will point to south, 2 will point to west
         and 3 will point to north as per the right angle directions.
        */
        this.currDir = 0; 
    }

    forward(steps){
        for(let i=1; i<= steps; i++){
            if(this.currDir === 0){
                this.endLoc[0] = this.endLoc[0] + 1;
            }
            else if(this.currDir === 1){
                this.endLoc[1] = this.endLoc[1] + 1;
            }
            else if(this.currDir === 2){
                this.endLoc[0] = this.endLoc[0] - 1;
            }
            else{
                this.endLoc[1] = this.endLoc[1] - 1;
            }
            this.gridSize = (this.endLoc[0] > this.gridSize) ? this.endLoc[0] : this.gridSize;
            this.gridSize = (this.endLoc[1] > this.gridSize) ? this.endLoc[1] : this.gridSize;

            this.allPointsArr.push([this.endLoc[0], this.endLoc[1]]);
        }
        return this;
    }

    print(){
        let result = "";
        for(let i = 0; i <=  this.gridSize; i++ ){
            for(let j = 0; j <= this.gridSize; j++){
                if(this.doesLocExist([j,i])) {
                    result+="#";
                } else {
                    result+="-";
                }
            }
            result+="\n";
        }
        console.log(result);
        return this;
    }

    doesLocExist(loc){
        return (this.allPointsArr.some(element => 
            (element[0]=== loc[0] && element[1] === loc[1])));
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

const flash = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();