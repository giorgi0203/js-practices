
function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Error: First parameter required and has to be only array!");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += f(arr[i]);
        } else {
            if (typeof arr[i] !== 'number') {
                throw new Error("Error: Not a number");
            }
            sum += arr[i];
        }
    }
    return sum;
}


console.log(f([[[1, 2], [1, 2]], [[2, 1], [1, 2]]]));
console.log(f([[[[[1, 2]]]]]));
console.log(f([[[[[1, 2]]], 2], 1]));
console.log(f([[[[[]]]]]));
console.log(f([[[[[], 1]]]]));
console.log(f([[[[['e'], 'a']]]]));


console.log("********************");