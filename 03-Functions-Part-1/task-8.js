
function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: parameter type should be an array!");
    }
    if (arr.length <= 0) {
        throw new Error("Error: parameter can't be an empty!");
    }

    let el = arr.pop();
    console.log(el);
    f(arr);
}

f([1, 2, 3]);
f(1, 2, 3);
f('Content');
f([]);
