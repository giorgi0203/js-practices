function CoffeeMachine(power, capacity) {
    const privatePower = power;
    let waterAmount = 0;
    let WATER_HEAT_CAPACITY = 4200;
    let TIMER_ID;
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

    this.getPower = function () {
        return power;
    }

    this.addWater = function (amount) {
        if (amount < 0) {
            throw new Error("water amount must be positive");
        }
        if (amount + waterAmount > 400) {
            throw new Error("You can't put more water, than 400");
        }
        waterAmount += amount;
    }

    this.getWaterAmount = function () {
        return waterAmount;
    }

    this.setOnReady = (cb) => {
        onReadyCb = cb;
    }

    function onReady() {
        if (onReadyCb) {
            onReadyCb();
        }else{
            console.log('Coffee is ready');
        }
    }

    this.run = function () {
        TIMER_ID = setTimeout(onReady, getTimeToBoil());
    };

    this.stop = function () {
        clearTimeout(TIMER_ID);
        console.log('coffee isn\'t ready');
    };
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function () {
    var amount = coffeeMachine.getWaterAmount();
    console.log('Coffee is ready: ' + amount + 'ml'); // Coffee is ready: 150 ml
});

coffeeMachine.run();