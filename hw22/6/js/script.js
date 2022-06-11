'use strict';
function my_every(arr, func) {
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            c++;
        }
    }
    if (c === arr.length) {
        return true;
    } else {
        return false;
    }
}

let a = [1, 2, 3, 4, 5];
let b = my_every(a, x => x % 2 === 0);
console.log(b);