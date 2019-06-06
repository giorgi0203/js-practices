Function.prototype.delay = function (ms) {
    return (...args) => {
        setTimeout(() => {
            this(...args);
        }, ms);
    }
}

function f() {
    console.log('hello');
}
f.delay(2000)(); // print "hello" after 1 second

// or with parameters:
function f2(a, b) {
    console.log(a + b);
}
f2.delay(5000)(1, 2); // print 3 after 1 second