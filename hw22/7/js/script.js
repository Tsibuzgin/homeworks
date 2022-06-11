'use strict';
function my_some(arr, func) {
    let c;
    if (arr.length === 0) {
        c = false;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i])) {
                c = true;
                break;
            } else {
                c = false;
            }
        }
    }
    return c;
}

let a = [1, 2, 3, 4, 5];
let b = my_some(a, x => x % 2 === 0);
console.log(b);