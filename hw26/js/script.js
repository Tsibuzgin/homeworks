'use strict';
function makeRand(num) {
        let usedNumbers = [num--];
        !function f() {
            let i = Math.round(Math.random() * usedNumbers.length);
            usedNumbers.splice(i,0,num--);
            num && f();
        }();
        return usedNumbers;
    }
    let arr = makeRand(100);
    console.log(arr);