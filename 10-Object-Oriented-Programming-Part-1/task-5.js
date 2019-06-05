function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let isReady = false;
    let WATER_HEAT_CAPACITY = 4200;
    let onReadyCb;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
        if (amount > capacity) {
            throw new Error("You can't put more water, than " + capacity);
        }
        waterAmount = amount;
    };

    this.setOnReady = (cb) => {
        onReadyCb = cb;
    }

    this.isRunning = function () {
        return isReady;
    }

    function onReady() {
        isReady = false;
        if (onReadyCb) {
            onReadyCb();
        } else {
            console.log('Coffee is ready');
        }
    }

    this.run = function () {
        isReady = true;
        setTimeout(onReady, getTimeToBoil());
    };
}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function () {
    console.log('After: ' + coffeeMachine.isRunning()); // After: false\
    console.log('Coffee is ready');
});