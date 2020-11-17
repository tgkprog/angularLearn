class Vehecle{
    speed : number;

    constructor(){
        this.speed = 5;
    }

}

const v1 = new Vehecle();
console.log("v1 obj ",v1);
console.log("v1 obj speed ",v1.speed);

interface Car {
    
    //speed : number;
    grears? : number;
    constructor() : void;
    accelerate(by: number): number;
    getSpeed() : number;

}


const redCar : Car = {
    
    constructor(){
        this.speed = 1;
    },
    
    accelerate(by: number){
    
        if(by < 10 && by > -10 ){
            this.speed += by;
        }
        if(this.speed > 140){
            this.speed = 140;
        }else if(this.speed < 0)this.speed = 0;
        return this.speed;
    },

    getSpeed(){
        return this.speed;
    }
}

redCar.constructor();//no new so its  just a method and we need to call it
console.log("red car from interface speed ", redCar.getSpeed());