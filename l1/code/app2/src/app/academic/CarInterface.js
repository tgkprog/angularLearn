var Vehecle = /** @class */ (function () {
    function Vehecle() {
        this.speed = 5;
    }
    return Vehecle;
}());
var v1 = new Vehecle();
console.log("v1 obj ", v1);
console.log("v1 obj speed ", v1.speed);
var redCar = {
    constructor: function () {
        this.speed = 1;
    },
    accelerate: function (by) {
        if (by < 10 && by > -10) {
            this.speed += by;
        }
        if (this.speed > 140) {
            this.speed = 140;
        }
        else if (this.speed < 0)
            this.speed = 0;
        return this.speed;
    },
    getSpeed: function () {
        return this.speed;
    }
};
redCar.constructor(); //no new so its  just a method and we need to call it
console.log("red car from interface speed ", redCar.getSpeed());
