'use strict';
function my_findIndex(arr, func) {
    let c;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            c = i;
            break;
        } else {
            c = -1;
        }
    }
    return c;
}

let a = [1, 2, 3, 4, 5];
let b = my_findIndex(a, x => x < 0);
console.log(b);