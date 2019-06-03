
function truncate(string, maxlength) {
    if (typeof string !== 'string') {
        throw new Error("First parameter must be string")
    }
    if (typeof maxlength !== 'number') {
        throw new Error("Second parameter must be number")
    }
    let res = string
    if (string.length > maxlength) {
        res = string.slice(0, maxlength - 3) + '...';
    }
    return res;
}

console.log(truncate('I wanna to say next thing about this topic', 22)); // I wanna to say next...

