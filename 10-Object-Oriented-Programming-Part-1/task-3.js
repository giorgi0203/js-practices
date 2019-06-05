function CoffeeMachine(power, capacity) {
    const privatePower = power;
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let TIMER_ID;

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

    this.addWater = function (amount) {
        if (amount < 0) {
            throw new Error("water amount must be positive");
        }
        if (amount + waterAmount > capacity) {
            throw new Error("You can't put more water, than 400");
        }
        waterAmount += amount;
    }

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return power;
    }

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        TIMER_ID = setTimeout(onReady, getTimeToBoil());
    };

    this.stop = function () {
        clearTimeout(TIMER_ID);
    };
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // You can't put more water, than 400
coffeeMachine.run();
// coffeeMachine.stop();