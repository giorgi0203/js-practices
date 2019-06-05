'use strict';

function CoffeeMachine(power, capacity) {
    const privatePower = power;
    var TIMER_ID;
    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive.");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };


    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return privatePower;
    }

    this.run = function () {
        TIMER_ID = setTimeout(onReady, getBoilTime());
    };
    this.stop = function () {
        clearTimeout(TIMER_ID);
        console.log('coffee isn\'t ready');
    };
}

let CM = new CoffeeMachine(100, 50);
console.log(CM.getPower());
