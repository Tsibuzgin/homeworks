'use strict';
function my_includes(arr, check_elem) {
    let c;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === check_elem) {
            c = true; 
            break;
        } else {
            if (check_elem.toString() === 'NaN' && arr[i].toString() === 'NaN') {
                c = true;
            } else {
                c = false;
            }
        }
    }
    return c;
}

let a = [1, true, 3, NaN];
let b = my_includes(a, 1);
console.log(b);