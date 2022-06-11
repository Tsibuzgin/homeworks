'use strict';
function my_find (arr, func) {
    let c;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            c = arr[i];
            break;
        } else {
            c = undefined;
        }
    }
    return c;
}

let a = [1, 2, 3, 4, 5];
let b = my_find(a, x => x % 7 === 0);
console.log(b);