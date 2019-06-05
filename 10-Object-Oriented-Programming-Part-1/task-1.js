function CoffeeMachine(power) {
    this.waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var TIMER_ID;
    var self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Coffee is ready');
    }

    this.stop = function () {
        clearTimeout(TIMER_ID);
    };

    this.run = function () {
        TIMER_ID = setTimeout(onReady, getBoilTime());
    };
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop();
// setTimeout(coffeeMachine.stop, 1500);//is ready
